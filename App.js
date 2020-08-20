import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Session from "./components/Session";
import Timer from "./components/Timer";
import Break from "./components/Break";

const App = () => {
  // const [isSession, setSession] = useState(true);
  // const [timerSecond, setTimerSecond] = useState(0);
  // const [intervalid, setIntervalid] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timerMinute, setTimerMinute] = useState(25);
  const [isPlay, setPlay] = useState(false);

  const increaseSession = () => {
    setTimerMinute(sessionDuration + 1);
    setSessionDuration(sessionDuration + 1);
  };

  const decreaseSession = () => {
    setTimerMinute(sessionDuration - 1);
    setSessionDuration(sessionDuration - 1);
  };

  const increaseBreak = () => {
    setBreakDuration(breakDuration + 1);
  };

  const decreaseBreak = () => {
    setBreakDuration(breakDuration - 1);
  };

  const onUpdateTimeMinute = () => {
    setTimerMinute(timerMinute - 1);
    setPlay(true);
  };

  const onToggleInterval = (isSession) => {
    if (isSession) {
      setTimerMinute(sessionDuration);
    } else {
      setTimerMinute(breakDuration);
    }
  };

  const onResetSession = () => {
    setTimerMinute(sessionDuration);
  };

  const onPlayStopTimer = (isPlayVar) => {
    setPlay(isPlayVar);
  };

  return (
    <View style={styles.container}>
      <Text>Pomodoro Timer</Text>
      <Session
        isPlay={isPlay}
        session={sessionDuration}
        increase={increaseSession}
        decrease={decreaseSession}
      />
      <Break
        isPlay={isPlay}
        break={breakDuration}
        increase={increaseBreak}
        decrease={decreaseBreak}
      />
      <Timer
        isPlay={isPlay}
        timerMinute={timerMinute}
        breakTimer={breakDuration}
        updateTimerMinute={onUpdateTimeMinute}
        toggle={onToggleInterval}
        resetSession={onResetSession}
        onPlayStopTimer={onPlayStopTimer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
