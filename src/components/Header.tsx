import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5 } from  '@expo/vector-icons'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export function Header (){


    const [fontsLoaded] = useFonts({
        Inter_900Black
      });
    
      if (!fontsLoaded) {
        return null;
      }


    return (
        <View style={styles.container}>
            <View style={styles.headerLogo}>
                <FontAwesome5 name='cloud' size={25} color='#FFF' />
                <Text style={styles.headerLogoText}>WeatherApp</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 105,
        backgroundColor: '#020024',
        padding: 15,
        marginTop: 20,
        justifyContent:'center',
        alignItems: 'center'
    },
    headerLogo: {
        height: '100%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    headerLogoText: {
        marginLeft: 10, 
        color:'#FFF',
        fontSize: 25,
        fontFamily:'Inter_900Black'
    }
})