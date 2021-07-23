import React, { useReducer } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const initialState = {
    firstCounter: 0
};
const reducer = (state, action) => {
    switch(action.type){
        case 'increment': 
            return {firstCounter: state.firstCounter + action.value}
        case 'decrement': 
            return {firstCounter: state.firstCounter - action.value}
        case 'reset':
            return initialState
        default: 
            return state
    }
}


export default function CounterOne() {

   const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <View>
            <Text> Count: {count.firstCounter} </Text>
            <Button 
                title= 'Increment'
                onPress={() => dispatch({type :'increment', value :1})}
            />
            <Button 
                title= 'Decrement'
                onPress={() => dispatch({type: 'decrement', value: 1})}
            />
             <Button 
                title= 'Increment by 5'
                onPress={() => dispatch({type :'increment', value :5})}
            />
            <Button 
                title= 'Decrement by 5'
                onPress={() => dispatch({type: 'decrement', value: 5})}
            />
            <Button 
                title= 'Reset'
                onPress={() => dispatch({type: 'reset'})}
            />
        </View>
    )
}
