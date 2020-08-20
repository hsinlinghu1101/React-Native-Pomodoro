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
      <View>
        <Text>Session Duration</Text>
        <Text>{this.props.session}</Text>
        <TouchableOpacity>
          <Button
            onPress={this.increaseSession}
            disabled={this.props.isPlay === true ? true : false}
            title="+"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            onPress={this.decreaseSession}
            disabled={this.props.isPlay === true ? true : false}
            title="-"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// Session.propTypes = {
//   isPlay: PropTypes.bool,
// };

export default Session;
