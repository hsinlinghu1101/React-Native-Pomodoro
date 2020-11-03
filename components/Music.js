import React, { Component } from 'react'
import {Text,View, StyleSheet, TouchableOpacity} from "react-native";
import { Audio } from 'expo-av';
const soundObject = new Audio.Sound();

export default class Music extends Component {
  constructor() {
    super();
    this.state = {
      playMusic:false,
    };
    this.playbackInstance = null;
  }   
    componentDidMount() {
        Audio.setAudioModeAsync({
          playsInSilentModeIOS:true,
          allowsRecordingIOS:false,
          staysActiveInBackground:true,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid:true
        });
        this._loadNewPlaybackInstance(true);
    }
        async _loadNewPlaybackInstance (playing) {
        if (this.playbackInstance != null) {
        await this.playbackInstance.unloadAsync();
        this.playbackInstance.setOnPlaybackStatusUpdate(null);
        this.playbackInstance = null;
         }
        
      
      const source = require('../assets/audio1.mp3');
     const initialStatus = {
          shouldPlay: false,
          isLooping: true,
          isMuted: false
     };
     const { sound, status } = await Audio.Sound.createAsync(
         source,
         initialStatus
    );
    this.playbackInstance = sound;

    this.playbackInstance.setIsLoopingAsync(true);
        
      };

    componentWillUnmount() {
    this.playbackInstance.unloadAsync();
}
    
      playSound=()=>{
        this.setState({
        playMusic:true
      });
      this.playbackInstance.playAsync()
        
      }
      
      pauseSound=()=>{
        this.setState({
        playMusic:false
      });
      this.playbackInstance.pauseAsync()
        
      }
    render() {
        return (
            <View style ={styles.container}>
            <TouchableOpacity
                onPress={this.playSound}
                disabled={this.state.playMusic === true ? true : false}
                style={
                 this.state.playMusic === false
                ? styles.musicClickable
                : styles.musicNotClickable
                }
            >
                <Text style ={styles.musicBackground}>Play Music</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={this.pauseSound}
                disabled={this.state.playMusic === false ? true : false}
                 style={
                 this.state.playMusic === false
                ? styles.musicNotClickable
                : styles.musicClickable
                } 
            >
                <Text style ={styles.musicBackground}>Pause Music</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: "row",
      justifyContent: 'space-around'
    },
    musicBackground:{
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14, 
    color:"white" 
    },
    musicClickable:{
      backgroundColor: "#FF9800",
      padding: 10,
      height: 45,
      width: 100,
    },
    musicNotClickable:{
      backgroundColor: "gray",
      padding: 10,
      height: 45,
      width: 100, 
    }
  })