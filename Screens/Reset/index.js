import React, { useState, useEffect } from 'react'
import { Text, View,  Image, TouchableOpacity,ImageBackground,Dimensions ,ScrollView} from 'react-native'
import images from '../../Components/images'
import InputText from '../../Components/InputText'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from '../UseOrientation'

import style from './style'

function ResetFile({ navigation }) {
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
           <ImageBackground  style={{ 
                        height:orientations !='landscape' ? UseOrientation.height :  UseOrientation.height * 2,
                     width:  orientations !='landscape' ? UseOrientation.width : screenWidths  ,
                     }}
           source={images.SamsungGalaxyS10}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Image
              style={{ height: 19, width: 26, margin: 10 }}
              source={images.leftArrow} />
          </TouchableOpacity>
           </ImageBackground>
        </View>

            <View style={style.view}>
                <View style={{  justifyContent: 'center' }}>
                    <Text style={style.resetText}>Reset Your Password?</Text>
                </View>
                <View style={style.inputView}>
                    <InputText
                        style={style.textInput}
                        onChangeText={(text) => { console.log('text', text) }}
                        value={newPass}
                        placeholder="New Password"
                    />
                    <View style={{position:'absolute',right:20, top:15}}>
                        <Image source={images.view}
                            style={{ height: 12, width: 22 }} />
                    </View>
                </View>

                <View style={style.inputView}>
                    <InputText
                        style={style.textInput}
                        onChangeText={(text) => { console.log('text', text) }}
                        value={newPass}
                        placeholder="Confirm Password"
                    />
                    <View style={{position:'absolute',right:20, top:15}}>
                        <Image source={images.view}
                            style={{ height: 12, width: 22 }} />
                    </View>
                </View>
                    
                <TouchableOpacity onPress={()=>       
                navigation.navigate('AppStack') 
                
              }
       >
         <View style={style.change}>
                  <LinearGradient
                    style={{ borderRadius: 5 }}
                    colors={['#ED4343', '#A52021']} >
                   <View style={style.changeView}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                          Set Password
                        </Text>
                      </View>
                  
                  </LinearGradient>
                </View>
        </TouchableOpacity> 
            </View>
        </ScrollView>
    )
  }
export default ResetFile