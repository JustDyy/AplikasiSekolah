import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  SliderBase,
} from 'react-native';

function TextInputNisn(props) {
  return (
    <View>
    
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 30,
          marginTop: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FCFCFF',
            width: 50,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            paddingVertical: 15,
            elevation: 3,
          }}>
          <Icon name={props.Icon} size={25} color="#5D5FE" />
        </View>
        <TextInput
          value={props.state}
          style={{
            backgroundColor: '#FCFCFF',
            //marginHorizontal: 20,
            //borderRadius: 15,
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 15,
            elevation: 3,
            paddingLeft: 10,
          }}
          placeholder={props.placeholder}
          onChangeText={text => {
            props.set(text);
            console.log(text);
          }}
          secureTextEntry={props.isPassword}
        />
      </View>
    </View>
  );
}

export default TextInputNisn;
