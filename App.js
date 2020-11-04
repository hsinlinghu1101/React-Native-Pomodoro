
import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./screen/HomeScreen";
import MusicScreen from "./screen/MusicScreen";
import SettingsScreen from "./screen/SettingsScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TimeProvider } from './TimeContext'
import Header from "./components/Header";

const Tab = createMaterialBottomTabNavigator();


export default class App extends React.Component {
  
  
render(){
  return (
    <TimeProvider>
    <NavigationContainer>
      
      <Header/>
      
      <Tab.Navigator
       initialRouteName="Home"
       activeColor="#FF9800"
       inactiveColor="#C66900"
       barStyle={{backgroundColor:"#F8F8F8"}}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>    
        <Tab.Screen name="Music" component={MusicScreen} options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
        }}/>  
       </Tab.Navigator>
       
    </NavigationContainer>
    </TimeProvider>
    
  );
}
}





