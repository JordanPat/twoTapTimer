import * as React from 'react';
import { Alert, StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import { Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NotificationSounds, {playSampleSound} from 'react-native-notification-sounds';


interface Props{

}

export default function AlarmSelector(props: Props) {

    const handlePress = ()=> {
        Alert.alert('select sound')
    }

    return (
        <View style={styles.container}>
                <TouchableOpacity onPress={()=> handlePress()} >
                    <Text>Select Alarm Sound</Text>
                </TouchableOpacity>        
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