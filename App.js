import * as React from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';

export default function App(){
  return(
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
