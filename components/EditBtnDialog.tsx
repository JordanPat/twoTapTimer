import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Dialog, Button, TextInput, List, Title } from 'react-native-paper';

interface Props {
    visible: boolean,
    onClose: ()=>void,
}

const EditBtnDialog: React.FC<Props> = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [alertText, setAlertText] = useState<string>("type new time");
    const [units, setUnits] = useState("Choose Units");

    const handleAccordionPress = () => setExpanded(!expanded);
    const handleDialogDone = (alertText: string) => {   
        props.onClose();
        console.log("handleDialogDone. dialogVisible: " + props.visible);
        setAlertText(alertText);
        setUnits("Choose Units");
        alert(alertText);
    }
    const handleDialogCancel = () => {
        props.onClose();
        console.log("handleDialogCancel. dialogVisible: " + props.visible);
        setAlertText("type new time value here");
        setUnits("Choose Units");
    }
    const handleTextSubmit = (inputText: string) => {
        setAlertText(inputText);
        alert(inputText);
    }

    return(
        <Dialog visible={props.visible} onDismiss={()=>handleDialogCancel()}>
            <Title>
                Edit time value:
            </Title>
            <TextInput placeholder={alertText} 
            // onEndEditing={(event)=>{handleTextSubmit(event.nativeEvent.text)}}
            keyboardType={'numeric'}  />
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
            <Button onPress={()=>handleDialogDone(alertText)}>Done</Button>
            <Button onPress={()=>handleDialogCancel()}>Cancel</Button>
        </Dialog>
    );

    

}

export default EditBtnDialog;