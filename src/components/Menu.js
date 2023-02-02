import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Menu(props) {
  return (
    <View style={{marginHorizontal: 20}}>
      <Text
        style={{
          marginBottom: 10,
          color: '#FCFCFF',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Jika belum memiliki akun silahkan
      </Text>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#684FFF',
            fontSize: 15,
          }}>
          {props.SignupText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Menu;
