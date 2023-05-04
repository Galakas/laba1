import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Main() {
  return (
    <View>
      <Text style={styles.h1}>Новини</Text>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  h1: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '7px',
  },
  picture: {
    height: '100px',
    width: '100px',
  },
  info_div: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info_h2: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  data_p:{
    color:'grey',

  }
};
