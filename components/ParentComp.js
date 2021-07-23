import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: 'ravi'
    }
    
  }

//   componentDidMount() {
//       setInterval(() => {
//         this.setState({
//             name: 'ravi'
//         })
//       }, 2000) 
//   }

  render() {
      console.log("*************parent comp render**************");
    return (
      <View>
        <Text> ParentComp </Text>
        <RegComp  name={this.state.name}/>
        <PureComp  name={this.state.name}/>
      </View>
    );
  }
}

export default ParentComp;
