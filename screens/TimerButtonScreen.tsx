import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import { Text, View } from '../components/Themed';
import EditBtnDialog from '../components/EditBtnDialog';
import TimerButton from '../components/TimerButton';


interface ButtonInfo {
  btnNum: number,
  duration:number,
  unit:string,
}

var ButtonList: ButtonInfo[] = [
  {
    btnNum: 0,
    duration:1,
    unit:'Minutes',
  },
  {
    btnNum: 1,
    duration:0,
    unit:'sec',
  },
  {
    btnNum: 2,
    duration:0,
    unit:'sec',
  },
  {
    btnNum: 3,
    duration:0,
    unit:'sec',
  },
  {
    btnNum: 4,
    duration:0,
    unit:'sec',
  },
]; 

interface Props{
  navigation:any,
}

export default function TimerButtonScreen(props:Props) {
  const [buttonStates, setButtonStates] = useState<ButtonInfo[]>(ButtonList); 
  const [dialogVisible, setDialogVisible] = useState(false); 
  const [editState, setEditState] = useState(0);

  const handleLongPress = (btnNum:number) =>{
    // console.log("handleLongPress in Screen info");
    // alert("editing button " + btnNum + " now");
    setEditState(btnNum);
    setDialogVisible(true);

  }
  const closeDialog = () => {
      console.log("closeDialog");
      setDialogVisible(false);
  }
  const handleEditSubmit = (btnInfo: ButtonInfo, editState:number) => {
    console.log("----"+btnInfo.duration);
    alert('btn state: duration=' + btnInfo.duration.toString() + ' unit=' + btnInfo.unit );
    buttonStates[editState] = {...buttonStates[editState], duration:btnInfo.duration , unit:btnInfo.unit }
    return (setButtonStates(buttonStates));

  }


  const dest = "Timer Display";
  return (
    
    // <KeyboardAvoidingView style={styles.avoidView} behavior={Platform.OS == "ios" ? "position" : "height"} keyboardVerticalOffset={40} > 
    <View style={styles.containerView}>
      <View style={styles.subContainerView}>

      <TimerButton 
          state={buttonStates[0]} 
          index={0} 
          onLongPress={(index:number)=>handleLongPress(index)}
          navigation={props.navigation}
          destination={dest}
        />
            
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <TimerButton 
          state={buttonStates[1]} 
          index={1} 
          onLongPress={(index:number)=>handleLongPress(index)}
          navigation={props.navigation}
          destination={dest}
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        <TimerButton 
          state={buttonStates[2]} 
          index={2} 
          onLongPress={(index:number)=>handleLongPress(index)}
          navigation={props.navigation}
          destination={dest}
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <TimerButton 
          state={buttonStates[3]} 
          index={3} 
          onLongPress={(index:number)=>handleLongPress(index)}
          navigation={props.navigation}
          destination={dest}
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <TimerButton 
          state={buttonStates[4]} 
          index={4} 
          onLongPress={(index:number)=>handleLongPress(index)}
          navigation={props.navigation}
          destination={dest}
        />


        {/* <SandBox  /> */}

        {dialogVisible && <EditBtnDialog visible={dialogVisible} btnToEdit={editState} onDone={ (ButtonInfo: ButtonInfo, editState:number)=>handleEditSubmit(ButtonInfo, editState) } onClose={()=>closeDialog()}></EditBtnDialog>}

      </View>
    </View>
    // </KeyboardAvoidingView> 
  );
}


const styles = StyleSheet.create({
  avoidView: {
    flex:1,
    alignItems:'center',
    // justifyContent:'space-between',
    borderWidth: 2,
    borderColor:'orange',
    // width: '100%',
    // height: '100%',
  },
  containerView: {
    flex:1,
    alignItems:'center',
    // justifyContent:'space-evenly',
    width: '100%',
    borderColor:'green',
    // borderWidth: 2,
  },
  subContainerView: {
    flex:1,
    alignItems:'center',
    // justifyContent:'space-evenly',
    // paddingTop:'5%',
    // paddingBottom:'5%',
    width: '100%',
    // height: '99%',
    borderColor:'tan',
    // borderWidth: 2,
    
  },
  separator: {
    // flex:1,
    marginTop:'2%',
    marginBottom:'2%',
    // paddingTop:'2%',
    // paddingBottom:'2%',
    height: 1,
    width: '80%',
  },


});
