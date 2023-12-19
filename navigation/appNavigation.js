
// import React, { useEffect } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import Login from '../screens/needlogin/login';
// import { useSelector, useDispatch } from 'react-redux';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { getClientInfo } from '../common/common';
// import { setClientInfo } from '../redux/reducers/clientInfo';

// import BottomNavigation from './bottomNavigation';

// import Home from '../screens/noneedlogin/home';

// const Stack = createNativeStackNavigator();


// export default function AppNavigation() {
//     const { token } = useSelector(state => state.userReducer)
//     const { clientInfo } = useSelector(state => state.clientInfo)
//     const dispatch = useDispatch()
//     useEffect(() => {
//         const getInfo = async () => {
//             try {
//                 const clientInfo = await getClientInfo();
//                 dispatch(setClientInfo(clientInfo))
//             } catch (error) {
//                 console.error('Error fetching client info:', error);
//             }
//         };
//         if (Object.keys(clientInfo).length === 0) {
//             getInfo();
//         }

//     }, []);

//     if (token) {
//         return (
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     <Stack.Screen name='home' options={{
//                         headerShown: false
//                     }} component={BottomNavigation} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         )
//     } else {
//         return (
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     <Stack.Screen options={{
//                         headerShown: false
//                     }} name="login" component={Login} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         )
//     }

// }
