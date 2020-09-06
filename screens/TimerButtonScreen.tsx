import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import ButtonScreenInfo from '../components/ButtonScreenInfo';
import { Text, View } from '../components/Themed';

import { Title } from 'react-native-paper';

export default function TimerButtonScreen() {
  return (
    <View style={styles.container}>
      <ButtonScreenInfo path="/screens/TimerButtonScreen.tsx" />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginTop: '5%',
    marginBottom: '5%',
    height: 1,
    width: '80%',
  },
});
