/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function HomeScreen({navigation}) {
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
          source={require('../../src/font.png')}
          style={{
            width: 150,
            height: 30,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.judul}>Materi</Text>

        <TouchableOpacity onPress={() => navigation.navigate('materi')}>
          <View style={styles.buttonkelas}>
            <Text style={styles.textmateri}>Sistem Komputer</Text>
            <Image
              source={require('../../src/materi.png')}
              style={{
                width: 350,
                height: 75,
                borderRadius: 10,
                marginTop: 40,
                position: 'absolute',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <View style={styles.buttonkelas}>
            <Text style={styles.textmateri}>Komputer dan Jaringan</Text>
            <Image
              source={require('../../src/materi.png')}
              style={{
                width: 350,
                height: 75,
                borderRadius: 10,
                position: 'absolute',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <View style={styles.buttonkelas}>
            <Text style={styles.textmateri}>Pemograman Dasar</Text>
            <Image
              source={require('../../src/materi.png')}
              style={{
                width: 350,
                height: 75,
                borderRadius: 10,
                position: 'absolute',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <View style={styles.buttonkelas}>
            <Text style={styles.textmateri}>Dasar Desain Grafiis</Text>
            <Image
              source={require('../../src/materi.png')}
              style={{
                width: 350,
                height: 75,
                borderRadius: 10,
                position: 'absolute',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <View style={styles.buttonkelas}>
            <Text style={styles.textmateri}>
              Simulasi dan Komunikasi Digital
            </Text>
            <Image
              source={require('../../src/materi.png')}
              style={{
                width: 350,
                height: 75,
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
    justifyContent: 'center',
    borderRadius: 10,
  },

  judul: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 20,
    fontFamily: 'Inter_Bold',
    color: '#FFFFFF',
  },

  buttonkelas: {
    marginBottom: 30,
    width: 350,
    height: 75,
    backgroundColor: '#42489E',
    justifyContent: 'center',
    borderRadius: 10,
  },

  textmateri: {
    textAlign: 'center',
    fontSize: 20,
    zIndex: 5,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
