import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

// need to fix onLongPress

class Session extends Component {
  increaseSession = () => {
    if (this.props.session === 60) {
      return;
    }
    this.props.increase();
  };
  decreaseSession = () => {
    if (this.props.session === 1) {
      return;
    }
    this.props.decrease();
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
            onPress={this.increaseSession}
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
            onPress={this.decreaseSession}
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
    backgroundColor: "#133dbd",
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
