import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  SliderBase,
} from 'react-native';

function LoginButton(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        paddingVertical: 14,
        marginTop: 30,
        marginHorizontal: 30,
        borderRadius: 15,
        elevation: 3,
        marginBottom: 30,
      }}>
      <Text
        style={{
          color: '#FCFCFF',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
export default LoginButton;
