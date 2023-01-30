import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    text: string
}

export function Button ({text}:ButtonProps) {
    return (
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        width: '40%',
        height: 50,
        backgroundColor: '#15a13f',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0acc45',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        fontSize: 15
    },
    searchInput: {
        width: '95%',
        height: 50,
        padding: 10,
        backgroundColor:'#FFF',
        borderRadius: 5,
        marginTop: 15,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})