// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { TextInput } from 'react-native-paper'
// import * as Crypto from 'expo-crypto';
// export default function PasswordInput(props) {
//     const [passWord, setPassWord] = useState('')
//     const [showPass, setShowPass] = useState(false)

//     const handelSetPassWord = async (password) => {
//         setPassWord(password)
//         const pw = await Crypto.digestStringAsync(
//             Crypto.CryptoDigestAlgorithm.SHA256, password
//         )
//         props.handelSetPassWord(password, pw)
//     }
//     return (
//         <View>
//             <TextInput
//                 label={'PassWord'}
//                 mode='outlined' value={passWord}
//                 onChangeText={password => handelSetPassWord(password)}
//                 secureTextEntry={!showPass}
//                 right={<TextInput.Icon onPress={() => setShowPass(!showPass)} icon={showPass ? "eye-off" : "eye"} />}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({})