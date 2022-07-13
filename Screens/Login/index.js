import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, ScrollView, FlatList, Keyboard, KeyboardAvoidingView, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'
import images from '../../Components/images'
import InputText from '../../Components/InputText'
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from '../UseOrientation'
import { heightToDp, widthToDp } from '../../variable';
import ForgotPass from '../ForgotPass'
import Ripple from 'react-native-material-ripple'

function Login({ navigation }) {
    const [input, setInput] = useState({
        emailPhone: '',
        pass: '',
    });
    // constructor(props){
    //     super(props)
    //     this.state={
    //         emailPhone: "",
    //         pass: "",
    //     }
    // }
const onPress = () => {
    navigation.navigate('Home')
}

    const go = () => {
            Keyboard.dismiss();
            let valid = true ;            
            if(emailPhone == '')
            {      
                onPress()         
                
            //    valid = false ;
            }
            else {
               return(               
                alert('please Enter Email or Phone number')
               )
            }           
            // if (!input.emailPhone) {
            //     alert('Please Enter Email or Phone Number','emailPhone')
            //     // handleError('Please Enter Email', 'emailPhone')
            //     // valid = false;
            // }
            // else{
            //     return(()=>navigation.navigate('Home'))
            // }  
       
    }
    const handleOnChange = (text, input) => {
        setInput(prevState => ({ ...prevState, [input]: text }))
    }
  const [errors, setErrors] = useState();
  const handleError = (errorMessage, input) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }))
  }
  
  console.log(input)
    
    const [isFocused, setIsFocused] = useState(false);
    const [emailPhone, setEmailPhone] = useState(false);
    const [pass, setPass] = useState(true);
    const [password, setPassword] = useState(password)

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
        <View style={{ justifyContent: 'center', }}>
            <ScrollView style={{ }} >
        <KeyboardAvoidingView>
                <View style={{ marginHorizontal : 0, }}>
                    <Image
                        source={images.Two}
                        style={{
                            height: orientations != 'landscape' ? UseOrientation.height / 0.84 : UseOrientation.height * 2,
                            width: orientations != 'landscape' ? UseOrientation.width   : screenWidths,
                        }}
                    />
                </View>

                <View style={{
                    // flex : 0.5,
                    position: 'absolute',
                    width: '100%', top: '50%', backgroundColor: '#fff',
                    height: orientations != 'landscape' ? UseOrientation.height : UseOrientation.height * 2,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50
                }}>
                    <View style={{ marginLeft: 20, }}>
                        <Text style={styles.LabelView}>Login & SignUp</Text>
                    </View>

                    <View style={[styles.View, { borderColor:  "#707070" }]}>

                        <InputText
                                            
                            value={emailPhone}
                            style={styles.textInput}
                            onChangeText={(text) => { handleOnChange(text, emailPhone) }}
                            placeholder="Enter Email address or Phone Number"
                            placeholderTextColor="#707070"
                            
                            // setIsFocused={true}
                            onFocus = {()=>
                            handleError(null,'emailPhone')
                            }
                            onBlur={() =>
                                setIsFocused(true)
                            }
                          error = {errors.emailPhone}
                        />
                    </View>
                    {pass &&
                        <View style={[styles.View,]}>
                            <InputText
                                value={pass}
                                style={styles.textInput}
                                onChangeText={(text) => { handleOnChange(text, pass) }}
                                keyboardType={'default'}
                                placeholder="Enter Password"
                                placeholderTextColor="#707070"
                                // error = "Input"
                                secureTextEntry={password}

                            />

                            <View style={{ position: 'absolute',
                             right: 10, }}>
                                <Ripple onPress={() => setPassword(!password)}>
                                    <Image source={password ? images.eye : images.eyeClose}
                                        style={{ resizeMode: 'contain', height: 30, top: 5 }} />
                                </Ripple>

                            </View>
                        </View>
                    }
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPass')}
                        style={{ marginBottom: 15, }}>
                        <View style={{ alignItems: 'flex-end', marginRight: 25 }}>
                            <Text style={{ color: "red", fontSize: 14, fontWeight: "600" }}>
                                Forgot Password?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ go
                        //   ()=>navigation.navigate('CodeVerify')
                        }
                    >
                        <View style={{ alignItems: 'center' }}>
                            <LinearGradient
                                style={styles.ContinueBtn}
                                colors={['#ED4343', '#A52021']} >

                                <Text style={{ color: '#ffffff', fontWeight: "500", fontSize: 18 }}>
                                    Continue
                                </Text>
                            </LinearGradient>
                        </View> 
                    </TouchableOpacity>
                    <View style={{ marginTop: 12, flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 16, color: "#A5A3A3", }}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('FileOne')}>
                            <Text style={styles.Text}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                </KeyboardAvoidingView>

            </ScrollView>
        </View>
    )
}
export default Login