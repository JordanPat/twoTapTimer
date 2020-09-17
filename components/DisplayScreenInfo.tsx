import React, { useEffect, useState }  from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import { Title, Button } from 'react-native-paper';

import TimerDisplay from './TimerDisplay'; 
import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

interface Props{
    hours:number;
    minutes:number;
    seconds:number;
    onStop: ()=>void;
}

export default function DisplayScreenInfo(props: Props) {
    const [pause, setPause] = useState(false);
    const [time, setTime] = useState({hrs: props.hours, min: props.minutes, sec:props.seconds})

    const handlePause = ()=>{
        setPause(!pause)
        return (console.log("Pause = "+pause));
    }
    const handleStop = ()=>{
        console.log("Stop pressed")
        setTime({hrs:0, min:0, sec:0})
        props.onStop()
    }


    useEffect(()=>{
        const timerId = setInterval(() => {
        if(!pause){
          if (time.sec <= 0) {
            if (time.min <= 0) {
                setTime({...time,min:time.min-1,sec:time.sec}) 
                if(time.hrs <= 0){
                    setTime({...time,hrs:time.hrs-1,min:time.min,sec:time.sec}) 
                    // alert('end')
                }
                else{
                    setTime({...time,hrs:time.hrs-1,min:59,sec:59})
                }
            }
            else {
              setTime({...time,min:time.min-1,sec:59})
            }
          }
          else setTime({...time,hrs:time.hrs,min:time.min,sec:time.sec-1})
        }else{}
        }, 1000)
        if(time.min<0){ if(timerId) {clearInterval(timerId)} return}
    
        return () => clearInterval(timerId);
      }, [time])
    return (
        <View style={styles.container}>
            <View>
                {/* <Title>This is the TimerDisplay</Title> */}
            </View>

            <View>
                <TimerDisplay hours={time.hrs} minutes={time.min} seconds={time.sec} ></TimerDisplay>
            </View>

            <View style={styles.buttonRow}>
                <Button mode="contained" onPress={()=>handlePause()}>{pause ? "Start":"Pause"}</Button>
                <Button mode="outlined" onPress={()=>handleStop()}>Stop</Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    buttonRow: { 
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // alignContent:'space-around',
    }

});