import React from 'react'
import { StyleSheet, Text, View } from "react-native";
export default function Header() {
    return (
    
    <View style={styles.header}>
    <Text style={styles.headerText}>POMODORO</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    headerText: { 
      color:"white",
      fontSize: 36,
      textAlign: "center",
      padding: 15
    },
    header: {
      paddingTop: 20,
      backgroundColor: "#C66900",
    },
  });
  