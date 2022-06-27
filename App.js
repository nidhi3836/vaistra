import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StatusBar } from 'react-native'
import AuthStack from './Screens/AuthStack'
import AppStack from './Screens/AppStack'


export default function App() {
  return (
     <NavigationContainer>
    
    <StatusBar
           backgroundColor='#000' barStyle='dark-content'
           hidden
     />  
           <AuthStack /> 

     </NavigationContainer>
  )
}

 