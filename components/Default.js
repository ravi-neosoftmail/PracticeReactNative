import React, { useState , useMemo } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import  { FirstName }  from './Home';

export default function Default() {

    const [count, setCount] = useState(0)

    // const incCount =() => {
    //     setCount(count+1)
    // }
    // const decCount =() => {
    //     setCount(count-1)
    // }

        const handleCount = (num) => {
          
                return (num * 2);
        }
 
    // const doubleNumber = useMemo(() => {
    //     return (
    //         handleCount(count)
    //     );
    // }, [count])

    const doubleNumber=handleCount(count)

    console.log(doubleNumber, 'double', count);

    return (
        <>
            <FirstName.Consumer>
                { (fName) =>{
                    return(
                        <View style={[styles.mainView, styles.mainView2]}>
                            <Text> My name is {fName} </Text>
                        </View>
                    )
                }
                }
            </FirstName.Consumer>
            <View 
            // style={{ flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}
            >
                {/* <Button 
                    title="-"
                    onPress={decCount}
                />
                <Text> {count} </Text>
                <Button 
                    title="+"
                    onPress={incCount}
                /> */}

                <TextInput 
                style={{borderWidth:1, 
                
                    height:50
                }}
                    value={count}
                    onChangeText = {val => setCount(val)}
                />

                <Text> { doubleNumber } </Text>

                <Button 
                    title="+"
                    onPress={() => console.log("Button Pressed")}
                /> 
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    mainView:{
        
        width:10
    },
    mainView2:{
        width:250
    }
})