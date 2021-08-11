import React, { useState, useEffect, useCallback } from 'react';
import { Platform, StyleSheet, ScrollView, Text, Alert, Image, ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import YoutubePlayer from "react-native-youtube-iframe";
import styles from '../styles/android/Konten.style';

export default function Konten({ route, navigation }) {
    let imageUrl = "https://img.freepik.com/free-vector/colorful-mountains-landscape-background_52683-24001.jpg?size=626&ext=jpg";

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [playing, setPlaying] = useState(false);

    const { subMenu, kode } = route.params;

    const getList = async () => {
        try {
            const response = await fetch(`https://parentgenmaster.savani.masuk.web.id/${subMenu}/${kode}`);
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


    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Text style={styles.heading}>{data.judul}</Text>
            <Text style={styles.author}>Penyunting: {data.penulis}</Text>
            { imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image}></Image>
            ) : (
                null
            )}
            <Text style={styles.text}>
                {data.konten}
            </Text>
            <YoutubePlayer
                webViewStyle={{ opacity: 0.99 }}
                webViewProps={{
                    renderToHardwareTextureAndroid: true,
                    androidLayerType:
                        Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'none',
                  }}
                height={250}
                play={playing}
                videoId={data.youtube}
                onChangeState={onStateChange}/>
            <Text style={styles.referensi}>Referensi</Text>
            <Text style={styles.referensiList}>{'\u2022'} {data.referensi}</Text>
        </ScrollView>
    );
}