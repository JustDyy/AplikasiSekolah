import React from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlatGrid from 'react-native-super-grid';

export default function Account({navigation}) {
  function _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  function _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  return (
    <>
      <View style={styles.bungkusjudul}>
        <Text style={styles.judul}>Kembali</Text>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back"
            size={25}
            style={{color: '#FFFFFF', marginTop: 10, marginBottom: 10}}></Icon>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <Image
            source={require('../Assets/img/font.png')}
            style={{
              width: 170,
              height: 45,
              marginTop: 30,
            }}
          />
          <Image
            source={require('../Assets/img/Photo-Profile.png')}
            style={{
              width: 150,
              height: 150,
              marginTop: 60,
              marginBottom: 30,
            }}
          />
          <Text style={styles.textmateri}>Rusman</Text>
        </View>

        <View>
          <ImageBackground
            source={require('../Assets/img/blkg-ot.png')}
            style={{
              width: 420,
              height: 415,
              marginTop: 40,
              paddingTop: 40,
            }}>
            <Text
              style={{
                fontSize: 13,
                paddingLeft: 35,
                color: '#91919F',
              }}>
              Support
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'thin',
                  color: '#FFFFFF',
                  marginTop: 20,
                  paddingLeft: 35,
                }}>
                Tentang DuLearn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'thin',
                  color: '#FFFFFF',
                  marginTop: 10,
                  paddingLeft: 35,
                }}>
                Koleksi
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <TouchableOpacity
                style={{
                  width: '60%',
                  height: 40,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  Alert.alert('Logout', 'Apakah anda ingin logout?', [
                    {
                      text: 'Cancel',
                      // onPress: () => null,
                      // style: 'cancel',
                    },
                    {
                      text: 'Yes',
                      // onPress: () =>
                      //   AsyncStorage.clear().then(
                      //     navigation.navigate(ROUTES.LOGIN),
                      //   ),
                    },
                  ]);
                  return true;
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                marginTop: 25,
                color: '#FFFFFF',
              }}>
              Copyright © 2023 | Group 6 Design
            </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
  },
  container: {
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#1F1F39',
    flex: 1,
  },

  pala: {
    backgroundColor: '#161719',
  },

  buttonHeader: {
    marginBottom: 30,
    width: 350,
    height: 150,
    backgroundColor: '#42489E',
    marginLeft: 0,
    borderRadius: 10,
  },

  bungkusjudul: {
    backgroundColor: '#1F1F39',
  },

  judul: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'thin',
    backgroundColor: '#1F1F39',
    marginLeft: 25,
    fontFamily: 'Inter_Bold',
    color: '#FFFFFF',
  },

  buttonkelas: {
    marginBottom: 30,
    width: 304,
    height: 141.56,
    backgroundColor: '#42489E',

    borderRadius: 10,
  },

  textmateri: {
    fontSize: 25,
    zIndex: 5,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  textsubmateri: {
    fontSize: 10,
    marginLeft: 20,
    zIndex: 5,
    fontWeight: 'reguler',
    color: '#FFFFFF',
  },

  button: {
    alignSelf: 'center',
    marginTop: 40,
    backgroundColor: '#9C0505',
    alignItems: 'center',
    borderRadius: 15,
    width: 98,
    height: 45,
  },
});
