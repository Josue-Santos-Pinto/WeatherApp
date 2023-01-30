import React from  'react'
import { View,StyleSheet, StatusBar } from 'react-native'
import { Header } from '../components/Header'
import { WeatherSearch } from '../components/WeatherSearch'
import { LinearGradient } from 'expo-linear-gradient';


export function Home () {
    return (
        <LinearGradient  
            style={styles.container}
            colors={["#020024","#0543fb"]}
            start={{x:0.3,y:0.3}}
            end={{x:1,y:1}}
        >
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent'  />
            <Header />

            <WeatherSearch />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})