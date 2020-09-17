import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Keyboard } from 'react-native';
import {  Button, TextInput as PaperTextInput } from 'react-native-paper';



interface Props{
    state: {btnNum: number, duration:number, unit:string},
    index:number
    onLongPress: (index: number) => void
}

function TimerButton(props: Props) {
    const [labelState, setLabelState] = useState<string>();
    // console.log("dialog visible on load: " + dialogVisible);
    return (
        <View style={styles.containerView}>
            <View style={ styles.label }>
                <PaperTextInput style={{height:'100%'}} value={labelState} placeholder="Time Label" onSubmitEditing={(event)=>setLabelState(event.nativeEvent.text)} onEndEditing={() => Keyboard.dismiss()}  />
            </View>
            <View style={ styles.button }>
                <TouchableOpacity onPress={handlePressTimeBtn} onLongPress={()=>editButtonTime()} >
                    <Button mode="contained" uppercase={false} style= {{height:'100%', justifyContent:'center'}}>
                        { props.state.duration} {props.state.unit }
                        
                    </Button>
                </TouchableOpacity>
            </View>
        </View>
    );


    function handlePressTimeBtn() {
        alert("handlePressTimeBtn ran: \"START timer for " + props.state.duration + " " + props.state.unit + "\"");

    }
    function editButtonTime() {
        console.log("handleLongPressTimeBtn ran: \"EDIT Button Value\". dialog visible?: " );
        props.onLongPress(props.index);
        // setButtonValue([duration,unit]);
        
    }
    

}
const styles = StyleSheet.create({
    containerView: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        width: '100%',
        paddingTop:'1%',
        paddingBottom:'1%',
        borderColor:'blue',
        // borderWidth:2,
    },
    label: {
        flex:1,
        width:'90%',
        height:'50%',
        borderColor:'steelblue',
        // borderWidth: 2,
    },
    button:{
        flex:1,
        width:'70%',
        height: '50%',
        padding:'1%',
        borderColor:'skyblue',
        // borderWidth:2,
    },


});

export default TimerButton;