import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Register, OnBoardingScreen} from '@components'

const Stack = createNativeStackNavigator();

export default function App2() {

  return (
    <NavigationContainer>
        {/* initialRouteName menetapkan route yang pertama kali muncul */}
        <Stack.Navigator initialRouteName='OnBoardScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="OnBoardScreen" component={OnBoardingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  
})