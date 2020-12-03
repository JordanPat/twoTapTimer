import React, { useEffect, useRef, useState } from 'react';
import { Alert, Platform, StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import { Title } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


interface Props{
    hours:number,
    minutes: number,
    seconds: number,
    isPaused: boolean,
}
Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
});

export default function TimerDisplay(props: Props) {
    const [time, setTime] = useState({hrs:props.hours, min:props.minutes, sec:props.seconds});
    const [expoPushToken, setExpoPushToken] = useState<any>('');
    const [notification, setNotification] = useState<boolean>(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
      //   notificationListener.current = Notifications.addNotificationReceivedListener((notification:event) => {
      //     setNotification(notification);
      //   });
    
      //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      //     console.log(response);
      //   });
    
        return () => {
          // Notifications.removeNotificationSubscription(notificationListener);
          // Notifications.removeNotificationSubscription(responseListener);
        };  
      }, [])
    

    useEffect(()=>{
        const timerId = setInterval(() => {
            if(!props.isPaused){
                if (time.sec <= 0) {
                    if (time.min <= 0) { 
                        if(time.hrs <= 0){
                            // setTime({...time,hrs:time.hrs-1,min:time.min,sec:time.sec,milli:time.milli}) 
                            return async()=>await schedulePushNotification();
                        }
                        else setTime({...time,hrs:time.hrs-1,min:59,sec:59})
                    }
                    else setTime({...time,min:time.min-1,sec:59})
                }
                else setTime({...time,sec:time.sec-1})
            }
            else{}
        }, 1000)
    
        if(time.sec<0){ 
            if(timerId) {
                clearInterval(timerId)
            } 
            return
        }
        return () => clearInterval(timerId);
      }, [time, props.isPaused])

    return (
        <View style={styles.container}>
            <Title>
                {time.hrs>=0 ? time.hrs:0} : {time.min<10 && time.min>0 && "0"}{time.min>0 ? time.min: "00"} : {time.sec<10 && 0}{ time.sec }
            </Title>
        </View>
    );
}

async function schedulePushNotification() {
    handleTimerEnd()
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
        sound:'default'
      },
      trigger: { seconds: 1 },
    });
  }
const handleTimerEnd = () => {
Alert.alert ('Alert','timer end', [
    {text:'close', onPress:()=> console.log('timer end box closed')}
])
} 
const registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        // this.setState({ expoPushToken: token });
    } else {
        alert('Must use physical device for Push Notifications');
    }
    
    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
        });
    }
    return token;
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        
      },
    button:{
        
    }

});