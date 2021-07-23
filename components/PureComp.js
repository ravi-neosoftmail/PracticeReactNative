import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

class PureComp extends PureComponent {
  render() {
    console.log("pure comp render");

    return (
      <View>
        <Text> Pure Component {this.props.name} </Text>
      </View>
    );
  }
}

export default PureComp;
