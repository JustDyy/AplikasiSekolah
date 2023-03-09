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

export default function Koleksi({navigation}) {
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
              marginTop: 15,
            }}
          />
          <Text style={styles.judul1}>KOLEKSI</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Diskusi')}>
            <View style={styles.buttonkelas}>
              <Text style={styles.textmateri}>Memahami sistem bilangan</Text>
              <Text style={styles.textsubmateri}>
                Sistem Bilangan atau Number System adalah Suatu cara untuk
                mewakili besaran dari suatu item fisik. Sistem Bilangan
                menggunakan suatu bilangan dasar atau basis (base / radix) yang
                tertentu.
              </Text>

              <Image
                source={require('../Assets/img/mat-lanj.png')}
                style={{
                  width: 304,
                  height: 141.56,
                  borderRadius: 10,
                  position: 'absolute',
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Diskusi')}>
            <View style={styles.buttonkelas}>
              <Text style={styles.textmateri}>Membuat Design dengan Figma</Text>
              <Text style={styles.textsubmateri}>
                Sistem Bilangan atau Number System adalah Suatu cara untuk
                mewakili besaran dari suatu item fisik. Sistem Bilangan
                menggunakan suatu bilangan dasar atau basis (base / radix) yang
                tertentu.
              </Text>

              <Image
                source={require('../Assets/img/mat-lanj.png')}
                style={{
                  width: 304,
                  height: 141.56,
                  borderRadius: 10,
                  position: 'absolute',
                }}
              />
            </View>
          </TouchableOpacity>
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

  judul1: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    backgroundColor: '#1F1F39',
    alignSelf: 'center',
    fontFamily: 'Inter_Bold',
    color: '#FFFFFF',
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
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 15,
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
