import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, StatusBar } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../styles/android/FunLearning.style';

export default function ParentTahu() {
    const [items, setItems] = React.useState([
        { name: 'Judul konten disini', code: '#1abc9c', icon: 'user-check' },
        { name: 'Judul konten disini', code: '#2ecc71', icon: 'info-circle' },
        { name: 'Judul konten disini', code: '#3498db', icon: 'check-square' },
        { name: 'Judul konten disini', code: '#9b59b6', icon: 'book' },
        { name: 'Judul konten disini', code: '#e76f51', icon: 'gamepad' },
        { name: 'Judul konten disini', code: '#e5989b', icon: 'gamepad' },
        { name: 'Judul konten disini', code: '#deab90', icon: 'gamepad' },
    ]);

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
            <FlatGrid
                    itemDimension={400}
                    data={items}
                    style={styles.gridView}
                    spacing={10}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Page');
                        }}>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            {/* <Image source={Background} style={styles.shapeBackground}></Image> */}
                                <View style={styles.columnsatu}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemCode}>Deskripsi Singkat</Text>
                                </View>
                                <View style={styles.columndua}>
                                    <TouchableOpacity style={styles.buttonStyle}>
                                        <Text style={[styles.buttonText, { color: item.code }]} >Lihat</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    > 
            </FlatGrid>
        </View>
    );
}