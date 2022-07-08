import { Text, View, ImageBackground, Image, ScrollView, Dimensions, TextInput, Keyboard, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import images from '../Components/images'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from './UseOrientation';
import { heightToDp } from '../variable';

export default function CodeVerify() {
    let clockCall = null;
    let textInput = useRef(null);
    const lengthInput = 6;
    const [enableResend, setEnableResend] = useState(false);

    const [interval, setInterval] = useState("");
    let defaultCountDown = 30;

    const OnChangeText = (val) => {
        setInterval(val)
    };
    const [countDown, setCountDown] = useState(defaultCountDown);


    console.log('UseOrientation', UseOrientation.height, UseOrientation.width)
    const [screenWidths, setScreenWidths] = useState('');
    const [screenHeight, setScreenHeight] = useState('');
    const [orientations, setOrientations] = useState(true);
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
}, );


const ResendOtp = () => {
    if (enableResend) {
        setCountDown(defaultCountDown)
        setEnableResend(false)
        clearInterval(clockCall)
        clockCall  = setInterval(()=>{
            decrementClock(),1000})
    }
}
const decrementClock=() => {
    if(countDown === 0){
        setEnableResend(true);
        setCountDown(0)
        clearInterval(clockCall)
    }
    else{
        setCountDown(countDown-1);
    }
}
    useEffect(() => {
        textInput.focus();
    }, []);

    return (
        <View style={{ flex: 1,  }}>
            <ScrollView style={{ height: heightToDp('130%') }}>
                
                    {/* <ImageBackground style={{
                        height: orientations != 'landscape' ? heightToDp("112%") : UseOrientation.height * 2,
                        width: orientations != 'landscape' ? UseOrientation.width : screenWidths
                    }}
                        // source={images.SamsungGalaxyS10}
                        >

                        <TouchableOpacity>
                            <Image
                                style={{ height: 19, width: 25, marginLeft: 18, top: 18, }}
                                source={images.leftArrow} />
                        </TouchableOpacity>
                        <Image
                            style={{ alignSelf: 'center', marginLeft: 50 }}
                            source={images.Vaistralogo}
                        />
                    </ImageBackground> */}
              

                <KeyboardAvoidingView 
                keyboardVerticalOffset={50}
                behavior='padding'
                >

                    <Text style={{ marginTop: 50, marginLeft: 20, fontSize: 22, fontWeight: "bold", color: 'black' }}>Code Verification</Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, }}>
                        Please enter the OTP sent to your registerd mobile number or email address</Text>
                    <View style={{ marginTop: 20, justifyContent: "space-between", flexDirection: "row",
                        paddingLeft: 20, paddingRight: 20
                    }}>

                        {/* {inputs.map((inp, index)=> { */}                        
                    <View>
                        <TextInput
                            returnKeyType='done'
                            maxLength={lengthInput}
                            onChangeText={OnChangeText}
                            keyboardType='numeric'
                            style={{width : 0, height : 0}}
                            value={interval}
                            ref={(input) => textInput = input}
                        />
                        <View style={styles.container}>
                            {
                                Array(lengthInput).fill().map((data, index) => (
                                    <View 
                                    key={index}
                                    style={styles.cellView}>
                                        <Text
                                     onPress={() => textInput.focus()}
                                            style={styles.cellText}>
                                         {interval && interval.length > 0 ? interval[index] : ""}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                        </View>          
                        {/* }) */}
                        {/* } */}


                    </View>
                    <TouchableOpacity onPress={ResendOtp}>
                    <View style={{ alignSelf: 'flex-end', marginRight: 20 }}>
                        <Text style={{color : enableResend ? 'red' : '#707070'}}> Resend OTP in {countDown} </Text>
                    </View>
                    </TouchableOpacity>
                   

                    {/* <View style={styles.verifyView}>
    
                <LinearGradient
                style={{borderRadius:5}}
               colors={['#ED4343', '#A52021']} >
                  <TouchableOpacity onPress={onpress}>
                    <View style={styles.ViewOtp}>
                      <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                      Verify OTP
                      </Text>
                    </View>
                  </TouchableOpacity>
                  </LinearGradient>
                  
                </View> */}
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellView: {
        paddingVertical: 10,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
    },
    cellText: {
        textAlign: 'center',
        fontSize: 15,
    }
})