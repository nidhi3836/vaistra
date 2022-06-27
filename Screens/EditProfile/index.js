import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import RadioForm from 'react-native-simple-radio-button';
import Header from '../../Components/Header';
import images from '../../Components/images';
import InputText from '../../Components/InputText';
import UseOrientation from '../UseOrientation';
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';
import { heightToDp, widthToDp } from '../../variable';
export default function EditProfile({ navigation }) {
  var hobbies = [
    { label: "Selling is my full-time job", value: 0 },
    { label: "i sell part-time but hope to sell full time", value: 1 },
    { label: "i sell part time and that's how i like it", value: 2 },
    { label: "Others", value: 3 },
  ];

const [mobile, setMobile] = useState(false)
const [name, setName] = useState(false)
const [email, setEmail] = useState(false)
const [display, setDisplay] = useState(false)
const [description, setDescription] = useState(false)
const [businessNo, setBusinessNo] = useState(false)
const [businessType, setBusinessType] = useState(false)
const [gstinNumber, setGstinNumber] = useState(false)
const [chosenOption, setChosenOption] = useState('');

  // return (
  //   <View style={{ flex: 1 }}>
  //     <Header
  //       image={images.left}
  //       title='Edit Profile'
  //     />
  //     <ScrollView style={{ height: '100%' }}>
  //       <View style={{ height: heightToDp('20%'), justifyContent: 'center',}}>
  //       </View>
  //       <View style={{
  //           height:heightToDp('80%'),
            
  //         }}>
  //           <View style={{flex:0.1,
  //           backgroundColor:'#d5d5d5',
  //           marginHorizontal: 30,
  //           borderWidth: 1,
  //           borderColor: '#000',}}>
  //            <InputText
  //           style={{
  //             flex:0.8,
  //             fontFamily:'SEGOEUI',
  //             height: 50,
  //             fontSize:18,
  //             color:'#000',       
  //             padding: 10,
  //           }}
  //           placeholder="example@abc.com"
  //           onChangeText={text => console.log('text',text)}           
  //         />
  //           </View>
  //         </View>
  //     </ScrollView>
  //   </View>
  // )

      return (
       <>
         <Header 
          image={images.left}
            title = 'Edit Profile'         
         />
      <ScrollView style={{}}> 

         <View style={styles.view}>
          <ImageBackground
           style={{alignItems:'center',justifyContent:'center',
          width:"100%", height:150
          }}
            resizeMode='cover'
            blurRadius={5}
            source={images.background}
            >
                <Image 
                style={{
                  position:'absolute',
                  width: UseOrientation.width / 3 ,
                  height: UseOrientation.height / 7,
                 }}
                 resizeMode="contain"
                 source={images.photo}
                />

            <Image
             source={images.pen}
            resizeMode='contain'
              style={{
                position:'absolute',
                width: UseOrientation.width / 4,
                height: UseOrientation.height / 24,
                left:"48%",
                top:90,
               }}
              />
          </ImageBackground>
        </View>

        <View  style={{   backgroundColor:'#fff',
        justifyContent:'center'
         }}>
          <View style={{paddingTop:10}}>
            <Text
              style={styles.label}>
              Person Information</Text>
          </View>
            <View style={[styles.textInput,
           {}]
            }>
              <InputText
                value={mobile}
                onChangeText={(text) => {setMobile(text) }}
                placeholder="+91 9123456789"
                placeholderTextColor="#505050"
              />
              <View style={styles.TextInputView}>
                <Text style={[styles.TextInputLabel,{width:85}]} >Mobile Number</Text>
              </View>
            </View>
            <View style={styles.textInput}>
              <InputText
              value={email}
                onChangeText={(text) => { console.log('text', text) }}
                placeholder="abc@gmail.com"
                placeholderTextColor="#505050"
              />
              <View style={styles.TextInputView}>
                <Text style={styles.TextInputLabel} >Email Address</Text>
              </View>
            </View>
            <View style={styles.textInput}>
              <InputText
              value={name}
                onChangeText={(text) => { console.log('text', text) }}
                placeholder="Zyan Malik"
                placeholderTextColor="#505050"
              />
              <View style={styles.TextInputView}>
                <Text style={[styles.TextInputLabel, { width: 60 }]} >Full Name</Text>
              </View>
            </View>
             <View style={{justifyContent:'center', }}>
            <Text
              style={styles.label}>
              Business Information</Text>
            </View>
            <View style={styles.textInput}>
              <InputText
              value={display}
                onChangeText={(text) => { console.log('text', text) }}
                placeholder="Sangam"
                placeholderTextColor="#505050"
              />

              <View style={styles.TextInputView}>
                <Text style={styles.TextInputLabel} >Display Name</Text>

              </View>
            </View>
            <View style={{ borderRadius:5,
            backgroundColor:'#F6F6F6',
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: '#B7B7B7',
            marginBottom:10,
            height:100,
            paddingLeft:20,
            }}>
              <InputText
              value={description}
                onChangeText={(text) => { console.log('text', text) }}
                placeholder="The business will ne retail sales of urban clothing and associated.Nancy seymour will hold 50 percent ownership and joanne Arbor will also hold 50 percent ownership "
                placeholderTextColor="#505050"
                multiline={true}
                numberOfLines={4}
              />
              <View style={[styles.TextInputView]}>
                <Text style={[styles.TextInputLabel, { width: 70 }]} >Description</Text>

              </View>
            </View>
            <View style={styles.textInput}>
              <InputText
              value={businessNo}
                onChangeText={(text) => { console.log('text', text) }}
                placeholder="+91 9123456789"
                placeholderTextColor="#505050"
              />
              <View style={styles.TextInputView}>
                <Text style={[styles.TextInputLabel, { width: 100 }]} >Business Number</Text>

              </View>
            </View>
            <View style={[styles.textInput,]}>
              <InputText
              value={businessType}
                onChangeText={(text) => { console.log('text', text) }}
                placeholder="Corporation"
                placeholderTextColor="#505050"
              />
              <View style={styles.TextInputView}>
                <Text style={[styles.TextInputLabel, { width: 85 }]} >Business Type</Text>

              </View>
            </View> 

            <View style={[styles.textInput, { backgroundColor: 'white' }]}>
              <InputText
                value={gstinNumber}
                onChangeText={(text) => { console.log('text', text) }}
                placeholderTextColor="#505050"
                placeholder="Enter GSTIN Number"

              />
             
              <View style={{ position: 'absolute', right: 15, top: 8 }}>
                <TouchableOpacity>
                  <Text style={{ width: 50, color: 'red', fontSize: 15, fontWeight: 'bold' }} >Verify</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text
                style={{ textAlign: "left", fontSize: 18, fontWeight: "500", marginLeft: 20, marginTop: 10, color: 'black', flexDirection: 'row' }}>
                Which of these best describes you?
                <Text style={{ color: 'red' }}> *</Text></Text>

              <RadioForm
                style={{ marginLeft: 20, marginTop: 20 }}
                radio_props={hobbies}
                initial={4}
                onPress={(value) => {
                  setChosenOption(value)
                }}
                buttonSize={10}
                buttonOuterSize={18}
                buttonColor={'black'}
                selectedButtonColor={'red'}
                selectedLabelColor={'black'}
                labelStyle={{ fontSize: 15, }}
                disabled={false}
                formHorizontal={false}
              />

          <TouchableOpacity>
           <LinearGradient
               style={styles.ViewBtn}
             colors={['#A5A3A3', '#B7B7B7']}>
                  <Text style={{ color: '#F0F0F0', fontWeight: "700", fontSize: 18 }}>
                    Change Password
                  </Text>
              </LinearGradient>
              </TouchableOpacity>

              <View style={styles.change}>
              <LinearGradient
              style={{borderRadius:5}}
             colors={['#ED4343', '#A52021']} >
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <View style={styles.changeView}>
                    <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                      Save Details
                    </Text>
                  </View>
                </TouchableOpacity>
                </LinearGradient>

              </View>

            </View>
          </View> 
        
       </ScrollView>
      </>
    )
}

