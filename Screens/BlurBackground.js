import React from 'react'
import { View,Image, StyleSheet,ImageBackground,Text } from 'react-native'
import images from '../Components/images'
 
 export default function BlurBackground() {
  return (
    <>
      <View style={{flex:1,justifyContent: "center",
    alignItems: "center"}}>

      <ImageBackground 
      blurRadius={9}
        style={{height:"102%",width:"100%",}}
                source={images.blurBg}
                > 
               <View 
                style={{ alignSelf:'center',backgroundColor:'#F6F6F6',height:"60%",width:"60%",
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