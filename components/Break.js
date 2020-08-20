import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export class Break extends Component {
  increaseBreak = () => {
    if (this.props.break === 60) {
      return;
    }
    this.props.increase();
  };
  decreaseBreak = () => {
    if (this.props.break === 1) {
      return;
    }
    this.props.decrease();
  };

  render() {
    return (
      <View>
        <Text>Break Duration</Text>
        <Text>{this.props.break}</Text>
        <Button
          disabled={this.props.isPlay === true ? true : false}
          onPress={this.increaseBreak}
          title="+"
        ></Button>
        <Button
          disabled={this.props.isPlay === true ? true : false}
          onPress={this.decreaseBreak}
          title="-"
        ></Button>
      </View>
    );
  }
}

export default Break;
