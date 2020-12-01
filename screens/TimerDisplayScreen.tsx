import { BaseRouter } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import DisplayScreenInfo from '../components/DisplayScreenInfo';
import { Text, View } from '../components/Themed';


interface Props{
  navigation:any,
  route:any,
}
export default function TimerDisplayScreen( props:Props ) {

  const handleStop = ()=>{
    alert('handle stop from parent')
  }
  let hrs = 0;
  let min = 0;
  let sec = 0;
  useEffect(()=>{
    // hrs = props.route.param.hrs;
    // min = props.route.param.min;
    // sec = props.route.param.sec;
  },[])

  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <DisplayScreenInfo onStop={()=>handleStop()} hours={hrs} minutes={min} seconds={sec} ></DisplayScreenInfo>
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
