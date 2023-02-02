import { useNavigation } from "@react-navigation/native";
import React,{ useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import api from "../services/api";
import { Button } from "./Button";


export function WeatherSearch () {

    const navigation = useNavigation()

    const [city, setCity] = useState('')

    const mainCities = ['Rio de Janeiro','São Paulo', 'Nova Iorque','Tokyo']

    const handleSubmit = () => {
        if(city.trim() !== ''){
            navigation.navigate('Weather',{city})
            setCity('')
        } else {
            alert('Digite uma cidade')
        }
        
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
            <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
                <Text style={{color:'#FFF', fontSize: 15}} >Pesquisar</Text>
            </TouchableOpacity>
            <View style={styles.mainCitiesButtons}>
                {mainCities.map((city,index)=>(
                    <Button key={index} city={city}  activeOpacity={0.7} />
                ))}
            </View>
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
        width: '50%',
        height: 50,
        backgroundColor: '#00B37E',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainCitiesButtons: {
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop: 15
    }
})