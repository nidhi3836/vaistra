import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import BlurBackground from '../BlurBackground';
import TopTab from '../TopTab';
import ActivePage from '../TopScreens/ActivePage';
import Header from '../../Components/Header';
import images from '../../Components/images';
import Home from '../Home';

const Tab = createMaterialTopTabNavigator();
export default function OrderStatus({navigation}) {


  return (
    <View style={{ height:"100%"}}>
      <Header
      image={images.Group355}
      onPress={()=> navigation.navigate('Home')}
      image2={images.notification}
      onPress3={()=> navigation.navigate('Notification')}
      />
      <TopTab />
    </View>
  )
}




