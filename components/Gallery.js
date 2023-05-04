import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Gallery() {
  return (
    <View style={styles.div_style}>
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      
    </View>
  );
}

const styles = {
  gallery: {
    height: '140px',
    width: '140px',
    margin:'10px'
  },
  div_style: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'center'
  },
 
};