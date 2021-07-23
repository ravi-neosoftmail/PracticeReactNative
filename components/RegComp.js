import React, { Component } from 'react';
import { View, Text } from 'react-native';

class RegComp extends Component {
  render() {
    console.log("regular comp render");

    return (
      <View>
        <Text> RegComp {this.props.name}</Text>
      </View>
    );
  }
}

export default RegComp;
