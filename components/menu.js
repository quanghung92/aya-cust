// import { Text, View, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { getConstant } from '../common/common';
// import { APIPost } from '../common/apicomm';
// import { setMenu } from '../redux/reducers/menu';
// import { menuIcon } from '../constants/menuIcon';
// export default function Menu() {
//     const { menuData } = useSelector(state => state.menu)
//     const [MenuData, setmenuData] = useState(menuData)

//     const dispatch = useDispatch()
//     useEffect(() => {
//         async function getMenu() {
//             try {
//                 await APIPost('loadmenu', {
//                     portalId: getConstant('Portal')
//                 }, handleSuccess, handleFailed)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         if (menuData.length === 0) {
//             getMenu()
//         }
//     }, [menuData, dispatch])

//     const handleSuccess = (response) => {
//         setmenuData(response.data)

//         dispatch(setMenu(response.data))
//     }

//     const handleFailed = (err) => {
//         console.log(err)
//     }

//     const getMenuIcon = (icon) => {
//         let iconMenu = null
//         for (const key in menuIcon) {
//             {
//                 if (icon === key) {
//                     iconMenu = menuIcon[key]
//                 }

//             }
//         }
//         return iconMenu
//     }
//     const menuItem = (child) => {
//         return (

//             child.map((v) => (
//                 <View key={v.name} className="flex-col items-center w-1/3">
//                     <Image
//                         style={{ objectFit: 'contain' }}
//                         className="w-8 h-6"
//                         source={getMenuIcon(v.icon)}
//                     />
//                     <Text className="mt-3 text-gray-900 font-medium text-sm">{v.name}</Text>
//                 </View>
//             ))


//         )
//     }
//     return (
//         <View>
//             {
//                 MenuData.length > 0 && MenuData.map((v, index) => {
//                     return (
//                         <View key={index}  >
//                             <Text className="uppercase font-semibold text-sm">{v.name}</Text>
//                             <View className="flex-row gap-4 mt-4 mb-5">
//                                 {menuItem(v._children)}
//                             </View>

//                         </View>
//                     )
//                 })
//             }
//         </View>
//     )
// }
