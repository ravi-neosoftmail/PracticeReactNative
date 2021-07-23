import React, { createContext } from 'react';
import {
  Text,
  View,
} from 'react-native';

const FirstName = createContext();

export default function Testing({name}) {

    if(name==='joker'){
        throw new Error("not a name")
    }

    return (
        <>
        <View>
            <Text> { name }</Text>
        </View>
        </>
    )
}

export { FirstName };