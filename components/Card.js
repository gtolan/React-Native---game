import React from 'react';
import {StyleSheet, View,TextInput, Button} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.inputContainer, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        width:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.6,
        backgroundColor:'white',
        elevation:6,
        marginVertical:10,
        padding:10
    }
})

export default Card;


