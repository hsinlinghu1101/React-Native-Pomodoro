import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  // const [isSession, setSession] = useState(true);
  // const [timerSecond, setTimerSecond] = useState(0);
  // const [intervalid, setIntervalid] = useState(0);
  const [sessionDuration, setSessionDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timerMinute, setTimerMinute] = useState(5);
  const [isPlay, setPlay] = useState(true);

  const increaseSession = () => {
    setSessionDuration((prevState) => {
      return {
        sessionDuration: prevState.sessionDuration + 1,
        timerMinute: prevState.sessionDuration + 1,
      };
    });
  };

  return (
    <View style={styles.container}>
      <Text>Pomodoro Timer</Text>
      <StatusBar style="auto" />
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
