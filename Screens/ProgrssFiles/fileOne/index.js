import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import InputText from '../../../Components/InputText'
import style from './style'
import Header from '../../../Components/Header';
import StepIndicator from "react-native-step-indicator";
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../Components/images';
import UseOrientation from '../../UseOrientation';
import { heightToDp } from '../../../variable';


const labels = [
  "Seller detail",
  "Store Details",
  "Pick-up Deatils",
  "Bank Details",
];
const customStyles = {
  stepIndicatorSize: 15,
  currentStepIndicatorSize: 19,
  separatorStrokeWidth: 1.5,
  currentStepStrokeWidth: 0,
  stepStrokeCurrentColor: "#A52021",
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: "#A52021",
  stepStrokeUnFinishedColor: "#FF5C5C",
  separatorFinishedColor: "#A52021",
  separatorUnFinishedColor: "#FF8A8A",
  stepIndicatorFinishedColor: "#A52021",
  stepIndicatorUnFinishedColor: "#FF5C5C",
  stepIndicatorCurrentColor: "#A52021",
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: "red",
  stepIndicatorLabelFinishedColor: "#A52021",
  stepIndicatorLabelUnFinishedColor: "#A52021",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "red"
};

export default function FileOne({ navigation }) {

  const [number, setNumber] = useState(false);
  const [email, setEmail] = useState(false);
  const [fullName, setFullName] = useState(false);
  const [password, setPassword] = useState(false);
  const [aadhar, setAadhar] = useState(false);
  const [otp, setOtp] = useState(false);
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Header
        image={images.leftArrow}
        title={'Signup'}
        onPress={() => navigation.navigate('Login')}
      />
          <View style={{ backgroundColor: "#ffffff", paddingTop:5}}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={0}
              labels={labels}
              stepCount={4}
            />
         
          </View>

      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff",marginTop:5, }}>
          <View style={{ borderTopColor: "black",  height:heightToDp('80%') }}>
            <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "700", color: 'black' }}>Create your seller account</Text>

            {visible ?
              <View>
                <View style={style.InputText}>
                  <InputText
                    keyboardType='numeric'
                    style={{
                      height: 40,
                      padding: 10,
                      right: 20
                    }}
                    onChangeText={(text) => { console.log('text', text) }}
                    value={number}
                    placeholder="+91 | Mobile Number"
                  />
                  <View style={{ position: 'absolute', right: 21, top: 7 }}>
                    <Text style={{ color: 'red', fontWeight: "bold" }}>00:30</Text>
                  </View>
                </View>
                <InputText
                  valur={otp}
                  placeholder='Enter OTP'
                  keyboardType='phone-pad'
                  style={style.InputText}
                >
                </InputText>
                <InputText
                  value={email}
                  placeholder='Enter Email Address'
                  keyboardType='email-address'
                  style={style.InputText}
                >
                </InputText>
                <InputText
                  value={fullName}
                  placeholder='Enter Full Name'
                  style={style.InputText}
                >

                </InputText>
                <InputText
                  value={password}
                  placeholder='Create Password'
                  keyboardType='visible-password'
                  style={style.InputText}
                >
                </InputText>

                <View style={{ flexDirection: "row", marginTop: 8, alignItems:'center',alignSelf:'center' }}>
                  <View style={{ backgroundColor: "#EFECEC", 
                  borderTopLeftRadius:12,
                  borderBottomEndRadius:11,
                padding:3
                }}>
                <Text style={{ color: "#A5A3A3", fontSize: 12,}}>8 characters </Text>
                  </View>
                  <View style={{ backgroundColor: "#EFECEC", 
                  borderTopLeftRadius:12,
                  borderBottomEndRadius:11,
                   padding:3,
                   marginLeft:15,
                }}>
                  <Text style={{color:'#a3a3a3', fontSize: 12,}}>1 Special</Text>
                  </View>
                  <View style={{ backgroundColor: "#EFECEC", 
                  borderTopLeftRadius:12,
                  borderBottomEndRadius:11,
                   padding:3,
                   marginLeft:15,
                }}>
                  <Text style={{color: "#A5A3A3", fontSize: 12, }}>1 Uppercase</Text>
                  </View>
                  <View style={{ backgroundColor: "#EFECEC", 
                  borderTopLeftRadius:12,
                  borderBottomEndRadius:11,
                   padding:3,
                   marginLeft:15,
                }}>
                  <Text style={{  color: "#A5A3A3", fontSize: 12, }}>1 Numeric</Text></View>

                </View>
                <InputText
                  value={password}
                  placeholder='Confirmed Password'
                  style={style.InputText}
                >
                </InputText>
                <InputText
                  value={aadhar}
                  placeholder='Enter Aadhar Password'
                  style={style.InputText}>
                </InputText>


                <View style={styles.change}>

                  <LinearGradient
                    style={{ borderRadius: 5 }}
                    colors={['#ED4343', '#A52021']} >
                    <TouchableOpacity onPress={() => navigation.navigate(Second)}>
                      <View style={styles.changeView}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                          Save Details
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>

              </View>
              :

              <View style={{justifyContent:'center', }}>

                <View style={style.InputText}>
                  <InputText
                    keyboardType='numeric'
                    value={number}
                    style={{
                      height: 40,
                      padding: 10,
                      marginRight: 60
                    }}
                    onChangeText={(text) => { console.log('text', text) }}
                    placeholder="+91 | Mobile Number"

                  />
                  <View style={{ position: 'absolute', right: 20, top: 8 }}>
                    <TouchableOpacity onPress={() => setVisible(!visible)}>
                      <Text style={{ color: 'red', fontWeight: "bold" }}>Send OTP</Text>
                    </TouchableOpacity>

                  </View>
                </View>
                <InputText
                  value={email}
                  placeholder='Enter Email Address'
                  keyboardType='email-address'
                  style={style.InputText}
                >
                </InputText>
                <InputText
                  value={fullName}
                  placeholder='Enter Full Name'
                  style={style.InputText}
                >

                </InputText>
                <InputText
                  value={password}
                  placeholder='Create Password'
                  keyboardType='visible-password'
                  style={style.InputText}
                >
                </InputText>

                <View style={{ flexDirection: "row", marginTop: 8, justifyContent: 'center',alignItems:'center' }}>
                  <View style={{ backgroundColor: "#EFECEC", 
                  borderTopLeftRadius:12,
                  borderBottomEndRadius:11,
                padding:3
                }}>
                <Text style={{ color: "#A5A3A3", fontSize: 12,}}>8 characters </Text>
                  </View>
                  <View style={{ backgroundColor: "#EFECEC", 
                  borderTopLeftRadius:12,
                  borderBottomEndRadius:11,
                   padding:3,
                   marginLeft:15,
                }}>
                  <Text style={{color:'#a3a3a3', fontSize: 12,}}>1 Special</Text>
                  </View>
                  <View style={{ backgroundColor: "#EFECEC", 
                  borderTopLeftRadius:12,
                  borderBottomEndRadius:11,
                   padding:3,
                   marginLeft:15,
                }}>
                  <Text style={{color: "#A5A3A3", fontSize: 12, }}>1 Uppercase</Text>
                  </View>
                  <View style={{ backgroundColor: "#EFECEC", 
                  borderTopLeftRadius:12,
                  borderBottomEndRadius:11,
                   padding:3,
                   marginLeft:15,
                }}>
                  <Text style={{  color: "#A5A3A3", fontSize: 12, }}>1 Numeric</Text></View>

                </View>
                <InputText
                  value={password}
                  placeholder='Confirmed Password'
                  style={style.InputText}
                >
                </InputText>
                <InputText
                  value={aadhar}
                  placeholder='Enter Aadhar Password'
                  style={style.InputText}>
                </InputText>
                <View style={{ alignItems:'center' }}>
                  <TouchableOpacity
                    onPress={() => setVisible(!visible)}
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                      backgroundColor: '#FF8A8A',
                      justifyContent: "center",
                      width: UseOrientation.width / 1.1,
                      height: 40,
                      borderRadius: 7,
                      alignItems: 'center',
                      marginTop: 10,
                    }}
                  >
                    <Text style={{
                      color: "#ffffff",
                      fontSize: 18,
                      fontWeight: "500"
                    }}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          </View>
      </ScrollView>
       
    </>
  )
}
const styles = StyleSheet.create({
  change: {

    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
     marginTop: 20,

  },
  changeView: {
    width: UseOrientation.width / 1.16,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
  },
})