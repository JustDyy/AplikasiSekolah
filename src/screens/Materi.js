import React from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function Materi({navigation}) {
  function _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  function _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  return (
    <>
      <View style={styles.pala}>
        <Image
          source={require('../Assets/img/font.png')}
          style={{
            width: 150,
            height: 30,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}
        />
      </View>
      <View style={styles.bungkusjudul}>
        <Text style={styles.judul}>Materi</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
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

        <TouchableOpacity onPress={() => navigation.navigate('Xmat')}>
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

        <TouchableOpacity onPress={() => navigation.navigate('Xmat')}>
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

        <TouchableOpacity onPress={() => navigation.navigate('Xmat')}>
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
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#1F1F39',
  },

  pala: {
    backgroundColor: '#161719',
  },

  buttonHeader: {
    marginBottom: 30,
    width: 350,
    height: 150,
    backgroundColor: '#42489E',
    justifyContent: 'center',
    borderRadius: 10,
  },

  bungkusjudul: {
    backgroundColor: '#1F1F39',
  },

  judul: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    backgroundColor: '#1F1F39',
    alignSelf: 'center',
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

  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
