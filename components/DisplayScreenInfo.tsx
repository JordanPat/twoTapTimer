import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import { Title, Button } from 'react-native-paper';

import TimerDisplay from './TimerDisplay'; 

export default function DisplayScreenInfo() {
    return (
        <View style={styles.container}>
            <View>
                <Title>This is the TimerDisplay</Title>
            </View>

            <View>
                <TimerDisplay></TimerDisplay>
            </View>

            <View style={styles.buttonRow}>
                <Button mode="contained" onPress={()=>console.log("Pause pressed")}>Pause</Button>
                <Button mode="outlined" onPress={()=>console.log("Stop pressed")}>Stop</Button>
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