import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  Text,
  Button
} from 'react-native';


export default function FocusInput() {
    const [timer, setTimer] = useState(0)
    const inputRef = useRef(null)

    // useEffect(() =>{
    //     inputRef.current.focus()
    // })
    const intervalRef = useRef()

    useEffect(() =>{
        intervalRef.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () =>{
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <View>
            {/* <TextInput 
            style={{height:50, borderWidth:1}}
                ref={inputRef}
            /> */}
            <Text> Hook Timer : {timer} </Text>
            <Button 
                title= 'Clear'
                onPress = {() => clearInterval(intervalRef.current)}
            />
        </View>
    )
}
