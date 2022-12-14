import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification:function(notification){
        console.log('noti local', notification);
    },

    popInitialNotification: true,
    requestPermissions: true,
});


PushNotification.createChannel(
    {
        channelId: "abc",
        channelName: "acb",
        channelDescription: "una noti",
        playSound: true,
        soundName: "default",
        /* importance: 10, */
        vibrate: true,
        vibration: 1000,
    },
    
);

export const LocalNotification = () => {
    PushNotification.localNotification({
        channelId: "abc",
        channelName: "acb",
        autoCancel: true,
        bigText: "We are preparing your purchase order",
        subText: "local",
        title: "Thank you for Buying!",
        message: "Your payment has been received",
        playSound: true,
        soundName: "default",
        /* importance: 10, */
        vibrate: true,
        vibration: 1000,
    });
}

export const ScheduleNotification = () => {
    PushNotification.localNotificationSchedule ({
        channelId: "abc",
        channelName: "acb",
        bigText: "Estamos trabajando",
        title: "Estamos preparando tu pedido!",
        message: "Tu orden de compra ya ha sido despachada",
        playSound: true,
        soundName: "default",
        date: new Date(Date.now() + 30 * 1000),
        allowWhileIdle: true,
        vibrate: true,
        vibration: 1000,
    })
};

export const NotificationNoLog = () => {
    PushNotification.localNotification({
        channelId: "abc",
        channelName: "acb",
        autoCancel: true,
        bigText: "LOGEATEeeEEEEeEeE",
        subText: "Complete Your Profile",
        title: "LOGEATE FORRO",
        message: "DALE LOGEATEeEeEeEeE COMPLETA TODO EL FORM Y NO SUBAS ROSQUETES PLSSSSSSSSSSSS",
        playSound: true,
        soundName: "default",
        /* importance: 10, */
        vibrate: true,
        vibration: 1000,
    });
}