// import { BlurView } from '@react-native-community/blur'
import React from 'react'
import { View,Image, StyleSheet,ImageBackground,Text } from 'react-native'
import images from '../Components/images'

 export default function BlurBackground() {
  return (
    <>      
 <View style={{flex : 1, backgroundColor : '#000'}}>
  <View>
    {/* <BlurView>
      <Text>Hii</Text>
    </BlurView> */}
  </View>
      <ImageBackground 
      blurRadius={4}        
        style={{height:"100%",width:"100%",position:'absolute'}}
                source={images.blurBg}>               
         <View              
              style={{flex  : 0.3,}}>
              </View>
      </ImageBackground> 
      </View>      
    </>         
  )
}
const styles = StyleSheet.create({

})