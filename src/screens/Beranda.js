import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from '../styles/android/Beranda.style';
import { FlatGrid } from 'react-native-super-grid';

import Background from '@assetBeranda/Pattern.png';
import Habit from '@assetBeranda/Habit.png';
import Games from '@assetBeranda/Games.png';
import Learning from '@assetBeranda/Learning.png';
import Tips from '@assetBeranda/Tips.png';
import Parenting from '@assetBeranda/Parenting.png';

export default function Beranda({ navigation }) {
    const [items, setItems] = React.useState([
        { name: 'Parent Tahu', code: '#1abc9c', img: Parenting },
        { name: 'Tips Parent', code: '#0e873c', img: Tips },
        { name: 'Daily Habit', code: '#3498db', img: Habit },
        { name: 'Fun Learning', code: '#9b59b6', img: Learning },
        { name: 'Fun Games', code: '#e76f51', img: Games },
    ]);

    return (
        <View style={styles.container}>
            <Image source={Background} style={styles.imagePattern}></Image>
            <View style={styles.selamatDatangColumn}>
                <Text style={styles.selamatDatang}>Selamat Datang</Text>
                <Text style={styles.parent}>Parent !</Text>
            </View>
            <View style={styles.shapeAtas}></View>
            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                spacing={10}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(item.name);
                    }}>
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Image source={item.img} style={styles.imgStyle}></Image>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                > 
            </FlatGrid>
        </View>
    );
}