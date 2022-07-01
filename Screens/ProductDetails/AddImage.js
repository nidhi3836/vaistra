import React, { useState, useEffect } from 'react'
import { Text, View, TextInput,  Image, TouchableOpacity,ImageBackground,Dimensions ,ScrollView, StyleSheet} from 'react-native'
import images from '../../Components/images'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from '../UseOrientation'
import ProductDetails from '.';


export default function AddImage({navigation}){
    console.log('UseOrientation', UseOrientation.height, UseOrientation.width)
    const [screenWidths, setScreenWidths] = useState('')
    const [screenHeight, setScreenHeight] = useState('')
    const [orientations, setOrientations] = useState(true)
    useEffect(() => {
        Dimensions.addEventListener('change', newDimensions => {
            let screenWidth = newDimensions.window.width;
            let screenHeight = newDimensions.window.height;
            setScreenWidths(newDimensions.window.width);
            setScreenHeight(newDimensions.window.height);
            setOrientations(screenWidth < screenHeight ? 'portrait' : 'landscape');
        });
    }, [orientations]);
    const [newPass, setNewPass] = useState(false)
    const [visible, setVisible] = useState(true)
    console.log('newPass', newPass)
    return (

        <ScrollView style={{flex:1,position:'relative'}}>

<View style={{height:"50%",width: '100%',}}>    
        
           <ImageBackground  
           blurRadius={7}
           style={{ 
                        height:orientations !='landscape' ? UseOrientation.height :  UseOrientation.height * 2,
                     width:  orientations !='landscape' ? UseOrientation.width : screenWidths  ,
                     }}
           source={images.bg}>
            <TouchableOpacity onPress={()=>navigation.navigate(ProductDetails)}>
            <Image
              style={{ height: 19, width: 26, margin: 10 }}
              source={images.leftArrow} />
          </TouchableOpacity>
           </ImageBackground>
        </View>

            <View style={style.view}>
               
            <View style={{ flex: 0.075, backgroundColor : '#fff', marginLeft :20, marginRight : 10, padding : 10, flexDirection:'row',justifyContent :'space-around', marginTop : 30}}>
               
               <View style={{flex:0.16, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5',
                    }}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>AddProduct Image *</Text>
                        </View>
                        <View style={{flex:0.16, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5',
                    }}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>AddProduct Image *</Text>
                        </View>
                        <View style={{flex:0.16, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5',
                    }}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>AddProduct Image *</Text>
                        </View>
                        <View style={{flex:0.16, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5',
                    }}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>Add Product Image *</Text>
                        </View>
                        <View style={{flex:0.16, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5', 
                    }}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>AddProduct Image *</Text>
                        </View>

               </View>

            
            </View>
        </ScrollView>
    )
  }

  const style = StyleSheet.create({
    textInput : {
        height: 40,
        padding: 10,
         marginRight:40
    },
    view : {
        position: 'absolute', 
        backgroundColor: '#fff',         
         width: '100%', 
         top: "85%", 
         height:'100%',
         borderTopStartRadius: 40, 
         borderTopEndRadius: 40 ,
        
        //  justifyContent:'center'
        
    },
   
   
   
})