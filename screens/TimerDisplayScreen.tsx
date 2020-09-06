import * as React from 'react';
import { StyleSheet } from 'react-native';

import DisplayScreenInfo from '../components/DisplayScreenInfo';
import { Text, View } from '../components/Themed';
import { Title } from 'react-native-paper';
import TimerDisplay from '../components/TimerDisplay';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <DisplayScreenInfo></DisplayScreenInfo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: '5%',
    height: 1,
    width: '80%',
  },
});