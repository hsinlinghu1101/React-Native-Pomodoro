import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Vibration,
  SafeAreaView,
} from "react-native";


 
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalid: 0,
    };
  }

   
  play = () => {
    let intervalid = setInterval(this.decreaseTimer, 1000);
    this.props.onPlayStopTimer(true);
    this.setState({
      intervalid: intervalid,
    });
  };

  decreaseTimer = () => {
    const HALF_SECOND_IN_MS = 500;

    const PATTERN = [
      1 * HALF_SECOND_IN_MS,
      2 * HALF_SECOND_IN_MS,
      3 * HALF_SECOND_IN_MS,
    ];

    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });

            this.props.toggle(this.state.isSession);
            Vibration.vibrate(PATTERN);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.toggle(this.state.isSession);
            Vibration.vibrate(PATTERN);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSecond: 59,
          });
        }
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  };

  stop = () => {
    clearInterval(this.state.intervalid);
    this.props.onPlayStopTimer(false);
  };

  reset = () => {
    this.stop();
    this.props.resetSession();
    this.props.onPlayStopTimer(false);
    this.setState({
      timerSecond: 0,
      isSession: true,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textSession}>
          {this.state.isSession === true ? "Session" : "Break"}
        </Text>
        <Text style={styles.textSessionNum}>
          <Text>{this.props.timerMinute}</Text>
          <Text> : </Text>
          <Text>
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </Text>
        </Text>
        <View style={styles.toView}>
          <TouchableOpacity
            onPress={this.play}
            disabled={this.props.isPlay === true ? true : false}
            style={
              this.props.isPlay === false
                ? styles.toStyleClickable
                : styles.toStyleNot
            }
          >
            <Text style={styles.text}>Play</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.stop}
            style={
              this.props.isPlay === true
                ? styles.toStyleClickable
                : styles.toStyleNot
            }
          >
            <Text style={styles.text}>Stop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.reset}
            style={styles.toStyleClickable}
          >
            <Text style={styles.text}>Restart</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  toStyleClickable: {
    backgroundColor: "#C66900",
    padding: 10,
    margin: 10,
    height: 45,
    width: 100,
  },
  toStyleNot: {
    backgroundColor: "gray",
    padding: 10,
    margin: 10,
    height: 45,
    width: 100,
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 17,
  },
  textSession: {
    fontSize: 35,
  },
  textSessionNum: {
    fontSize: 25,
  },
  toView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Timer;
