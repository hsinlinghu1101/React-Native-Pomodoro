import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

// need to fix onLongPress

class Session extends Component {
  constructor() {
    super();

    this.timer = null;
    this.stopTimer = this.stopTimer.bind(this);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  increaseSession = () => {
    if (this.props.session === 60) {
      return;
    }
    this.props.increase();
    this.props.finalIncrease();
    this.timer = setTimeout(this.increaseSession, 125);
  };
  
  decreaseSession = () => {
    if (this.props.session === 1) {
      return;
    }
    this.props.decrease();
    this.props.finalDecrease();
    this.timer = setTimeout(this.decreaseSession, 125);
  };
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sessionText}>Session Duration</Text>
        <Text style={styles.sessionText}>{this.props.session}</Text>
        <View style={styles.toView}>
          <TouchableOpacity
            style={
              this.props.isPlay === false
                ? styles.toStyleClickable
                : styles.toStyleNot
            }
            onPressIn={this.increaseSession}
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
            onPressIn={this.decreaseSession}
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
    margin: 20,
  },
  toStyleClickable: {
    backgroundColor: "#C66900",
    padding: 10,
    margin: 10,
    height: 38,
    width: 28,
  },
  toStyleNot: {
    backgroundColor: "gray",
    padding: 10,
    margin: 10,
    height: 38,
    width: 28,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  toView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sessionText: {
    fontSize: 17,
  },
});

export default Session;
