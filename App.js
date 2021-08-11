import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Beranda from '@screens/Beranda';
import ParentTahu from '@screens/ParentTahu';
import DailyHabit from '@screens/DailyHabit';
import FunGames from '@screens/FunGames';
import FunLearning from '@screens/FunLearning';
import TipsParent from '@screens/TipsParent';
import Konten from '@screens/Konten';

import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { useFonts, 
    Raleway_300Light, 
    Raleway_500Medium, 
    Raleway_700Bold, 
    Raleway_800ExtraBold } from '@expo-google-fonts/raleway';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function KontenStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Konten" component={Konten}/>
        </Stack.Navigator>
    )
}

function BerandaStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: '#296FD7',
                },
                headerTintColor: '#fff',
            }} name="Beranda" component={Beranda} />
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: '#1abc9c',
                },
                headerTintColor: '#fff',
            }} name="Parent Tahu" component={ParentTahu} />
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: '#3498db',
                },
                headerTintColor: '#fff',
            }} name="Daily Habit" component={DailyHabit} />
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: '#e76f51',
                },
                headerTintColor: '#fff',
            }} name="Fun Games" component={FunGames} />
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: '#9b59b6',
                },
                headerTintColor: '#fff',
            }} name="Fun Learning" component={FunLearning} />
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: '#0e873c',
                },
                headerTintColor: '#fff',
            }} name="Tips Parent" component={TipsParent} />
            <Stack.Screen name="Konten" component={Konten}/>
        </Stack.Navigator>
    )
}


export default function App() {
    const [items, setItems] = React.useState([
        { name: 'Parent Tahu', code: '#1abc9c', icon: 'user-check' },
        { name: 'Tips Parent', code: '#2ecc71', icon: 'info-circle' },
        { name: 'Daily Habit', code: '#3498db', icon: 'check-square' },
        { name: 'Fun Learning', code: '#9b59b6', icon: 'book' },
        { name: 'Fun Games', code: '#e76f51', icon: 'gamepad' },
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
                        name="KontenStack" 
                        component={KontenStackScreen}
                        options={{
                            tabBarLabel: 'Konten',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="settings" size={size} color={color} />
                            )
                        }} /> */}
                    {/* <Tab.Screen 
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

