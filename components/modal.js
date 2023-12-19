// import React, { useEffect, useState } from 'react';
// import { View, Image } from 'react-native';
// import { Modal, Portal, Text, PaperProvider, Button } from 'react-native-paper';
// const ModalShow = (props) => {
//     const [visible, setVisible] = React.useState(props.showModal);
//     useEffect(() => {
//         setVisible(props.showModal)
//     }, [props.showModal])
//     const hideModal = () => {
//         props.hideModal()
//         setVisible(false)
//     }
//     return (
//         <View className="flex-1">
//             <Portal>
//                 <Modal style="px-4" visible={visible} onDismiss={hideModal} contentContainerStyle={{
//                     backgroundColor: 'white',
//                     padding: 20,
//                     width: '90%',
//                     alignSelf: "center",
//                     borderRadius: 13
//                 }} presentationStyle="fullscreen">
//                     <View className="flex flex-row justify-center mb-2">
//                         <Image className="w-13 h-13 object-contain"
//                             source={require('../assets/faile.png')}
//                         />
//                     </View>
//                     <Text className="font-semibold text-lg text-gray-900 text-center">Failed</Text>
//                     <Text className="text-center font-normal text-sm">{props.Failed ? props.Failed : ''}</Text>
//                     <Button className="bg-Primary mt-8 rounded-lg h-12 flex justify-center" onPress={() => hideModal()}><Text className="text-white">OK</Text></Button>
//                 </Modal>
//             </Portal>
//         </View>
//     );
// };



// export default ModalShow;