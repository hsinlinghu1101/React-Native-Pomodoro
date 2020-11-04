import React, { Component } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {Text,View, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Audio } from 'expo-av';
const soundObject = new Audio.Sound();

const audioPlaylist = [
  {
    title: 'Audio 1',
    src: require('../assets/audio1.mp3'),
    imageSource: require('../assets/time1.jpg')
  },
  {
    title: 'Audio 2',
    src: require('../assets/audio2.mp3'),
    imageSource: require('../assets/time2.jpg')
  },
  {
    title: 'Audio 3',
    src: require('../assets/audio3.mp3'),
    imageSource: require('../assets/time3.jpg')
  },
  {
    title: 'Audio 4',
    src: require('../assets/audio4.mp3'),
    imageSource: require('../assets/time4.jpg')
  },
  {
    title: 'Audio 5',
    src: require('../assets/audio5.mp3'),
    imageSource: require('../assets/time5.jpg')
  }
]

export default class Music extends Component {
  constructor() {
    super();
    this.state = {
      playMusic:false,
      isPlaying: false,
      playbackInstance: null,
      currentIndex: 0,
      volume: 1.0,
      isBuffering: false
    };
    
  }   

    async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      })

      this.loadAudio()
    } catch (e) {
      console.log(e)
    }
  }

  async loadAudio() {
  const {currentIndex, isPlaying, volume} = this.state

  try {
    const playbackInstance = new Audio.Sound()
    const source = audioPlaylist[currentIndex].src
    
    const status = {
      shouldPlay: isPlaying,
      volume
    }
   
    playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)     
    await playbackInstance.loadAsync(source, status, true)
    this.setState({playbackInstance})
    } catch (e) {
      console.log(e)
    }
    
}

onPlaybackStatusUpdate = status => {
  this.setState({
    isBuffering: status.isBuffering
  })
}

handlePlayPause = async () => {
  console.log()
    const { isPlaying, playbackInstance } = this.state
    console.log(playbackInstance)
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

    this.setState({
      isPlaying: !isPlaying
    })
  }

    handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < audioPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < audioPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }

  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state
    return playbackInstance ? (
      <View style={styles.trackInfo}>
        <Text style={[styles.trackInfoText, styles.largeText]}>
          {audioPlaylist[currentIndex].title}
        </Text>
      </View>
    ) : null
  }

    render() {
      const { playbackInstance, currentIndex } = this.state
        return (
            <View style ={styles.container}>
            
            <Image
              style={styles.albumCover}
              source={audioPlaylist[currentIndex].imageSource}
            />
            <View style={styles.controls}>
              <TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
                <Ionicons name="ios-skip-backward" size={48} color='#444' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
                {this.state.isPlaying ? (
                  <Ionicons name='ios-pause' size={48} color='#444' />
                    ) : (
                  <Ionicons name='ios-play-circle' size={48} color='#444' />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
                <Ionicons name='ios-skip-forward' size={48} color='#444' />
              </TouchableOpacity>
              
            </View>
            {playbackInstance ? (
                <View style={styles.trackInfo}>
                 <Text style={[styles.trackInfoText, styles.largeText]}>
                 {audioPlaylist[currentIndex].title}
            </Text>
              </View>
            ) : null}
            </View>
        )
    }
}


  const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumCover: {
    width: 250,
    height: 250
  },
  trackInfo: {
    padding: 30,
  },
  trackInfoText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    color: '#C66900'
  },
  largeText: {
    fontSize: 22
  },
  smallText: {
    fontSize: 16
  },
  control: {
    margin: 20
  },
  controls: {
    flexDirection: 'row'
  }
})