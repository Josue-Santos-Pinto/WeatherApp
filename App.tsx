import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from  './src/screens/Home'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
        <Home />
    </NavigationContainer>
  );
}

