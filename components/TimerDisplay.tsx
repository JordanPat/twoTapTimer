import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import { Title } from 'react-native-paper';

export default function TimerDisplay() {
    return (
        <View style={styles.container}>
            <Title>00:00:00</Title>
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