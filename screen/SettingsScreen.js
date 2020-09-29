import React, {  useContext} from 'react'
import Session from "../components/Session";
import Break from "../components/Break";
import TimeContext from '../TimeContext'
import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {

  const time =useContext(TimeContext)

  
    return (
        <View>
      <Session
        isPlay={time.isPlay}
        session={time.sessionTime}
        reset={time.reset}
        increase={time.increaseSession}
        decrease={time.decreaseSession}
      />
      <Break
        isPlay={time.isPlay}
        break={time.breakTime}
        increase={time.increaseBreak}
        decrease={time.decreaseBreak}
      />
      
        </View>
    )
}

const styles = StyleSheet.create({

})