import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, StatusBar, ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../styles/android/FunGames.style';

export default function ParentTahu({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getList = async () => {
        try {
            const response = await fetch('https://api.parentgenmaster.masuk.id/fun-games');
            const json = await response.json();
            setData(json.data.funGames);
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
            <StatusBar barStyle="light-content" backgroundColor="#e76f51" />
            <View style={styles.heading}>
                <Text style={styles.description}>
                    <Text style={{ fontFamily: 'Raleway_700Bold' }}>Fun Games </Text>
                    Merekomendasikan Permainan yang bisa dilakukan bersama anak di rumah
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
                            navigation.navigate('Konten', { subMenu: 'funGames', slug: 'fun-games', kode: item.id, });
                        }}>
                            <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
                                <View style={styles.columnsatu}>
                                    <Text style={styles.itemName}>{item.judul}</Text>
                                </View>
                                <View style={styles.columndua}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('Konten', { subMenu: 'funGames', slug: 'fun-games', kode: item.id, });
                                    }}
                                        style={styles.buttonStyle}>
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