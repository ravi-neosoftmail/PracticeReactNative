import React, { createContext } from 'react';
import {
  View,
} from 'react-native';
import Default from './Default';

const FirstName = createContext();

export default function Home() {
    return (
        <View>
        <FirstName.Provider value ="Ravi">
        <Default/>
        </FirstName.Provider>
        </View>
    )
}

export { FirstName };