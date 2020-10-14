import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import { Title } from 'react-native-paper';
import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';
import { useEffect, useState } from 'react';

interface Props{
    hours:number,
    minutes: number,
    seconds: number,
    milli:number,
    isPaused: boolean,
}




export default function TimerDisplay(props: Props) {
    const [time, setTime] = useState({hrs:props.hours, min:props.minutes, sec:props.seconds, milli:props.milli})

    useEffect(()=>{
        const timerId = setInterval(() => {
        if(!props.isPaused){
            if(time.milli <= 0){
                if (time.sec <= 0) {
                    if (time.min <= 0) { 
                        if(time.hrs <= 0){
                            // setTime({...time,hrs:time.hrs-1,min:time.min,sec:time.sec,milli:time.milli}) 
                            alert('end');
                        }
                        else setTime({hrs:time.hrs-1,min:59,sec:59,milli:59})
                    }
                    else setTime({...time,min:time.min-1,sec:59,milli:59})
                }
                else setTime({...time,sec:time.sec-1, milli:59})
            }
            else setTime({...time,milli:time.milli-1})
        }
        else{}
        }, 1)
    
        if(time.min<0){ 
            if(timerId) {
                clearInterval(timerId)
            } 
            return
        }
    
        return () => clearInterval(timerId);
      }, [time, props.isPaused])

    return (
        <View style={styles.container}>
            <Title>
                {time.hrs>=0 ? time.hrs:0} : {time.min<10 && time.min>0 && "0"}{time.min>0 ? time.min: "00"} : {time.sec<10 && 0}{ time.sec } , {time.milli<10 && 0}{ time.milli }
            </Title>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        
      },
    button:{
        
    }

});