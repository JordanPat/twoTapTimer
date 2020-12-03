
import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import DisplayScreenInfo from '../components/DisplayScreenInfo';
import { Text, View } from '../components/Themed';
import { BottomTabParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type TimerButtonNavigationProp = StackNavigationProp<
  BottomTabParamList,
  'Timer Buttons'
>;
type TimerDisplayScreenRouteProp = RouteProp<BottomTabParamList, 'Timer Display'>;
interface Props{
  navigation:TimerButtonNavigationProp,
  route:TimerDisplayScreenRouteProp,
}
export default function TimerDisplayScreen( props:Props ) {
  const [time,setTime] = useState({hrs:props.route.params?.hrs,min:props.route.params?.min,sec:props.route.params?.sec})

  const handleStop = ()=>{
    setTime({hrs:0,min:0,sec:0})
    alert('handle stop from parent')
    props.navigation.navigate("Timer Buttons")
  }
 
  useEffect(()=>{
    // hrs = props.route.param.hrs;
    // min = props.route.param.min;
    // sec = props.route.param.sec;
  },[])

  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <DisplayScreenInfo onStop={()=>handleStop()} hours={time.hrs} minutes={time.min} seconds={time.sec} ></DisplayScreenInfo>
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
