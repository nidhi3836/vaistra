import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import images from '../../Components/images'
import InputText from '../../Components/InputText'
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from '../UseOrientation'
import { heightToDp, widthToDp } from '../../variable';
import ForgotPass from '../ForgotPass'

function Login({ navigation }) {

const [emailPhone, setEmailPhone] = useState(false);
const [password, setPassword] = useState(false)

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

    return (
        <View style={{ justifyContent:'center', }}>
            <ScrollView style={{height:heightToDp('136%')}} >
                
            <View style={{ position:'absolute',}}>
                <Image
                    source={images.Two}
                    style={{ 
                           height:orientations !='landscape' ? UseOrientation.height / 0.835:  UseOrientation.height * 2 ,                     
                         width:  orientations !='landscape' ? UseOrientation.width  : screenWidths ,  }}
               />
            </View>

            <View style={{ width: '100%', top: '50%', backgroundColor: '#fff',
             height:orientations !='landscape' ? heightToDp('118%'):  UseOrientation.height * 2 ,
             borderTopLeftRadius:50,
             borderTopRightRadius:50}}>

    <View style={{marginLeft:20,}}>
     <Text style={styles.LabelView}>Login & SignUp</Text>
       </View>
       <View style={styles.View}>
               <InputText
                 value={emailPhone}
                   style={styles.textInput}
                    onChangeText={(text) => { console.log('text', text) }}
                    placeholder="Enter Email address or Phone Number"
                    placeholderTextColor = "black"
                />                  
        </View>
        <View style={[styles.View,]}>
                <InputText
                value={password}
                    style={styles.textInput}
                    onChangeText={(text) => { console.log('text', text) }}
                    placeholder="Enter Password"
                    placeholderTextColor = "black"
                />
                <View style={{position:'absolute',right:20, top:15}}>
                    <Image source={require('../../images/view.png')}
                        style={{ height: 12, width: 22 }} />
                </View>
            </View>

        <TouchableOpacity 
        onPress={()=> navigation.navigate(ForgotPass)}
        style={{marginBottom:15,}}>
            <View style={{alignItems:'flex-end', marginRight:25}}>
                <Text style={{color:"red",fontSize:14,fontWeight:"600"}}>
                    Forgot Password?
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('CodeVerification')}
        >

    <View style={{alignItems:'center'}}>
    <LinearGradient
        style={styles.ContinueBtn}
        colors={['#ED4343', '#A52021']} >

      <Text style={{color:'#ffffff',fontWeight:"500",fontSize:18}}>
          Continue
      </Text>
    </LinearGradient>
    </View>
    </TouchableOpacity>
    <View style={{marginTop:12,flexDirection:'row',alignSelf:'center'}}>
    <Text style={{fontSize:16,color:"#A5A3A3",}}>
     Don't have an account?      
    </Text>
      <TouchableOpacity

          onPress={()=>navigation.navigate('FileOne')}>
          <Text style={styles.Text}>Signup</Text>
      </TouchableOpacity>
      </View>

            </View>


            </ScrollView>
        </View>
    )
}
export default Login