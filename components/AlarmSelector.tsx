import React, {useState} from 'react';
import { Alert, StyleSheet, Platform} from 'react-native';
import { Text, View } from './Themed';
import { Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props{

}


export default function AlarmSelector(props: Props) {

    return (
        <View style={styles.container}>
                <TouchableOpacity onPress={
                    ()=> handlePress()
                } >
                    <Text>Select Alarm Sound</Text>
                </TouchableOpacity>        
        </View>
    );
}

const handlePress = ()=> {
    Alert.alert('select sound')
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        
      },
    button:{
        
    }

});