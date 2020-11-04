import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Music from "../components/Music";

export default function MusicScreen() {
    return (
        <View style={styles.screen}>
            <Music/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
       marginTop: 50
    }
})