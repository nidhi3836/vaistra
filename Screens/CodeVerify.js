import { Text, View, ScrollView, Dimensions, TextInput, Keyboard, StyleSheet, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import UseOrientation from './UseOrientation';
import { heightToDp } from '../variable';
import images from '../Components/images'
import LinearGradient from 'react-native-linear-gradient';

export default function CodeVerify({navigation}) {
    let clockCall = null
    let textInput = useRef(null)
    const lengthInput = 6;
    const [enableResend, setEnableResend] = useState(false);
    const [internalVal, setInternalVal] = useState("")
    let defaultCountDown = 30;

    const OnChangeText = (val) => {
        setInternalVal(val)
    };
    const [countDown, setCountDown] = useState(defaultCountDown);

    console.log('UseOrientation', UseOrientation.height, UseOrientation.width)
    const [screenWidths, setScreenWidths] = useState('');
    const [screenHeight, setScreenHeight] = useState('');
    const [orientations, setOrientations] = useState(false);

    useEffect(() => {
        Dimensions.addEventListener('change', newDimensions => {
            let screenWidth = newDimensions.window.width;
            let screenHeight = newDimensions.window.height;
            setScreenWidths(newDimensions.window.width);
            setScreenHeight(newDimensions.window.height);
            setOrientations(screenWidth < screenHeight ? 'portrait' : 'landscape');
        });
    }, [orientations]);

    useEffect(() => {
 clockCall = setInterval(() => 
    {  decrementClock(); 
    },1000)
   return () => {
    clearInterval(clockCall)
   }
    })   

    const ResendOtp = () => {
    if (enableResend) {
        setCountDown(defaultCountDown)
        setEnableResend(false)
        clearInterval(clockCall)
        clockCall  = setInterval(
            ()=>{decrementClock()},1000)
    }
}
    const decrementClock = () => {
        if (countDown === 0) {
            setEnableResend(true);
            setCountDown(0)
            clearInterval(clockCall)
        } else {
            setCountDown(countDown-1);
        }
    }
    useEffect(() => {
        textInput.focus();
    }, []);

    return (
        <View style={{ flex: 1,backgroundColor : '#fff',  }}>
            <ScrollView style={{ height: heightToDp('100%') }}>
                
                     <ImageBackground style={{
                        height: orientations != 'landscape' ? heightToDp("125%") : UseOrientation.height * 2,
                        width: orientations != 'landscape' ? UseOrientation.width : screenWidths,                       
                    }}
                        source={images.SamsungGalaxyS10}
                        >
                        <TouchableOpacity onPress={ () => navigation.navigate('Login')}>
                            <Image
                                style={{ height: 19, width: 25, marginLeft: 18, top: 18, }}
                                source={images.leftArrow} />
                        </TouchableOpacity>
                        <Image
                            style={{ alignSelf: 'center', marginLeft: 50 }}
                            source={images.Vaistralogo}
                        />                           

                <KeyboardAvoidingView 
                // position = 'absolute'
                keyboardVerticalOffset={40}
                behavior='padding'
                    style={{backgroundColor : '#fff', borderTopLeftRadius : 35,  borderTopRightRadius : 35,flex : 0.8, top : 20,
               
                }}
                >
                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 25, fontWeight: "bold", color: 'black' }}>Code Verification</Text>
                    <Text style={{ marginLeft: 20, marginTop: 5, }}>
                        Please enter the OTP sent to your registerd mobile number or email address</Text>
                    <View style={{ justifyContent: "space-between", flexDirection: "row",
                        paddingLeft: 20, paddingRight: 20,alignItems : 'center',
                        // marginHorizontal : orientations != 'landscape' ? 0 : 60,
                    }}>

                        {/* {inputs.map((inp, index)=> { */}                        
                    <View style={{flex : orientations != 'landscape' ? 0.99 : 0.8 ,
                    justifyContent : 'center',
                   
                }}>
                        <TextInput
                            returnKeyType='done'
                            maxLength={lengthInput}
                            onChangeText={OnChangeText}
                            keyboardType='numeric'
                            style={{width : 0, height : 0}}
                            value={internalVal}
                            ref={(input) => textInput = input}
                            
                        />
                        <View style={styles.container}>
                            {
                                Array(lengthInput).fill().map((data, index) => (
                                    <View 
                                    key={index}
                                    style={[styles.cellView,]}>
                                        <Text
                                     onPress={() => textInput.focus()}
                                            style={styles.cellText}>
                                         {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                        </View>          
                       
                    </View>
                    <TouchableOpacity onPress={ResendOtp}>
                    <View style={{backgroundColor : "#ddd", alignSelf: 'flex-end', marginRight: 25 }}>
                        <Text style={{color : enableResend ? 'red' : '#707070'}}>
                             Resend OTP in ({countDown}) </Text>
                    </View>
                    </TouchableOpacity>
                   
                    <View style={styles.verifyView}>
    
                <LinearGradient
                style={{borderRadius:5}}
               colors={['#ED4343', '#A52021']} >
                  <TouchableOpacity onPress={() => navigation.navigate('AppStack')}>
                    <View style={styles.ViewOtp}>
                      <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                      Verify OTP
                      </Text>
                    </View>
                  </TouchableOpacity>
                  </LinearGradient>
                  
                </View> 
                </KeyboardAvoidingView>
                </ImageBackground>      
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
        justifyContent : 'space-around'
    },
    cellView: {
        paddingVertical: 13,
        width: 45,
        margin: 5,
        justifyContent: 'center',
        alignItems: "center",       
        borderRadius : 8,        
        backgroundColor : '#E5E5E5'
    },
    cellText: {
        textAlign: 'center',
        fontSize: 15,
    },
    verifyView : {
       
        //backgroundColor:'#E0E0E0',
        height:55,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
    },
    ViewOtp : {
        width:UseOrientation.width / 1.2,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginLeft:10,
        marginRight:10,
    },
})