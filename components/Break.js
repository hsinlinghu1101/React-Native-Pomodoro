import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export class Break extends Component {
  constructor() {
    super();

    this.timer = null;
    this.stopTimer = this.stopTimer.bind(this);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  increaseBreak = () => {
    if (this.props.break === 60) {
      return;
    }
    this.props.increase();
    this.timer = setTimeout(this.increaseBreak, 125);
  };
  decreaseBreak = () => {
    if (this.props.break === 1) {
      return;
    }
    this.props.decrease();
    this.timer = setTimeout(this.decreaseBreak, 125);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sessionText}>Break Duration</Text>
        <Text style={styles.sessionText}>{this.props.break}</Text>
        <View style={styles.toView}>
          <TouchableOpacity
            style={
              this.props.isPlay === false
                ? styles.toStyleClickable
                : styles.toStyleNot
            }
            onPressIn={this.increaseBreak}
            onPressOut={this.stopTimer}
            disabled={this.props.isPlay === true ? true : false}
          >
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.props.isPlay === false
                ? styles.toStyleClickable
                : styles.toStyleNot
            }
            onPressIn={this.decreaseBreak}
            onPressOut={this.stopTimer}
            disabled={this.props.isPlay === true ? true : false}
          >
            <Text style={styles.text}>–</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  toStyleClickable: {
    backgroundColor: "#FF9800",
    borderColor:"#C66900",
    borderStyle:"solid",
    borderWidth:3,
    height: 50,
    width :50,
    borderRadius: 1000,
    padding: 6,
    marginHorizontal: 40,
    marginTop:5
  },
  toStyleNot: {
    backgroundColor: "gray",
    padding: 10,
    margin: 10,
   
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 25
  },
  toView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sessionText: {
    fontSize: 25,
    paddingTop: 10
  },
});

export default Break;
