import React, { useState, useEffect } from 'react'
import { Text, View,  Image, TouchableOpacity,ImageBackground,Dimensions ,ScrollView} from 'react-native'
import images from '../../Components/images'
import InputText from '../../Components/InputText'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from '../UseOrientation'

import style from './style'
import Ripple from 'react-native-material-ripple';
import handleSize from 'react-native-dimension/src/utils';

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
    const [confirmPass, setConfirmPass] = useState(false)
    const [visible, setVisible] = useState(true)
    const [visible2, setVisible2] = useState(true)

    const Check = (value) =>{
       

    }

    const handleLogin = (value) => {
        const checkPassword = checkPasswordValidity(value)

        if (!checkPassword) {
            setNewPass(true)
            // setConfirmPass(true)           
        }
        //  else if(!checkPassword.length > 8){
        //     setPass(false)
        // }

        else {
            setNewPass(false)
            // setConfirmPass(false)
        //    alert('Password')
        }
    };  

    const checkPasswordValidity = value => {        

        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            Alert.alert('Something went Wrong','Password must have at least 1 Uppercase ,1 Lowercase , 1 Digit, 1 Special Symbol or must be 8-16 Characters Long');

        }

        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
        //    alert( 'Password must have at least 1 Uppercase ,1 Lowercase , 1 Digit, 1 Special Symbol or must be 8-16 Characters Long');
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
           return ('Password must have at least one Lowercase Character.');
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return ('Password must contain at least one Digit.');
        }

        const isValidLength = /^.{0,7}$/;
        if (isValidLength.test(value)) {
          return 'Password must be 8-16 Characters Long.';
        }

        const isContainsSymbol =
          /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!isContainsSymbol.test(value)) {
          return 'Password must contain at least one Special Symbol.';
        }
        return null;
    };

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
                        onChangeText={(value) =>  setNewPass(value) }
                        value={newPass}
                        placeholder="New Password"
                        secureTextEntry={visible}
                    />
                    <Ripple 
                    onPress={() => setVisible(!visible)}
                    style={{position:'absolute',right:20, top:12}}>
                        <Image  source={ visible ? images.closeEye : images.openEye}
                            style={{ height: 19, width: 27 }} />
                    </Ripple>
                </View>
                <View style={style.inputView}>
                    <InputText
                        style={style.textInput}
                        onChangeText={(text) => {setConfirmPass(text) }}
                        value={confirmPass}
                        placeholder="Confirm Password"
                        secureTextEntry={visible2}
                    />
                     <Ripple 
                    onPress={() => setVisible2(!visible2)}
                    style={{position:'absolute',right:20, top:12}}>
                        <Image  source={ visible2 ? images.closeEye : images.openEye}
                            style={{ height: 19, width: 27 }} />
                    </Ripple>
                </View>                    
{ confirmPass != newPass || confirmPass == '' || newPass == '' ? 
            <TouchableOpacity          
            onPress={handleLogin}
            disabled
        >
            <View style={{ alignItems: 'center' }}>
                <LinearGradient
                    style={[style.ContinueBtn, { opacity: 0.6, height : orientations !='landscape' ? "39.5%" : "32%"}]}
                    colors={['#ED4343', '#A52021']} >

                    <Text style={{ color: '#ffffff', fontWeight: "500", fontSize: 18 }}>
                        Continue
                    </Text>
                </LinearGradient>
            </View>
        </TouchableOpacity>
:
<TouchableOpacity

onPress={() => navigation.navigate('AppStack')}
>
<View style={{ alignItems: 'center' }}>
    <LinearGradient
        style={[style.ContinueBtn, { height : orientations !='landscape' ? "39.5%" : "32%"}]}
        colors={['#ED4343', '#A52021']} >

        <Text style={{ color: '#ffffff', fontWeight: "500", fontSize: 18 }}>
            Continue
        </Text>
    </LinearGradient>
</View>
</TouchableOpacity> 
}

            </View>
        </ScrollView>
    )
  }
export default ResetFile