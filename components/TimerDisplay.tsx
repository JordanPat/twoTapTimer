import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import { Title } from 'react-native-paper';
import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

interface Props{
    hours:number,
    minutes: number,
    seconds: number,
}

export default function TimerDisplay(props: Props) {
    return (
        <View style={styles.container}>
            <Title>
                {props.hours>=0 ? props.hours:0} : {props.minutes<10 && props.minutes>0 && "0"}{props.minutes>0 ? props.minutes: "00"} : {props.seconds<10 && 0}{ props.seconds }
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