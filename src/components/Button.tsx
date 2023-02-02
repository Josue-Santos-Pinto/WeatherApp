import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    city: string
}


export function Button ({city}:ButtonProps) {
    const navigation = useNavigation()

    const handleSubmitButtons = (city: string) => {
        navigation.navigate('Weather',{city})
    }

    return (
        <TouchableOpacity style={styles.Button} onPress={()=>handleSubmitButtons(city)}>
            <Text style={styles.text}>{city}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        width: '60%',
        height: 50,
        backgroundColor: '#996DFF',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
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