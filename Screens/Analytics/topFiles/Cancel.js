import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { heightToDp } from '../../../variable'
import images from '../../../Components/images'

export default function Cancel() {
  return (
    <ScrollView>
    <View style={{height:heightToDp('100%'),backgroundColor:'#fff',}}>
        <View style={{flex : 0.05, flexDirection : 'row', justifyContent : 'space-evenly'}}>
        <Text style ={{fontSize : 17 }}>  Day  </Text>
        <Text  style ={{fontSize : 17 , }}>  Week  </Text>
        <Text style ={{fontSize : 17 ,color : 'red'}}>  Month  </Text>
        <Text style ={{fontSize : 17 }}>  Year  </Text>
       
        </View>
        <View style={{flex : 0.39, marginLeft : 25, justifyContent : 'center', 
      alignItems : 'center'
      }}>
            <Image source={images.Group3698}/>
        </View> 
        <View style ={{flex : 0.07, backgroundColor:'#fff', marginLeft : 20,
    alignItems:"center",justifyContent : 'center', 
    alignItems : 'center'
    }}>
            <Text  style ={{fontSize : 20 , color : '#444'}}>Revenue</Text>
        </View>
        <View style={{flex : 0.37, marginLeft : 25, top : 15}}>
            <Image source={images.Group3699}/>
        </View> 

    </View>
    </ScrollView>
  )
}