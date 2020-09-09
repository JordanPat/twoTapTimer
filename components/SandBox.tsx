import React, {useState } from 'react';
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, View, KeyboardAvoidingViewBase } from 'react-native';

import {Text} from 'react-native-paper';


// Component for playing with keyboard avoiding view

function sandbox (){ 

    return(
        <KeyboardAvoidingView style={styles.avoidView}>
            <View style={styles.container}>
                <Text style={{
                    // flex:1, 
                    borderColor:'white',
                    borderWidth:2,
                    textAlign:'center',
                    width:'100%',
                    height:'100%',
                    }}> 
                    Hello
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    avoidView: {
        flex:1,
        alignItems:'center',
        // justifyContent:'space-between',
        borderWidth: 2,
        borderColor:'pink',
        width: '100%',
        // height: '100%',
      },
    container: {
        // flex:1,
        backgroundColor:'violet',
        width:'100%',
        // paddingTop:'10%'
    }

});

export default sandbox;
