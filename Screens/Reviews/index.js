import { View, Text , Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Reviews() {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
    <View style={{margin:12,flexDirection:'row'}}>
      <Text>Reviews</Text> 
    </View>
    </TouchableOpacity>
  )
}