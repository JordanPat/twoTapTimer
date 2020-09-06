import React, {useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';
import EditBtnDialog from './EditBtnDialog';
import TimerButton from './TimerButton';

export default function ButtonScreenInfo({ path }: { path: string }) {
  // const [dialogVisible, setDialogVisible] = useState(false); 
  const [dialogVisible, setDialogVisible] = useState(false); 
  const handleLongPress = () =>{
    console.log("handleLongPress in Screen info");
    setDialogVisible(true);
  }
  const closeDialog = () => {
      console.log("closeDialog");
      setDialogVisible(false);
  }

  return (
    <View style={styles.container}>

      <View style={ styles.subContainer }>
        <TimerButton duration={30} unit={"min"} onLongPress={()=>handleLongPress()}></TimerButton>
            
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <TimerButton duration={5} unit={"min"} onLongPress={()=>handleLongPress()}></TimerButton>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <TimerButton duration={15} unit={"s"} onLongPress={()=>handleLongPress()}></TimerButton>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <TimerButton duration={15} unit={"s"} onLongPress={()=>handleLongPress()}></TimerButton>
        
      </View> 
      
      <EditBtnDialog visible={dialogVisible} onClose={()=>closeDialog()}></EditBtnDialog>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 2,
    borderColor:'pink',
    width: '100%',
    height: '100%',

  },
  subContainer: {
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:'5%',
    borderColor:'green',
    borderWidth: 2,
    width: '99%',
    height: '99%',
    
  },
  separator: {
    marginTop: '5%',
    marginBottom: '5%',
    height: 2,
    width: '80%',
  },


});
