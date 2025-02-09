import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Budget from "@/components/Budget";
import Balance from '../components/Balance';
import Transactions from '../components/Transactions';
import TestButton from "@/components/TestButton";
import * as React from 'react';
import {useState, useEffect} from "react";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";
import {SchedulableTriggerInputTypes} from "expo-notifications";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function Home() {

    const addTransaction = () => {
        const newTransaction = {
            title: 'Test Transaction',
            location: 'Test Location',
            date: 'Test Date',
            amount: (Math.random() * 100).toFixed(2),
            icon: '#34D058',
        };
        setData([newTransaction, ...data]);
        schedulePushNotification(data[0]).then(r => console.log(r));
    }

    const [data, setData] = useState([
        {
            title: 'Akamai Coffee Shop',
            location: 'Kihei, HI',
            date: 'Today, 13:21',
            amount: (Math.random() * 10).toFixed(2),
            icon: '#FB8E41',
        },
        {
            title: 'Shops at Wailea',
            location: 'Wailea, HI',
            date: 'Yesterday, 20:07',
            amount: (Math.random() * 25).toFixed(2),
            icon: '#0091FF',
        },
        {
            title: 'Ono Hawaiian BBQ',
            location: 'Paia, HI',
            date: 'Thursday',
            amount: (Math.random() * 100).toFixed(2),
            icon: '#34D058',
        },
        {
            title: 'Fond',
            location: 'Lahaina, HI',
            date: 'Wensday',
            amount: (Math.random() * 10).toFixed(2),
            icon: '#34D058',
        },
        {
            title: 'Ula’Ula Cafe',
            location: 'Waihee-Waiehu, HI',
            date: 'Tuesday',
            amount: (Math.random() * 15).toFixed(2),
            icon: '#FB8E41',
        },
        {
            title: "Tante's Fishmarket",
            location: 'Wailuku, HI',
            date: 'Monday',
            amount: (Math.random() * 10).toFixed(2),
            icon: '#0091FF',
        },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.staticSection}>
                {/*<Card />*/}
                <Budget />
                <Balance data={data}/>
            </View>
            <TestButton title="Create Test Transaction" onPress={addTransaction} />
            <Transactions data={data} />
        </View>
    );
}

async function schedulePushNotification(transaction) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: `$${transaction.amount} - ${transaction.title}`,
            body: 'Here is the notification body',
        },
        trigger: null,
    });
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        paddingTop: 16 + Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        overflowX: 'hidden',
    },
    staticSection: {
        paddingHorizontal: 16,
    },
});