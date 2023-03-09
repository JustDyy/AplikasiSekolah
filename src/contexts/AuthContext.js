/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createContext, useEffect, useState} from 'react';
// import { useNavigation } from "@react-navigation/native";
import apiClient from '../apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [token, setToken] = useState(null);

  // const memoedToken

  apiClient.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        console.log("set header")
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  async function getUserToken() {
    let userToken = await AsyncStorage.getItem('token_key');
    return userToken ? userToken : null;
  }

  useEffect(() => {
    getUserToken().then(token => {
      setToken(token);
    });
  }, []);

  //   const navigation = useNavigation();

  const login = async payload => {
    try {
      const res = await apiClient.post('/api/auth/login', payload);
      await AsyncStorage.setItem('token_key', res.data.data);
      setToken(res.data.data);
      console.log(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    const res = await apiClient.get('/api/auth/logout', {}, {
      Authentication : `${token}`
    });
    if(res.data.success === "Success"){
      console.log("YA")
    }
    await AsyncStorage.removeItem('token_key');
    setToken(null);
  };

  return (
    <>
      <AuthContext.Provider value={{token, login, logout}}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
