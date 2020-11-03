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
    this.timer = setTimeout(this.increaseSession, 125);
    
  };
  
  decreaseSession = () => {
    if (this.props.session === 1) {
      return;
    }
    this.props.decrease();
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
    );git 
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginBottom: 40
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

export default Session;
