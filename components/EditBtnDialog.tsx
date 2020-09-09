import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Dialog, Button, TextInput, List, Title } from 'react-native-paper';

interface Props {
    visible: boolean,
    btnToEdit:number,
    onClose: () => void,
    onDone:(ButtonInfo:ButtonInfo, editState:number) => void,
}
interface ButtonInfo {
    btnNum:number,
    duration:number,
    unit:string,
  }
const EditBtnDialog: React.FC<Props> = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [duration, setDuration] = useState<number>(0);
    const [units, setUnits] = useState("Choose Units");

    const handleAccordionPress = () => setExpanded(!expanded);
    const handleDialogDone = (duration: number, unit: string) => {  
        if(duration == 0 || units == "Choose Units"){
            alert("selection incomplete");
            props.onClose();
        }
        else{
            setDuration(duration);
            props.onDone({btnNum:props.btnToEdit, duration:duration, unit:unit}, props.btnToEdit);
            props.onClose();
            setUnits("Choose Units");

            // console.log("handleDialogDone. dialogVisible: " + props.visible);
            // alert("set button to: " + duration + " " + units )
        }
        
    }
    const handleDialogCancel = () => {
        props.onClose();
        // console.log("handleDialogCancel. dialogVisible: " + props.visible);
        setDuration(0);
        setUnits("Choose Units");
        // alert('canceled');
    }


    return(
        // <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
        <Dialog visible={props.visible} onDismiss={()=>handleDialogCancel()}>
            <Title>
                Edit time value:
            </Title>
            <TextInput placeholder={duration.toString()} 
            onChange={(event)=>{setDuration(Number(event.nativeEvent.text))}}
            keyboardType={'numeric'}  
            />
            <List.Section>
                <List.Accordion
                    title={units}                
                    expanded={expanded}
                    onPress={()=>handleAccordionPress()}
                >
                    <List.Item title="Hours"  onPress={()=>{setUnits("Hours"), handleAccordionPress()}} />
                    <List.Item title="Minutes" onPress={()=>{setUnits("Minutes"), handleAccordionPress()}} />
                    <List.Item title="Seconds" onPress={()=>{setUnits("Seconds"), handleAccordionPress()}} />
                </List.Accordion>
            </List.Section>
            <Button onPress={()=>handleDialogDone(duration, units)}>Done</Button>
            <Button onPress={()=>handleDialogCancel()}>Cancel</Button>
        </Dialog>
        // </KeyboardAvoidingView>
    );

    

}

export default EditBtnDialog;