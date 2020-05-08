import React, {useState} from 'react';
import {StyleSheet, View, Text, Keyboard, Button, TouchableWithoutFeedback} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

import Colors from '../constants/colors'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setEnteredNumber] = useState('')
    
    const numberInputHandler = inputValue => {
        setEnteredValue(inputValue.replace(/[^0-9]/g,''))
    }
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () => {
        let chosenNumber = parseInt(enteredValue)
        if(chosenNumber === NaN || chosenNumber <= 0) return;
        setConfirmed(true);
        setEnteredNumber(chosenNumber);
        setEnteredValue('');
        // 
    }
    let confirmedOutput;
    if(confirmed){
        confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>    
            <Text style={styles.title}>Start a New Game!</Text>
            <View>
                <Text>Select a Number</Text>
            </View>
            <Card>
                <Input value={enteredValue} keyboardType='number-pad' maxLength={2} style={styles.textInput} onChangeText={numberInputHandler} blurOnSubmit autoCapitalize='none' autoCorrect={false} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={resetInputHandler} color={Colors.primary} title="Reset"  />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={confirmInputHandler} color={Colors.accent} title="Confirm" />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
            {/* <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset"  />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" />
                    </View>
                </View>
            </View> */}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    textInput:{
        borderWidth:1,
        borderColor: 'black',
        width:'100%',
        margin:11,
        borderRadius:4,
        height:35
    } ,
    buttonContainer:{
        flexDirection:'row',
        width:'100%'
    },
    button:{
        flex: 1,
        margin:1    
    }
});

export default StartGameScreen;