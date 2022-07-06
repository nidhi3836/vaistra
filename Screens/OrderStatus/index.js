import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image } from 'react-native'
import TopTab from '../TopTab';
import Header from '../../Components/Header';
import images from '../../Components/images';

const Tab = createMaterialTopTabNavigator();
export default function OrderStatus({navigation}) {


  return (
    <View style={{ height:"100%"}}>
      <Header
      image={images.Group355}
      onPress={()=> navigation.navigate('AppStack')}
      image2={images.notification}
      onPress3={()=> navigation.navigate('Notification')}
      />
      <TopTab />
    </View>
  )
}




