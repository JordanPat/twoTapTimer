import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import { Title } from 'react-native-paper';
import {  useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props{

}

export default function AlarmSelector(props: Props) {



    return (
        <View style={styles.container}>
            <Title>
                <TouchableOpacity>
                  Select Alarm Sound
                </TouchableOpacity>
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