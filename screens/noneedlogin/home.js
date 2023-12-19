import { View, ScrollView, Image, Text } from 'react-native'
import React, { useEffect } from 'react'
import { APIPost } from '../../common/apicomm';
import { useSelector, useDispatch } from 'react-redux';
import { setUpComming } from '../../redux/reducers/storeData';

import Upcoming from '../../components/upcomming';

import Menu from '../../components/menu'
import { Dimensions } from 'react-native'

// import { currentLang } from '../../localization/localization';

export default function Home() {
    const { upComming } = useSelector(state => state.storeData)
    const dispatch = useDispatch()
    const getUpComming = async () => {
        try {
            await APIPost('ctmrequest/homegetlist', {}, handleGetUpcommingSuccess, handleGetUpcommingFailed)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (upComming.length === 0) {
            getUpComming()
        }
    }, [])

    const handleGetUpcommingSuccess = (upCommingData) => {
        const { data } = upCommingData
        dispatch(setUpComming(data))
    }

    const handleGetUpcommingFailed = (error) => {
        console.log(error)
    }
    const { width, height } = Dimensions.get('window');

    return (
        <View className="flex-1">
            <Image className="flex-1 absolute " style={{ top: height / 2, left: width / 2, transform: [{ translateY: -height / 6 }, { translateX: -width / 4 }], }} source={require('../../assets/home-icon.png')} />
            <ScrollView className="flex-1 flex-col p-4">

                <Menu />
                <Upcoming />
                {/* <Text>Test:{currentLang()}</Text> */}
            </ScrollView>
        </View>
    )
}
