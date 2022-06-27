import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import images from '../../Components/images'

export default function BankDetails({navigation}) {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Fourth')}>
    <View style={{margin:12,flexDirection:'row'}}>
      <Image resizeMode='contain'
      style={{height:30,width:30,}}
      source={images.bank}/>
      <Text style={{marginLeft:20,fontSize:12,fontWeight:'bold',color:'#808080'}}>EDIT BANK DETAILS{'\n'}
      <Text style={{fontSize:10,color:'#AEAEAE'}}> Edit your bank details</Text></Text>   
    </View>
    </TouchableOpacity>
  )
}