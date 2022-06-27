import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import images from '../../Components/images'
import { heightToDp } from '../../variable'


export default function Customers() {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
    <View style={{height:heightToDp('90%')}}>
     
    </View>
    </TouchableOpacity>
  )
}