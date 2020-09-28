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
        finalIncrease={time.finalIncreaseSession}
        finalDecrease={time.finalDecreaseSession}
        increase={time.increaseSession}
        decrease={time.decreaseSession}
      />
      <Break
        isPlay={time.isPlay}
        break={time.breakTime}
        increase={time.increaseBreak}
        decrease={time.decreaseBreak}
      />
      <Text>{time.increaseSession}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})