import React, {useState } from 'react';
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import { Text, View } from './Themed';
import EditBtnDialog from './EditBtnDialog';
import TimerButton from './TimerButton';

export default function ButtonScreenInfo() {
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
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "position" : "height"} keyboardVerticalOffset={40} style={styles.avoidView} > 
    {/* <View style={styles.containerView}> */}

      <View style={{flex:1, backgroundColor:'coral'}}>

        <Text> 
          Hello
        </Text>

      </View>
      {/* <TimerButton duration={30} unit={"min"} onLongPress={()=>handleLongPress()}></TimerButton> */}
          
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

      
      
      {/* {dialogVisible && <EditBtnDialog visible={dialogVisible} onClose={()=>closeDialog()}></EditBtnDialog>} */}

    {/* </View> */}
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  avoidView: {
    flex:1,
    // alignItems:'center',
    // justifyContent:'space-between',
    borderWidth: 2,
    borderColor:'pink',
    // width: '100%',
    // height: '100%',
  },
  containerView: {
    flex:1,
    // justifyContent:'space-evenly',
    borderColor:'green',
    borderWidth: 2,
  },
  subContainerView: {
    flex:1,
    // alignItems:'center',
    // justifyContent:'space-evenly',
    // paddingTop:'5%',
    // paddingBottom:'5%',
    // width: '99%',
    // height: '99%',
    borderColor:'green',
    borderWidth: 2,
    
  },
  separator: {
    flex:1,
    marginTop:'2%',
    marginBottom:'2%',
    // paddingTop:'2%',
    // paddingBottom:'2%',
    height: 1,
    width: '80%',
  },


});
