/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from './src/constant/route';
import LoginScreen from './src/screens/auth/LoginScreen';
import XmatScreen from './src/screens/XmatScreen';
import XImatScreen from './src/screens/XImatScreen';
import XIImatScreen from './src/screens/XIImatScreen';
import Materi from './src/screens/Materi';
import Account from './src/screens/Account';
import Diskusi  from './src/screens/Diskusi';
import AuthContext, {AuthContextProvider} from './src/contexts/AuthContext';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export const MaterialComponents = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="XMat" component={XmatScreen}/>
      <Stack.Screen name="XIMat" component={XImatScreen}/>
      <Stack.Screen name="XIIMat" component={XIImatScreen}/>
      <Stack.Screen name='Materi' component={Materi}/>
      <Stack.Screen name="Diskusi" component={Diskusi}/>
    </Stack.Navigator>
  )
}

export const AkunComponents = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Akun" component={Account} />
    </Stack.Navigator>
  );
}

export const BottomNavigations = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#42489E',
        },
      }}>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Materials" component={MaterialComponents} />
      <BottomTabs.Screen name="Akun" component={AkunComponents}/>
    </BottomTabs.Navigator>
  );
};

export const MainNavigation = () => {
  const { token } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token ? (
          <>
            <Stack.Screen name="BottomTabs" component={BottomNavigations} />
            <Stack.Screen name= {ROUTES.XMAT} component={XmatScreen} />
          </>
        ) : (
          <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthContextProvider>
      <MainNavigation />
    </AuthContextProvider>
  );
}
