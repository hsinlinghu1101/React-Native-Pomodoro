
import React, {  useContext } from "react";
import { StyleSheet, View } from "react-native";

import Timer from "../components/Timer";
import TimeContext from '../TimeContext'
const HomeScreen = () => {
  
  const time =useContext(TimeContext)


  return (
    <View style={styles.container}>
      
      <Timer
        style={styles.timer}
        isPlay={time.isPlay}
        onResetTrue={time.onResetTrue}
        onResetFalse={time.onResetFalse}
        timerMinute={time.timerMinute}
        sessionTime={time.sessionTime}
        breakTime={time.breakTime}
        updateTimerMinute={time.onUpdateTimeMinute}
        toggle={time.onToggleInterval}
        resetSession={time.onResetSession}
        onPlayStopTimer={time.onPlayStopTimer}
        finalIncrease={time.finalIncreaseSession}
        finalDecrease={time.finalDecreaseSession}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,  
  }
});

export default HomeScreen;