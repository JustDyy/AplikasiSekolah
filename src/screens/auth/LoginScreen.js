/* eslint-disable prettier/prettier */
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlatGrid from 'react-native-super-grid';
import TextInputNisn from '../../components/TextInputNisn';
import Menu from '../../components/Menu';
import LoginButton from '../../components/LoginButton';
// import HomeScreen from './HomeScreen';

import route from '../../constant/route';
import color from '../../constant/color';
import image from '../../constant/image';
import AuthContext from '../../contexts/AuthContext';
import apiClient from '../../apiClient';

const storeData = async value => {
  try {
    console.log('LOGIN');
    await AsyncStorage.setItem('token_key', value);
    getData();
    //const value = await
    AsyncStorage.getItem('token_key');
    //console.log("Token:"+value)
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token_key');
    if (value !== null) {
      console.log('TOKEN :' + value);
      return value;
    }
    return null;
  } catch (e) {
    return null;
  }
};

export default function LoginScreen({navigation}) {
  const {login} = useContext(AuthContext);

  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');

  async function kliklogin() {
    if (!nisn || !password) {
      return Alert.alert('Error', 'NISN atau Password Tidak Boleh kosong');
    }
    if (password.length < 8) {
      return Alert.alert('Error', 'Password harus 8 karakter');
    }
    try {
      console.log(nisn + password);
      await login({nisn, password});
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  // return (
  //   <View style={{flex: 1, backgroundColor: color.col}}>
  //     <StatusBar backgroundColor="#070B30" barStyle="dark-content" />
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         gap: 0,
  //       }}>
  //       <Image source={image.logo} style={{width: 350, height: 90}} />
  //       <View style={{marginLeft: 10}}>
  //         <Text style={{fontSize: 25, fontWeight: 'bold'}}>
  //           Welcome to Dulearn!
  //         </Text>
  //         <Text style={{fontSize: 15, fontWeight: 'bold'}}>
  //           Please sign-in to your account and start the adventure
  //         </Text>
  //       </View>
  //     </View>

  //     <View style={{height: 'auto'}}>
  //       <FlatGrid
  //         itemDimension={500}
  //         data={[2]}
  //         renderItem={({item}) => (
  //           <View>
  //             <TextInputNisn
  //               state={nisn}
  //               set={setNisn}
  //               Icon="user"
  //               placeholder="NISN"
  //               isPassword={false}
  //             />
  //             <TextInputNisn
  //               state={password}
  //               set={setPassword}
  //               Icon="lock"
  //               placeholder="Password"
  //               isPassword={true}
  //             />
  //             <LoginButton
  //               text="Login"
  //               color="#494C9F"
  //               handlePress={() => kliklogin()}
  //             />
  //             <Menu SignupText="Registrasi" />
  //           </View>
  //         )}
  //       />
  //     </View>
  //   </View>
  // );
  return (
    <View style={{flex: 1, backgroundColor: color.col}}>
      <StatusBar backgroundColor="#070B30" barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          marginBottom: 50,
        }}>
        <Image
          source={require('../../Assets/img/font.png')}
          style={{width: 350, height: 90}}
        />
        <View style={{marginLeft: 30, marginRight: 30}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Welcome to Dulern 👋
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'thin', color: 'white'}}>
            Please sign-in to your account and start the adventure
          </Text>
        </View>
      </View>

      <View style={{height: 'auto'}}>
        <FlatGrid
          itemDimension={500}
          data={[2]}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#161719',
                borderRadius: 30,
                paddingTop: 10,
              }}>
              <TextInputNisn
                state={nisn}
                set={setNisn}
                Icon="user"
                placeholder="NISN"
                isPassword={false}
              />
              <TextInputNisn
                state={password}
                set={setPassword}
                Icon="lock"
                placeholder="Password"
                isPassword={true}
              />
              <LoginButton
                text="Login"
                color="#494C9F"
                handlePress={() => kliklogin()}
              />
              <Menu SignupText="Registrasi" />
            </View>
          )}
        />
      </View>
    </View>
  );
}
