import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, StatusBar, TextInput} from 'react-native';
import TextInputNisn from './src/components/TextInputNisn';

export default function App() {
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');

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

      <TextInputNisn
        state={nisn}
        set={setNisn}
        Icon="user"
        placeholder="Masukan NISN"
        isPassword={false}
      />
      <TextInputNisn
        state={password}
        set={setPassword}
        Icon="lock"
        placeholder="Masukan password"
        isPassword={true}
      />
    </View>
  );
}
