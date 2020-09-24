import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Provider as PaperProvider } from 'react-native-paper';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <SafeAreaProvider>   
      <PaperProvider >
        {/* <KeyboardAvoidingView style={styles.avoidView} behavior={Platform.OS == "ios" ? "position" : "height"} keyboardVerticalOffset={40} >  */}
          <Navigation colorScheme={colorScheme} />
        {/* </KeyboardAvoidingView> */}
        <StatusBar />
      </PaperProvider>     
      // </SafeAreaProvider> 
    );
  }

}
const styles = StyleSheet.create({
  avoidView: {
    flex:1,
    // alignItems:'center',
    // justifyContent:'space-between',
    borderWidth: 2,
    borderColor:'orange',
    
    
  },

});
