import * as React from 'react';
import { Text, View } from 'react-native';

export default function FooterComp() {
  return (
    <View style={styles.div_style}>
      <Text style={styles.text}>Троцький Владислав , ІПЗ-19-2</Text>
    </View>
  );
}

const styles = {
  div_style: {
    height: '20px',
    width: 'auto',
    backgroundColor:'gray',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  text: {
    margin: 'auto',
    fontSize:'15px',
  },
};