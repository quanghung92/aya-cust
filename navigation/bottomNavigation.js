// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/noneedlogin/home';
// import Setting from '../screens/noneedlogin/setting';
// import { Image, } from 'react-native'
// import { Icon } from 'react-native-paper';
// const Tab = createBottomTabNavigator();

// export default function BottomNavigation() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" options={{
//                 headerTitle: () => (
//                     <Image style={{ width: 200, height: 40, objectFit: 'contain', margin: 'auto' }}
//                         source={require('../assets/logo.png')}
//                     />
//                 ),
//                 headerTitleAlign: 'center',
//                 headerStyle: { height: 110 },
//                 tabBarIcon: ({ focused }) => (
//                     <Icon color={focused ? '#D32D2F' : '#475467'} source='home' size={30} />
//                 ),
//                 tabBarActiveTintColor: '#D32D2F',
//                 tabBarInactiveTintColor: '#475467'
//             }} component={Home} />
//             <Tab.Screen name="Setting" options={{
//                 headerTitle: 'Setting',
//                 headerTitleAlign: 'center',
//                 headerStyle: { height: 110 },
//                 tabBarIcon: ({ focused }) => (
//                     <Icon color={focused ? '#D32D2F' : '#475467'} source='cog-outline' size={30} />
//                 ),
//                 tabBarActiveTintColor: '#D32D2F',
//                 tabBarInactiveTintColor: '#475467'
//             }} component={Setting} />

//         </Tab.Navigator>
//     );
// }