import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.div_style}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.text}>FirstMobileApp</Text>
    </View>
  );
}

const styles = {
  logo: {
    height: '40px',
    width: '135px',
    marginLeft:'10px'
  },
  div_style: {
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    margin: 'auto',
    fontSize:'18px',
    fontWeight:'bold'
  },
};
