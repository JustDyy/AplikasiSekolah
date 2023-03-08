/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from './src/constant/route';
import LoginScreen from './src/screens/auth/LoginScreen';
import XmatScreen from './src/screens/XmatScreen';
import XImatScreen from './src/screens/XImatScreen';
import Materi from './src/screens/Materi';
import AuthContext, {AuthContextProvider} from './src/contexts/AuthContext';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

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
      <BottomTabs.Screen name={ROUTES.XMAT} component={XmatScreen} />
      <BottomTabs.Screen name="Materi" component={Materi} />
      <BottomTabs.Screen name="XIMateri" component={XImatScreen} />
    </BottomTabs.Navigator>
  );
};
export const MainNavigation = () => {
  const {token} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!token ? (
          <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        ) : (
          <Stack.Screen name="BottomTabs" component={BottomNavigations} />
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
