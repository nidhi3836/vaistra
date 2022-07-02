import React from 'react'
import { View,Image, StyleSheet,ImageBackground,Text,TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import images from '../Components/images'
import { heightToDp } from '../variable'
import UseOrientation from './UseOrientation'

export default function SecondBlurBg({navigation}){
    return (
      <>      
   <View style={{backgroundColor:'white', height:heightToDp('100%')}}>
    <View style={{flex : 1, backgroundColor :'#d5d5d5'}}>
       
        <ImageBackground 
        blurRadius={6}        
          style={{height:"100%",width:"100%",position:'absolute'}}
                  source={images.blurBg}>               
           <View              
                style={{flex  : 0.8, backgroundColor : '#fff',
                flexDirection : 'column',   margin : 30, borderColor :'#d5d5d5',
                borderWidth : 1,marginTop : 120,borderRadius : 8,
                justifyContent : 'center',alignItems : 'center',}}>
                    <Image source={images.greenTick}/>
                 <Text style={{
                  fontSize : 23, color : '#000', fontWeight :'700',textAlign : 'center'
                 }}>
                    You can start Selling under {'\n'} this brand</Text> 
  
  <View style={{marginTop:20}}>
                <LinearGradient
                      style={{ borderRadius: 5 }}
                      colors={['#ED4343', '#A52021']} >
                <TouchableOpacity style={styles.TouchableOpacity} 
                onPress={()=>navigation.navigate('ProductDetails')}
                >
                    <Text style={styles.btn}> Continue </Text>
                                           
                </TouchableOpacity>
                </LinearGradient>
                </View>
  
                </View>
        </ImageBackground> 
        </View>
        </View>      
      </>         
    )
  }
  const styles = StyleSheet.create({
    TouchableOpacity:{
      // backgroundColor:'#FF2E2E',
       height:40,
       width: UseOrientation.width / 1.35,
      // marginTop:10,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:7,
       flexDirection:'row'
  },
  
  btn : {
    color : "white",
    fontSize : 18,
    fontWeight : 'bold',
    justifyContent:'center'
  }
  
  })