// import { Text, View } from 'react-native'
// import React from 'react'
// import { FlatList } from 'react-native-gesture-handler'
// import { Icon } from 'react-native-paper'
// import { useSelector } from 'react-redux';
// export default function Upcoming(props) {
//     const { upComming } = useSelector(state => state.storeData)
//     console.log(upComming.data);
//     const itemUpcoming = (items) => {
//         return items.map((item) => {
//             return (

//                 <View key={item.RequestId} className="p-5 bg-white/70 border-b border-gray-200" >
//                     <Text>{item.RequestName}</Text>
//                     <View className="flex-row items-center my-2">
//                         <Icon color='#039874' size={20} source="calendar-month" />
//                         <Text className="ml-3">{item.DateTimeAppointment}</Text>
//                     </View>
//                     <View className="flex-row items-center">
//                         <Icon color='#039874' size={20} source="map-marker-circle" />
//                         <Text className="ml-3">{item.BookingBranch}</Text>
//                     </View>
//                 </View>


//             )
//         })

//     }
//     return (
//         <View className=" shadow-sm ">
//             <Text className="uppercase text-gray-700 font-semibold text-sm">Upcoming schedule</Text>
//             <View className="rounded-md overflow-hidden mt-3 mb-6 shadow-sm">
//                 {upComming?.data?.length > 0 &&
//                     itemUpcoming(upComming.data)
//                 }
//             </View>
//         </View>
//     )
// }
