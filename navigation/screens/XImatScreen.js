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

export default function XmatScreen({navigation}) {
  return (
    <>
      <View style={styles.pala}>
        <Image
          source={require('../../src/font.png')}
          style={{width: 150, height: 30}}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pala: {
    backgroundColor: '#161719',
  },
});
