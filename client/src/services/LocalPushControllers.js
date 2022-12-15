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
        bigText: "Check the received in your email",
        subText: "Check the received in your email",
        title: "Thank you for Buying!",
        message: "Check the received in your email",
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
        bigText: "In Proccess",
        title: "We are preparing your order",
        message: "Your order has been recieved and we are working on it",
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
        bigText: "Remember to Complete Your Profile Information",
        subText: "Remember to Complete Your Profile Information",
        title: "Remember to Complete Your Profile Information",
        message: "Remember to Complete Your Profile Information",
        playSound: true,
        soundName: "default",
        /* importance: 10, */
        vibrate: true,
        vibration: 1000,
    });
}