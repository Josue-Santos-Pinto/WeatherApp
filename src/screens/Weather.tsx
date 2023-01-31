import React,{useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, ActivityIndicator} from 'react-native'
import { useRoute } from '@react-navigation/native'
import api from "../services/api";
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import unsplashApi from "../services/unsplashApi";

interface Params {
    city: string
}

export function Weather (){

    const navigation = useNavigation()

    const route = useRoute()
    
    const { city } = route.params as Params

    const API_COUNTRY_FLAG = 'https://countryflagsapi.com/png/'

    const [loading, setLoading] = useState(true)

    const [cityName, setCityName] = useState('')
    const [temp, setTemp] = useState('')
    const [weather, setWeather] = useState('')
    const [img, setImg] = useState('')
    const [countryFlag, setCountryFlag] = useState('')
    const [humidity, setHumidity] = useState('')
    const [wind, setWind] = useState('')
    const [cityImg, setCityImg] = useState('')

    const getWeatherInfo = async () => {
        const response = await api.getWeather(city)
        if(response){
            setCityName(response.name)
            setTemp(response.main.temp)
            setWeather(response.weather[0].description)
            setImg(`http://openweathermap.org/img/wn/${response.weather[0].icon}.png`)
            setCountryFlag(API_COUNTRY_FLAG + response.sys.country)
            setHumidity(response.main.humidity)
            setWind(response.wind.speed)
            setLoading(false)
            
        } 
        
    }
    const getImgOfCity = async () => {
        const response = await unsplashApi.getCityImg(city)
             setCityImg(response.results[0].urls.full)         
    }

    useEffect(()=>{
        getWeatherInfo()
        getImgOfCity()
    },[])

    
    useEffect(()=>{
        console.log(cityImg)
    },[cityImg])
    


    return (
        <View style={styles.container}>
            {!loading ? 
            <>
                <View style={styles.imgCity}>
                    <Image source={{uri: cityImg}} style={{width: '100%', height: '110%'}} />
                </View>
                <View style={styles.weatherInfo}>
                    <View style={styles.titleView}>
                        <FontAwesome name='map-marker' size={25} color='#333' style={{marginRight: 10}} />
                        <Text style={styles.titleText}>{cityName}</Text>
                        <Image source={{uri: countryFlag}} style={{width: 25, height: 25, marginLeft: 10}} resizeMode='contain' />
                    </View>

                    <Text style={styles.temp} >{parseInt(temp)} ºC</Text>
                    
                    <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.tempInfo}>{weather}</Text>
                        <Image source={{uri: img}} style={{width: 50, height: 50}} />
                    </View>
                    

                    <View style={{flexDirection: 'row', width: '100%', height: 100, justifyContent: 'space-around', marginTop: 30}}>
                        <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Entypo name="drop" size={25} color='#333' style={{marginRight: 10}} />
                            <Text>{humidity}%</Text>
                        </View>
                        
                        <View style={{width: 1, height: '100%', backgroundColor: '#000' }}></View>

                        <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                            <FontAwesome5 name="wind" size={25} color='#333' style={{marginRight: 10}} />
                            <Text>{wind} km/h</Text>
                        </View>
                        
                    </View>

                </View> 
            </> 
                : 
                <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size='large' color='#FFF' />
                </View>
             }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    imgCity: {
        flex: 1
    },
    weatherInfo: {
        width: '100%',
        height: '60%',
        minHeight: 400,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        padding: 15
    },
    titleView:{
        flexDirection: "row",
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 25,
        color: '#000',
    },
    
    temp: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20
    },
    tempInfo: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        color: '#CCC',
        textTransform: "capitalize",
        fontWeight:'bold'
    }
})