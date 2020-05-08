import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = props => {
    return (
        <TextInput {...props} style={styles.textInput} />
    )
}
const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor: 'black',
        width:'100%',
        margin:11,
        borderRadius:4,
        height:35,
        paddingLeft:10
    }
}
)

export default Input;