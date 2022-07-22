import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, ScrollView, FlatList, Keyboard, KeyboardAvoidingView, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'
import images from '../../Components/images'
import InputText from '../../Components/InputText'
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from '../UseOrientation'
import { heightToDp, widthToDp } from '../../variable';
import Ripple from 'react-native-material-ripple'

export default function Login({ navigation }) {
    const [isFocused, setIsFocused] = useState(false);
    const [emailPhone, setEmailPhone] = useState('');
    const [pass, setPass] = useState(true);
    const [password, setPassword] = useState(password)
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPass, setCheckPass] = useState(false);

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

    const handleCheckEmail = (text) => {
        // 
        let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        setEmailPhone(text);
        if (re.test(text) || regex.test(text)) {
            setCheckEmail(false);
        }
        else {
            setCheckEmail(true);
        }
        // Keyboard.dismiss();
    };

    const handleLogin = (value) => {
        const checkPassword = checkPasswordValidity(value)
        if (!checkPassword) {
            setPass(true)
        }
        //  else if(!checkPassword.length > 8){
        //     setPass(false)
        // }

        else {
            setPass(false)
        //    alert('Password')
        }
    };

    const checkPasswordValidity = value => {

        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            Alert.alert('Something went Wrong','Please ! Enter valid  Email or Password');

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


    return (
        <View style={{ justifyContent: 'center', }}>
            <ScrollView style={{  }} >

                <View style={{height : heightToDp('100%')}}>
                    <Image
                        source={images.Two}
                        style={{
                            height: orientations != 'landscape' ? UseOrientation.height / 0.84  : UseOrientation.height * 2,
                            width: orientations != 'landscape' ? UseOrientation.width : screenWidths,
                        }}
                    />
                </View>

                <View 
                // keyboardVerticalOffset={40}
                // behavior='padding'
                style={{
                    position: 'absolute',
                   width : orientations != 'landscape' ? UseOrientation.width : screenWidths, top: '58%', backgroundColor: '#fff',
                    height: orientations != 'landscape' ? UseOrientation.height : UseOrientation.height * 2,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50
                }}>
                    <View style={{ marginLeft: 20, }}>
                        <Text style={styles.LabelView}>Login & SignUp</Text>
                    </View>

                    <View style={[styles.View, { borderColor: "#707070" }]}>

                        <InputText
                            autoCapitalize={false}
                            value={emailPhone}
                            keyboardType={'email-address'}
                            style={styles.textInput}
                            onChangeText={(text) => handleCheckEmail(text)}
                            placeholder="Enter Email address or Phone Number"
                            placeholderTextColor="#707070"
                            setIsFocused={true}
                        />
                    </View>

                    {checkEmail ?
                        <Text style={{ alignSelf: 'flex-end', color: 'red', marginRight: 20 , fontSize : 11,fontWeight : "700"}}>Please enter valid Email or Phone Number!</Text>
                        :
                        <Text style={{ alignSelf: 'flex-end', color: 'red', marginRight: 20 }}></Text>
                    }

                    <View style={[styles.View,{top : -5}]}>
                        <InputText
                            value={pass}
                            style={styles.textInput}
                            onChangeText={(value) => handleLogin(value)}
                            keyboardType={'default'}
                            placeholder="Enter Password"
                            placeholderTextColor="#707070"
                            // error = "Input"
                            secureTextEntry={password}
                        />
                        <View style={{
                            position: 'absolute',
                            right: 10,
                        }}>
                            <Ripple onPress={() => setPassword(!password)}>
                                <Image source={password ? images.closeEye : images.openEye}
                                    style={{ resizeMode: 'contain', height: 30, top: 5 }} />
                            </Ripple>
                        </View>
                    </View>

                    {pass ?
                        <Text style={{ alignSelf: 'flex-end', marginRight: 20, color : '#707070', fontSize : 11,fontWeight : "700"}}>8 Chars : 1 Upper 1 Lower 1 SpecialSymbol 1 Number </Text>
                        :
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPass')}
                            style={{ marginBottom: 15, }}>
                            <View style={{ alignItems: 'flex-end', marginRight: 25 }}>
                                <Text style={{ color: "red", fontSize: 14, fontWeight: "600" }}>
                                    Forgot Password?
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPass')}
                        style={{ marginBottom: 15, }}>
                        <View style={{ alignItems: 'flex-end', marginRight: 25 }}>
                            <Text style={{ color: "red", fontSize: 14, fontWeight: "600" }}>
                                Forgot Password?
                            </Text>
                        </View>
                    </TouchableOpacity> */}


    {emailPhone == '' || pass == '' || checkEmail == true ?
                        <>
                            <TouchableOpacity
                                // disabled
                                onPress={handleLogin}
                            >
                                <View style={{ alignItems: 'center' , }}>
                                    <LinearGradient
                                        style={[styles.ContinueBtn, { opacity: 0.6, }]}
                                        colors={['#ED4343', '#A52021']} >

                                        <Text style={{ color: '#ffffff', fontWeight: "500", fontSize: 18 }}>
                                            Continue
                                        </Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{ flexDirection: 'row', alignSelf: 'center', top : 5}}>
                                <Text style={{ fontSize: 16, color: "#A5A3A3", }}>
                                    Don't have an account?
                                </Text>
                                <TouchableOpacity
                                    disabled
                                    onPress={handleLogin}>
                                    <Text style={{
                                        color: '#ffbfbf',
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        flexDirection: 'row',
                                        marginLeft: 5,
                                    }}>Signup</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                        :
                        <>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('AppStack')}
                            >
                                <View style={{ alignItems: 'center' }}>
                                    <LinearGradient
                                        style={[styles.ContinueBtn, {}]}
                                        colors={['#ED4343', '#A52021']} >
                                        <Text style={{ color: '#ffffff', fontWeight: "500", fontSize: 18 }}>
                                            Continue
                                        </Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={{ fontSize: 16, color: "#A5A3A3", }}>
                                    Don't have an account?
                                </Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('FileOne')}>
                                    <Text style={styles.Text}>Signup</Text>
                                </TouchableOpacity>
                            </View>

                        </>
                    }

                </View>


            </ScrollView>
        </View>
    )
}

