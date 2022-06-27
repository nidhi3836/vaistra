import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import images from '../../Components/images'

export default function EditAddress() {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('ThirdFile')}>
    <View style={{margin:12,flexDirection:'row'}}>
      <Image 
      style={{height:30,width:30,}}
      source={images.officeAddress}/>
      <Text style={{marginLeft:20,fontSize:12,fontWeight:'bold',color:'#808080'}}>EDIT ADDRESS{'\n'}
      <Text style={{fontSize:10,color:'#AEAEAE'}}> Change your pick-up address</Text></Text>   
    </View>
    </TouchableOpacity>
  )
}