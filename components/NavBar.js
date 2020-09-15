import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


function NavBar ({navigation}){

    
        return (
            <View style={styles.navbar}>
            
               <View style={styles.navbarIcon}>
               <Entypo name="home"  size={26} style={styles.iconColor} onPress={() =>
            navigation.navigate('Home')}/>
               <Text style={styles.textColor} >Home</Text>
               </View>
               <View style={styles.navbarIcon}>
               <MaterialCommunityIcons name="chart-pie" size={26} style={styles.iconColor}/>
               <Text style={styles.textColor}>Data</Text>
               </View>
               <View style={styles.navbarIcon}>
               <Ionicons name="md-settings"  size={26} style={styles.iconColor} />
               <Text style={styles.textColor}>Settings</Text>
               </View>
                           
            </View>
        )
    
}

const styles = StyleSheet.create({
  navbar:{
    backgroundColor:"#F8F8F8",
    marginTop:30,
    height:49, 
    flexDirection:"row",
    justifyContent:"space-around",
  },
  navbarIcon:{
    alignItems:"center",
  },
  iconColor:{
    color:"#FF9800", 
  },
  textColor:{
    color: "#C66900"
  }
})
export default NavBar

