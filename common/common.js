import * as Device from 'expo-device';
import * as Application from 'expo-application';
import { Platform } from 'react-native';
import _constant, { Portal } from '../constants/env';

const getDeviceId = async () => {
    if (Platform.OS === 'android') {
        return Application.androidId
    } else if (Platform.OS === 'ios' || Platform.OS === 'macos') {
        const id = await Application.getIosIdForVendorAsync()
        return id
    }
}

const getModel = () => {
    if (Platform.OS === 'android') {
        return Device.modelName
    } else if (Platform.OS === 'ios' || Platform.OS === 'macos') {
        const model = Device.modelId
        return model
    }
}


export const getClientInfo = async () => {
    const deviceId = await getDeviceId()
    const model = getModel()
    if (deviceId) {
        return {
            "DeviceId": deviceId,
            "ServiceId": Portal,
            "DeviceInfo": {
                "Model": model,
                "Manufacturer": Device.brand,
                "Name": Device.osBuildId,
                "Version": Device.osVersion,
                "Idiom": {},
                "Platform": {},
            },
            "AppInfo": {
                "Name": Application.applicationName,
                "PackageName": Application.applicationId,
                "Version": Application.nativeApplicationVersion,
                "Build": Application.nativeBuildVersion,
            },
            "DeviceType": Device.osName
        }
    }



}

export const getConstant = (key) => {
    return _constant.key
}