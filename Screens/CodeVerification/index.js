import { Text, View, ImageBackground, Image, ScrollView , Dimensions, TextInput, Keyboard} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './style'
import style from '../Reset/style'
import images from '../../Components/images'
import LinearGradient from 'react-native-linear-gradient';
import UseOrientation from '../UseOrientation'
import { heightToDp } from '../../variable'

let newInputIndex  = 0 
const inputs = Array(6).fill('');

function CodeVerification  ({ navigation }) {

  const onpress = () => {
    Keyboard.dismiss();
    navigation.navigate('FileOne')
  }
  const EditProfile = () => {
    navigation.navigate('Login')
  }
  const input = useRef ()

const  handleChangeText = (text, index) => {
      const newOtp = {...otp};
      newOtp[index] = text;
      setOtp(newOtp); 

      const lastInputIndex = inputs.length - 1;
    newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    setNextInputIndex(newInputIndex);
  }
  const [nextInputIndex, setNextInputIndex ] = useState(0);
  const [otp, setOtp] = useState({0:'', 1:'', 2:'', 3:'', 4:'', 5:''});

 console.log(otp)
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

useEffect(() => {
  input.current.focus();
}, [nextInputIndex])

  return (
    < View style={{flex:1, position:'absolute'}}>
  <ScrollView style={{ height:heightToDp('130%')}}>
      <View>
        <ImageBackground style={{
        height:orientations !='landscape' ? heightToDp("112%") :  UseOrientation.height * 2 ,
       width:  orientations !='landscape' ? UseOrientation.width : screenWidths   
      }}
          source={images.SamsungGalaxyS10}>

          <TouchableOpacity onPress={EditProfile}>
            <Image
              style={{ height: 19, width: 25, marginLeft: 18, top:18, }}
              source={images.leftArrow} />
          </TouchableOpacity>
          <Image
            style={{alignSelf:'center', marginLeft:50}}
            source={images.Vaistralogo}
          />
        </ImageBackground>
      </View>

       <View style={[style.view,{   height:orientations !='landscape' ? heightToDp('100%'):  UseOrientation.height * 2  , position:'absolute'}]} >

        <Text style={{ marginTop: 50, marginLeft: 20, fontSize: 22, fontWeight: "bold", color: 'black' }}>Code Verification</Text>
        <Text style={{ marginLeft: 20, marginTop: 10, }}>
          Please enter the OTP sent to your registerd mobile number or email address</Text>
        <View style={{ marginTop: 20, justifyContent: "space-between", flexDirection: "row", 
       paddingLeft:20,paddingRight:20}}>

        {inputs.map((inp, index)=> {
          return(
            <View key={index.toString()}>
           <TextInput
            maxLength={1}
            onChangeText={(text)=>handleChangeText(text, index)}
            keyboardType='numeric'
            style={styles.InputText}
            value={otp[index]}
            ref={nextInputIndex === index ? input : null}
          /> 
        
            </View>
          )
        })}
         
          
        </View>
<View style={{alignSelf:'flex-end',marginRight:20}}>

        <Text style={styles.resendText}>Resend OTP in 0:26</Text>
</View>

        <View style={styles.verifyView}>

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
              
            </View>
      </View> 
</ScrollView>
    </View>
  )
}


export default CodeVerification