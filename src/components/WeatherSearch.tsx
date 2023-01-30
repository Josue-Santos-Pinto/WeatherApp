import React,{ useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import api from "../services/api";
import { Button } from "./Button";


export function WeatherSearch () {

    const [city, setCity] = useState('')

    const getWeather = async () => {
        const response = await api.getWeather(city)
        console.log(response)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome da cidade: </Text>
            <TextInput 
                style={styles.searchInput}
                placeholder='ex.: São Paulo'
                onChangeText={(e)=>setCity(e)}
                value={city}
            />
            <TouchableOpacity style={styles.Button} onPress={getWeather}>
                <Text style={{color:'#FFF', fontSize: 15}} >Pesquisar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        padding: 15,
        borderRadius: 10
    },
    text: {
        color: '#FFF',
        fontSize: 20
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
    },
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
    }
})