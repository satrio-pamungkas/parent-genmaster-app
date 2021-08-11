import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, StatusBar, ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../styles/android/FunLearning.style';

export default function ParentTahu({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getList = async () => {
        try {
            const response = await fetch('https://api.parentgenmaster.masuk.id/fun-learning');
            const json = await response.json();
            setData(json.data.funLearning);
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
            <StatusBar barStyle="light-content" backgroundColor="#9b59b6" />
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
                            navigation.navigate('Konten', { subMenu: 'funLearning', slug: 'fun-learning', kode: item.id, });
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