import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        // flex:1,
        width:'100%',
        height:90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems:'center',
        justifyContent:'center'
        
    },
    headerTitle:{
        textAlign:'center',
        color:'white',
        fontSize:18
    }
})
export default Header;