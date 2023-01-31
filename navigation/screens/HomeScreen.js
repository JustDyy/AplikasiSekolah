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
          style={{width: 150, height: 30}}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={_onPressButton}>
          <View style={styles.buttonHeader}>
            <Image
              source={require('../../src/Avatar.png')}
              style={{
                position: 'absolute', 
                marginLeft: 20,
                width:80,
                height:110
                }}
            />
            <Text style={styles.buttonText}>Welcome Dulern</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.judul}>Classes</Text>

        <TouchableOpacity onPress={() => navigation.navigate('sepuluhName')}>
          <View style={styles.buttonkelas}>
            <Text style={styles.textkelas}>X RPL</Text>
            <Image
              source={require('../../src/RPL1.png')}
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
            <Text style={styles.textkelas1}>XI RPL</Text>
            <Image
              source={require('../../src/Rpl2.png')}
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
            <Text style={styles.textkelas}>XII RPL</Text>
            <Image
              source={require('../../src/RPL1.png')}
              style={{
                width: 350,
                height: 75,
                borderRadius: 10,
                position: 'absolute',
              }}
            />
          </View>
        </TouchableOpacity>

        <Text style={styles.judul}>Materi Terakhir</Text>

        <TouchableOpacity onPress={_onPressButton}>
          <View style={styles.buttonHeader}>
            <Text style={styles.buttonText}>Welcome Dulern</Text>
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

  judul: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
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

  textkelas: {
    textAlign: 'right',
    marginRight: 15,
    fontSize: 25,
    zIndex: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  textkelas1: {
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 25,
    zIndex: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  buttonText: {
    textAlign:'center',
    padding: 20,
    color: 'white',
    
  },
});
