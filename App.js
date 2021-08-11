import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Beranda from './src/screens/Beranda';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { useFonts, 
    Raleway_300Light, 
    Raleway_500Medium, 
    Raleway_700Bold, 
    Raleway_800ExtraBold } from '@expo-google-fonts/raleway';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
    

function BerandaStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Beranda" component={Beranda} />
            {/* <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: '#296FD7',
                },
                headerTintColor: '#fff',
            }} name="Daily Habit" component={Page} /> */}
        </Stack.Navigator>
    )
}


export default function App() {
    const [items, setItems] = React.useState([
        { name: 'Parent Tahu', code: '#1abc9c', icon: 'user-check' },
        { name: 'Tips Parent', code: '#2ecc71', icon: 'info-circle' },
        { name: 'Daily Habit', code: '#3498db', icon: 'check-square' },
        { name: 'Fun Learning', code: '#9b59b6', icon: 'book' },
        { name: 'Fun Games', code: '#deab90', icon: 'gamepad' },
    ]);

    let [fontsLoaded] = useFonts({
        Raleway_300Light,
        Raleway_500Medium,
        Raleway_700Bold,
        Raleway_800ExtraBold,
    });

    if (!fontsLoaded) {
        return (
            <ActivityIndicator/>
        );
    } else {
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen 
                        name="BerandaStack" 
                        component={BerandaStackScreen}
                        options={{
                            tabBarLabel: 'Beranda',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="home-sharp" size={size} color={color} />
                            )
                        }} />
                    {/* <Tab.Screen 
                        name="HomeStack" 
                        component={HomeStackScreen}
                        options={{
                            tabBarLabel: 'Setelan',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="settings" size={size} color={color} />
                            )
                        }} />
                    <Tab.Screen 
                        name="TestingStack" 
                        component={TestingStackScreen}
                        options={{
                            tabBarLabel: 'Tentang',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="information-circle-sharp" size={size} color={color} />
                            )
                        }}/> */}
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

