import React, { useState, useEffect } from 'react'
import { Text, View, TextInput,  Image, TouchableOpacity,ImageBackground,Dimensions ,ScrollView, StyleSheet} from 'react-native'
import images from '../../Components/images'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from '../UseOrientation'
import SecondTicket from './SecondTicket'
import ResponsTicket from './responsTicket';

export default function Reply({navigation}) {
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
            <TouchableOpacity onPress={()=>navigation.navigate('SecondTicket')}>
            <Image
              style={{ height: 19, width: 26, margin: 10 }}
              source={images.leftArrow} />
          </TouchableOpacity>
           </ImageBackground>
        </View>

            <View style={style.view}>
               
               <View style={{flex : 0.28, backgroundColor :'#fff', margin :25, borderRadius : 10, borderWidth : 1, borderColor : '#d5d5d5'}}>
               <TextInput 
               placeholder='Message'
               maxLength={9}
               
               >
                     
               </TextInput>

               </View>

                
                <TouchableOpacity onPress={()=>       
                navigation.navigate('ResponsTicket') 
                
              }
       >
         <View style={style.change}>
                  <LinearGradient
                    style={{ borderRadius: 5 }}
                    colors={['#ED4343', '#A52021']} >
                   <View style={style.changeView}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                          Send Message
                        </Text>
                      </View>
                  
                  </LinearGradient>
                </View>
        </TouchableOpacity> 
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
         top: "60%", 
         height:'100%',
         borderTopStartRadius: 40, 
         borderTopEndRadius: 40 ,
        
        //  justifyContent:'center'
        
    },
    resetText : {
        marginTop: 50,
         marginLeft: 20,
          fontSize: 20, 
          fontWeight: "bold", 
          color: 'black'
    },
    inputView : {
     borderColor:'#B7B7B7',
        borderWidth:1,
        margin: 10,
        justifyContent:'center',
        borderRadius:7
    },
    change : {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    changeView : {
        width: UseOrientation.width/ 1.1,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginLeft: 10,
        marginRight: 10,
    }
})