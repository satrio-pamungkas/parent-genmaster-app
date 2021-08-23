import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, StatusBar, ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../styles/android/DailyHabit.style';

export default function DailyHabit({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getList = async () => {
        try {
            const response = await fetch('https://api.parentgenmaster.masuk.id/daily-habit');
            const json = await response.json();
            setData(json.data.dailyHabit);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#3498db" />
            <View style={styles.heading}>
                <Text style={styles.description}>
                    <Text style={{ fontFamily: 'Raleway_700Bold' }}>Daily Habit </Text>
                    Memberikan rekomendasi penerapan terkait kebiasaan baik yang perlu ke anak setiap harinya
                </Text>
            </View>
            <View style={styles.shapes}></View>
            {isLoading ? <ActivityIndicator/> : (
                <FlatGrid
                    itemDimension={400}
                    data={data}
                    style={styles.gridView}
                    spacing={10}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Konten', { subMenu: 'dailyHabit', slug: 'daily-habit', kode: item.id, });
                        }}>
                            <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
                            {/* <Image source={Background} style={styles.shapeBackground}></Image> */}
                                <View style={styles.columnsatu}>
                                    <Text style={styles.itemName}>{item.judul}</Text>
                                    {/* <Text style={styles.itemCode}>Deskripsi Singkat</Text> */}
                                </View>
                                <View style={styles.columndua}>
                                    <TouchableOpacity style={styles.buttonStyle}>
                                        <Text style={[styles.buttonText, { color: item.color }]} >Lihat</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}> 
                </FlatGrid>
            )}
        </View>
    );
}