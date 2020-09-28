
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
        timerMinute={time.timerMinute}
        breakTimer={time.breakTimen}
        updateTimerMinute={time.onUpdateTimeMinute}
        toggle={time.onToggleInterval}
        resetSession={time.onResetSession}
        onPlayStopTimer={time.onPlayStopTimer}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    
  }
});

export default HomeScreen;