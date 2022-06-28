
import React, { useState, useEffect } from 'react'
import { Text, View ,ImageBackground,Image, ScrollView,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import images from '../../Components/images'
import InputText from '../../Components/InputText'
import UseOrientation from '../UseOrientation'
import styles from './style'



  function ForgotPass({navigation})  {
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
    const onpress =()=>{
        navigation.navigate('ResetFile')
    }
    return (  
        <>
        <ScrollView style={{flex:1,position:'relative'}} >
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
       
      <View style={{ position: 'absolute', height: "100%", width: '100%', top: '15%', backgroundColor: '#fff',
             borderTopLeftRadius:50,borderTopRightRadius:50}} >

      <Text style={styles.forgot}>Forgot Password?</Text>
     
      <Text style={{marginLeft:20,marginTop:10,color:'#707070',marginRight:20,fontSize:13}}>Enter your registerd email address or phone number and will send you a link to reset your password.</Text>

      <View style={styles.InputView}>
                    <InputText
                        style={
                            styles.input
                        }
                        onChangeText={(text) => { console.log('text', text) }}
                       
                        placeholder="Email or Phone Number"
                    />
                   
                </View>
                <View style={styles.change}>
                  <LinearGradient
                    style={{ borderRadius: 5 }}
                    colors={['#ED4343', '#A52021']} >
                    <TouchableOpacity onPress={() => navigation.navigate('ResetFile')}>
                      <View style={styles.changeView}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                          Send Link
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
      </View>
      </ScrollView>
      </>
    )
  }


export default ForgotPass