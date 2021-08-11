import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, StatusBar, ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../styles/android/FunGames.style';

export default function ParentTahu({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // const [items, setItems] = React.useState([
    //     { name: 'Judul konten disini', code: '#1abc9c', icon: 'user-check' },
    //     { name: 'Judul konten disini', code: '#2ecc71', icon: 'info-circle' },
    //     { name: 'Judul konten disini', code: '#3498db', icon: 'check-square' },
    //     { name: 'Judul konten disini', code: '#9b59b6', icon: 'book' },
    //     { name: 'Judul konten disini', code: '#e76f51', icon: 'gamepad' },
    //     { name: 'Judul konten disini', code: '#e5989b', icon: 'gamepad' },
    //     { name: 'Judul konten disini', code: '#deab90', icon: 'gamepad' },
    // ]);

    const getList = async () => {
        try {
            const response = await fetch('https://parentgenmaster.savani.masuk.web.id/fun-games');
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
                    <Text style={{ fontFamily: 'Raleway_700Bold' }}>Lorem ipsum </Text>
                    is simply dummy text of the printing and typesetting industry.
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
                            navigation.navigate('Konten', { subMenu: 'fun-games', kode: item.id, });
                        }}>
                            <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
                            {/* <Image source={Background} style={styles.shapeBackground}></Image> */}
                                <View style={styles.columnsatu}>
                                    <Text style={styles.itemName}>{item.judul}</Text>
                                    <Text style={styles.itemCode}>Deskripsi Singkat</Text>
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