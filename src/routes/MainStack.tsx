import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Weather } from '../screens/Weather'

const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Weather' component={Weather} />
        </Stack.Navigator>
    )
}