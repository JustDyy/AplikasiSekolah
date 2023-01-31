/* eslint-disable prettier/prettier */
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatGrid} from 'react-native-super-grid';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import TextInputNisn from './src/components/TextInputNisn';
import LoginButton from './src/components/LoginButton';
import Menu from './src/components/Menu';

export default function App() {
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Nisn : ${nisn}, Password : ${password}`);
    fetch(
      `http://localhost:8000/api/auth/login?reg_num=${nisn}&password=${password}`,
      {
        method: 'POST',
      },
    )
      .then(res => res.json())
      .then(data => console.log(JSON.stringify(data)))
      .catch(e => console.log(e));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#070B30'}}>
      <StatusBar backgroundColor="#070B30" barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
        }}>
        <Image
          source={require('./src/font.png')}
          style={{width: 350, height: 90}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Welcome to Dulern!
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
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
                color="black"
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
                handlePress={handleLogin}
              />
              <Menu SignupText="Registrasi Cuy" />
            </View>
          )}
        />
      </View>
    </View>
  );
}
