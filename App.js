
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screen/HomeScreen";
//import DataScreen from "./screen/DataScreen";
//import SettingsScreen from "./screen/SettingsScreen";

const Stack = createStackNavigator();
const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigartor>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*<Stack.Screen name="Data" component={DataScreen} />*/}
        {/*<Stack.Screen name="Settings" component={SettingsScreen} />*/}
      </Stack.Navigartor>
      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
