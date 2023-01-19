// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// //import Iconb from 'react-native-vector-icons/Ionicons';
// //import Icona from 'react-native-vector-icons/Feather';


// //Screen
// import HomeScreen from './screens/HomeScreen';
// import LoginScreen from './screens/LoginScreen';

// //namaScreen
// const homeName = 'Home';
// const loginName = 'Login';

// //const Tab = createBottomTabNavigator();

// export default function MainContainer(){
//     return (
//       <NavigationContainer>
//         <Tab.Navigator
//           initialRouteName={homeName}
//           screenOptions={{
//             tabBarActiveTintColor: '#fff',
//             tabBarInactiveTintColor: 'lightgray',
//             tabBarActiveBackgroundColor: '#42489E',
//             tabBarInactiveBackgroundColor: '#42489E',
//             style: {
//               backgroundColor: '#42489E',
//               paddingBottom: 3,
//             },
//           }}>
//           <Tab.Screen
//             name={homeName}
//             component={HomeScreen}
//             options={{
//               tabBarIcon: ({focused}) => (
//                 <Icon
//                   name={focused ? 'home' : 'home-alert-outline'}
//                   size={20}
//                   color="black"
//                 />
//               ),
//             }}
//           />

//           <Tab.Screen
//             name={loginName}
//             component={LoginScreen}
//             options={{
//               tabBarIcon: ({focused}) => (
//                 <Icon
//                   name={focused ? 'home' : 'home-alert-outline'}
//                   size={20}
//                   color="black"
//                 />
//               ),
//             }}
//           />

          
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
// }