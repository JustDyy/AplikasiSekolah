/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlatGrid from 'react-native-super-grid';
import TextInputNisn from '../../components/TextInputNisn';
import Menu from '../../components/Menu';
import LoginButton from '../../components/LoginButton';
import HomeScreen from './HomeScreen';
import {route, color, image} from '../../constant';
import logo from '../../Assets/font.png';

function kliklogin(nisn, password, nav) {
  if (!nisn || !password) {
    return Alert.alert('Error', 'NISN atau Password Tidak Boleh kosong');
  }
  if (password.length < 8) {
    return Alert.alert('Error', 'Password harus 8 karakter');
  }
  try {
    console.log(nisn + password);
    const urllogin =
      'https://dulearn.rugefx.com/api/auth/login?' +
      new URLSearchParams({
        reg_num: nisn,
        password: password,
      });
    fetch(urllogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.success != 'Failed') {
          //console.log(json.data.result.accessToken)
          storeData(json.data);
          nav.navigate('Home');
        } else {
          alert(json.message);
        }
      })
      .catch(e => {
        console.error(e);
      });
  } catch (error) {
    Alert.alert('Error', error.message);
  }
}

export default function App(props) {
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');
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
        console.log('TOKEN :');
        console.log(value);
      }
    } catch (e) {
      //error reading value
    }
  };
  // const handleLogin = () => {
  //   // console.log(`Nisn : ${nisn}, Password : ${password}`);

  //   // axios.post(
  //   //   `http://192.168.147.208:8000/api/auth/login?reg_num=${nisn}&password=${password}`,
  //   // ).then(res => console.log(res));

  //   fetch(
  //     `https://rugefx.com/dulearn/api/auth/login?reg_num=${nisn}&password=${password}`,
  //     {
  //       method: 'POST',
  //     },
  //   )
  //     .then(res => res.json())
  //     .then(data => console.log(JSON.stringify(data)))
  //     .catch(e => console.log(e));
  // };

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
          source={require('./../../src/font.png')}
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
                handlePress={() => kliklogin(nisn, password, props.navigation)}
              />
              <Menu SignupText="Registrasi" />
            </View>
          )}
        />
      </View>
    </View>
  );
}
