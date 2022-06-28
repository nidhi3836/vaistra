import React from 'react'
import { View,Image, StyleSheet,ImageBackground,Text } from 'react-native'
import images from '../Components/images'

 export default function BlurBackground() {
  return (
    <>
      
 <View style={{flex : 1, backgroundColor : '#000'}}>
      <ImageBackground 
      // blurRadius={5}
    
        style={{height:"100%",width:"100%",}}
                source={images.blurBg}
                > 
               <View 
               blurRadius={5}
                style={{ alignSelf:'center',backgroundColor:'#fff',height:"90%",width:"60%",
                marginTop:150,

              }}>
                </View> 
      </ImageBackground> 
      </View>
      
    </>         
  )
}
const styles = StyleSheet.create({

})