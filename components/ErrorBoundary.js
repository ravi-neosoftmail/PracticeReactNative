import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return{
            hasError:true
        }
    }
    render() {
        if(this.state.hasError){
            return (
                <View>
                    <Text> SomeThing went wrong</Text>
                </View>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;