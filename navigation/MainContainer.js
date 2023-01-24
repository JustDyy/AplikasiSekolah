import {View, Text, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInputNisn from '../src/components/TextInputNisn';
import React, {useState, useEffect} from 'react';

//import Iconb from 'react-native-vector-icons/Ionicons';
//import Icona from 'react-native-vector-icons/Feather';

//Screen
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

//namaScreen
const homeName = 'Home';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="login"
        screenOptions={{
            headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'lightgray',
          tabBarActiveBackgroundColor: '#42489E',
          tabBarInactiveBackgroundColor: '#42489E',
          style: {
            backgroundColor: '#42489E',
            paddingBottom: 3,
          },
        }}>
        <Tab.Screen
          name="login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-alert-outline'}
                size={20}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-alert-outline'}
                size={20}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
