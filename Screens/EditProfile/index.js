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

  const handleCheckEmail = (text) => {
    // 
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    setMobile(text);
    if (re.test(text) || regex.test(text)) {
      setEmail(false);
      setMobile(false);
    }
    else {
      setEmail(true);
      setMobile(true);
    }
    // Keyboard.dismiss();
  };

  // const gstiNum = (gstinNumber) => {
  //   if(gstinNumber.length > 8){
  //     setGstinNumber(true)
  //   }
  //   return false
  // }

  return (
    <>
      <Header
        image={images.left}
        onPress={() => navigation.navigate('AppStack')}
        title='Edit Profile'
      />
      <ScrollView style={{}}>
        <View style={styles.view}>
          <ImageBackground
            style={{
              alignItems: 'center', 
              justifyContent: 'center',
              width: "100%",
               height: UseOrientation.height 
            }}
            resizeMode='contain'
            blurRadius={5}
            source={images.background}
          >
            <Image
              style={{
                position: 'absolute',
                width: UseOrientation.width / 3,
                height: UseOrientation.height / 7,
              }}
              resizeMode="contain"
              source={images.photo}
            />
            <TouchableOpacity >

              <Image
                source={images.pen}
                resizeMode='contain'
                style={{
                  position: 'absolute',
                  width: UseOrientation.width / 4,
                  height: UseOrientation.height / 24,
                  left: "-1%",
                  top: 15,
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={{
          backgroundColor: '#fff',
          justifyContent: 'center'
        }}>
          <View style={{ paddingTop: 10 }}>
            <Text
              style={styles.label}>
              Person Information</Text>
          </View>
          <View style={[styles.textInput,{}]
          }>
            <InputText
              keyboardType={'numeric'}
              value={mobile}
              onChangeText={(text) => { handleCheckEmail(text, mobile) }}
              placeholder="+91 9123456789"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel, { width: 85 }]} >Mobile Number</Text>
            </View>
          </View>
          <View style={styles.textInput}>
            <InputText
              keyboardType={'email-address'}
              value={email}
              onChangeText={(text) => { handleCheckEmail(text, email) }}
              placeholder="abc@gmail.com"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={styles.TextInputLabel} >Email Address</Text>
            </View>
          </View>
          <View style={styles.textInput}>
            <InputText
              value={name}
              onChangeText={(text) => { setName(text) }}
              placeholder="Zyan Malik"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel, { width: 60 }]} >Full Name</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text
              style={styles.label}>
              Business Information</Text>
          </View>
          <View style={styles.textInput}>
            <InputText
              value={display}
              onChangeText={(text) => { setDisplay(text) }}
              placeholder="Sangam"
              placeholderTextColor="#c9c9c9"
            />

            <View style={styles.TextInputView}>
              <Text style={styles.TextInputLabel} >Display Name</Text>

            </View>
          </View>
          <View style={{
            borderRadius: 5,
            backgroundColor: '#F6F6F6',
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: '#B7B7B7',
            marginBottom: 10,
            height: UseOrientation.height / 6,            
            paddingHorizontal : 20,
          }}>
            <InputText

              value={description}
              onChangeText={(text) => { setDescription(text) }}
              placeholder="The business will ne retail sales of urban clothing and associated.Nancy seymour will hold 50 percent ownership and joanne Arbor will also hold 50 percent ownership "
              placeholderTextColor="#c9c9c9"
              multiline={true}
              numberOfLines={5}
            />
            <View style={[styles.TextInputView]}>
              <Text style={[styles.TextInputLabel, { width: 70 }]} >Description</Text>
            </View>
          </View>
          <View style={styles.textInput}>
            <InputText
              keyboardType={'numeric'}
              value={businessNo}
              onChangeText={(text) => { setBusinessNo(text) }}
              placeholder="+91 9123456789"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel, { width: 100 }]} >Business Number</Text>

            </View>
          </View>
          <View style={[styles.textInput,]}>
            <InputText
              value={businessType}
              onChangeText={(text) => { setBusinessType(text) }}
              placeholder="Corporation"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel, { width: 85 }]} >Business Type</Text>
            </View>
          </View>

          <View style={[styles.textInput, { backgroundColor: 'white' }]}>
            <InputText
               keyboardType={'numeric'}
              value={gstinNumber}
              onChangeText={(text) => { setGstinNumber(text) }}
              placeholderTextColor="#c9c9c9"
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

            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePassword')}
            >
              <LinearGradient
                style={styles.ViewBtn}
                colors={['#A5A3A3', '#B7B7B7']}>
                <Text style={{ color: '#F0F0F0', fontWeight: "700", fontSize: 18 }}>
                  Change Password
                </Text>
              </LinearGradient>
            </TouchableOpacity>


{mobile == '' || email == '' || name == '' || display == '' || description == '' || businessNo == ''
|| businessType == '' || gstinNumber == ''
?
  
    <TouchableOpacity style={[styles.change,{opacity:0.7}]}
                disabled
                // onPress={handleCheckEmail}
                >
              <LinearGradient
                style={{ borderRadius: 5 }}
                colors={['#ED4343', '#A52021']} >
                
                  <View style={[styles.changeView,]}>
                    <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                      Save Details
                    </Text>
                  </View>
              </LinearGradient>
                </TouchableOpacity>
           
            :
            
              <TouchableOpacity
              style={styles.change}
              onPress={() => navigation.navigate('Login')}>
              <LinearGradient
                style={{ borderRadius: 5 }}
                colors={['#ED4343', '#A52021']} >
                  <View style={styles.changeView}>
                    <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                      Save Details
                    </Text>
                  </View>
              </LinearGradient>
                </TouchableOpacity>

           

}

            

          </View>
        </View>

      </ScrollView>
    </>
  )
}


