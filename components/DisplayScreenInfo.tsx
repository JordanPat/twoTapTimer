import React, { useEffect, useState }  from 'react';
import { StyleSheet} from 'react-native';
import { View } from './Themed';
import { Button } from 'react-native-paper';

import TimerDisplay from './TimerDisplay'; 
import AlarmSelector from './AlarmSelector';

interface Props{
    hours:number;
    minutes:number;
    seconds:number;
    onStop: ()=>void;
}

export default function DisplayScreenInfo(props: Props) {
    const [pause, setPause] = useState(false);   
    const [time, setTime] = useState({hrs:props.hours, min:props.minutes, sec:props.seconds})
    const handlePause = ()=>{
        setPause(!pause)
        return (console.log("Pause = "+pause));
    }
    const handleStop = ()=>{
        console.log("Stop pressed")
        setTime({hrs:0, min:0, sec:0});
        setPause(true);
        props.onStop()
    }


    return (
        <View style={styles.container}>
            <View>
                <AlarmSelector/>
            </View>

            <View>
                <TimerDisplay hours={time.hrs} minutes={time.min} seconds={time.sec} isPaused={pause}></TimerDisplay>
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