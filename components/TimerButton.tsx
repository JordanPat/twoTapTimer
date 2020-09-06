import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import {  Button, TextInput as PaperTextInput } from 'react-native-paper';



interface Props{
    duration: number,
    unit: string,
    onLongPress: () => void
}

function TimerButton(props: Props) {
    const [buttonValue, setButtonValue] = useState(
        [props.duration, props.unit]
    );
    const [labelState, setLabelState] = useState<string>();
    // console.log("dialog visible on load: " + dialogVisible);
    return (
        <View style={styles.container}>
            <View style={ styles.label }>
                <PaperTextInput value={labelState} placeholder="Time Label" onSubmitEditing={(event)=>setLabelState(event.nativeEvent.text)} />
            </View>
            <View style={ styles.button }>
                <TouchableOpacity onPress={handlePressTimeBtn} onLongPress={()=>editButtonTime()} >
                    <Button mode="contained" uppercase={false} style= {{height:'100%'}}>
                        {props.duration} {props.unit}
                    </Button>
                </TouchableOpacity>
            </View>
        </View>
    );


    function handlePressTimeBtn() {
        alert("handlePressTimeBtn ran: \"START timer for " + props.duration + " " + props.unit + "\"");

    }
    function editButtonTime() {
        console.log("handleLongPressTimeBtn ran: \"EDIT Button Value\". dialog visible?: " );
        props.onLongPress();
        
    }
    

}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'space-evenly',
        width: '100%',
        padding:'1%',
    },
    button:{
        margin:'0%', 
        width:'70%',
        height: '40%',
    },
    label: {
        alignContent:'center',
        textAlign:'center',
        width:'70%',
        // borderWidth: 3,
        // borderColor:'darkgrey',
    }

});

export default TimerButton;