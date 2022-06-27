import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import images from '../../Components/images'


export default function Analytics() {
  return (
   <View style={{flex:1, backgroundColor:'white'}}>
    <View style={{margin:50,alignSelf:"center"}}>
    <Text style={{fontSize:35,color:'black',fontWeight:'500'}}>
            Order
          </Text>

    </View>
    <View style={{alignItems:'center'}}>
      <Image 
      resizeMode='contain'
      style={{height:250,width:350,}}
      source={images.order1}/>
    </View>
   </View>
  )
}