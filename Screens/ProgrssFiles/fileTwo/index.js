import React, { useState } from 'react'
import { Text, View, ToastAndroid, Image, StyleSheet, ScrollView } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import InputText from '../../../Components/InputText';
import StepIndicator from "react-native-step-indicator";
import style from '../fileOne/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../../Components/images';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../Components/Header'
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
  separatorUnFinishedColor: "#FF5C5C",
  stepIndicatorFinishedColor: "#A52021",
  stepIndicatorUnFinishedColor: "#FF5C5C",
  stepIndicatorCurrentColor: "#A52021",
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: "#A52021",
  stepIndicatorLabelFinishedColor: "#A52021",
  stepIndicatorLabelUnFinishedColor: "#A52021",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "red"
};


const Second = ({ navigation }) => {
  const [visible, setVisible] = useState(false)
  const [chosenOption, setChosenOption] = useState('');
  var hobbies = [
    { label: "Selling is my full-time job", value: 0 },
    { label: "I sell part-time but hope to sell full time", value: 1 },
    { label: "I sell part time and that's how i like it", value: 2 },
    { label: "Others", value: 3 },
  ];
  var business = [
    { label: "I have a GSTIN", value: 0 },
    { label: "I have applied/will apply for GSTIN", value: 1 },

  ];
  {
    return (
      <View style={{flex:1,}}>
        <Header
          image={images.leftArrow}
          onPress={() => navigation.navigate('FileOne')}
        />
        <View style={{ backgroundColor: "#ffffff", paddingTop: 5 }}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={1}
            labels={labels}
            stepCount={4}
          />
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', top: 5, }}> 
          <View style={{
            backgroundColor: "#fff", 
          }}>
            <View style={{ borderTopColor: "black", marginTop: 5 }}>
              <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "700", color: 'black' }}>Store detail</Text>
              <View style={style.InputText}>
                <InputText
                  style={{
                    height: 40,
                    padding: 8,
                    marginRight: 20
                  }}
                  onChangeText={(text) => { console.log('text', text) }}
                  placeholder="Display Name"
                />
                <View style={{ position: 'absolute', right: 20, top: 8 }}>
                  <Text style={{ color: 'red', fontWeight: "bold", height: 50 }}>Verify</Text>
                </View>
              </View>

              <InputText
                placeholder='Description'
                keyboardType='email-address'
                style={style.InputText}
              >
              </InputText>
              <InputText
               keyboardType='phone-pad'
                placeholder='Business Phone Number'
                style={style.InputText}
              >
              </InputText>
              <View style={style.InputText}>
                <InputText
                  style={
                    style.input
                  }
                  onChangeText={(text) => { console.log('text', text) }}
                  placeholder="Confirm Password"
                />

              </View>
            </View>

            <View>
              <Text
                style={{ textAlign: "left", fontSize: 18, fontWeight: "400", marginLeft: 20, marginTop: 10, color: 'black' }}>
                Which of these best describes you?</Text>

              <RadioForm
                style={{ marginLeft: 20, marginTop: 10, }}
                radio_props={hobbies}
                initial={4}
                onPress={(value) => {
                  setChosenOption(value)
                }}
                buttonSize={10}
                buttonOuterSize={18}
                buttonColor={'#3D3B3B'}
                borderWidth={0.2}
                selectedButtonColor={'red'}
                selectedLabelColor={'black'}
                labelStyle={{ fontSize: 13, }}
                disabled={false}
                boxDeactiveBgColor={'#ffffff'}
                formHorizontal={false}
                deactiveColor={"black"}

              />
              <Text
                style={{ textAlign: "left", fontSize: 18, fontWeight: "400", marginLeft: 20, marginTop: 5, color: 'black' }}>
                Business GSTIN </Text>

              {visible ?
                <View >
                  <View>
                    <RadioForm
                      style={{ marginLeft: 20, marginTop: 10, }}
                      radio_props={business}
                      initial={0}
                      onPress={(value) => {
                        setChosenOption(value)
                      }}
                      buttonSize={10}
                      buttonOuterSize={18}
                      buttonColor={'#3D3B3B'}
                      borderWidth={1}
                      selectedButtonColor={'red'}
                      selectedLabelColor={'black'}
                      labelStyle={{ fontSize: 13, color: "#707070" }}
                      disabled={false}
                      boxDeactiveBgColor={'#ffffff'}
                      formHorizontal={false}
                      deactiveColor={"black"}
                    />
                  </View>
                  <View style={style.InputText}>
                    <InputText
                      style={{
                        height: 40,
                        padding: 10,
                        marginRight: 40
                      }}
                      onChangeText={(text) => { console.log('text', text) }}
                      placeholder="Enter GSTIN number"
                    />

                    <View style={{ position: 'absolute', right: 20, top: 8 }}>
                      <Text style={{ color: 'red', fontWeight: "bold" }}>Verify</Text>
                    </View>

                  </View>
                  <View style={styles.change}>
                    <LinearGradient
                      style={{ borderRadius: 5 }}
                      colors={['#ED4343', '#A52021']} >
                      <TouchableOpacity onPress={() => navigation.navigate('ThirdFile')}>
                        <View style={styles.changeView}>
                          <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                            Continue
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>

                </View>
                :
                <View>
                  <View>
                    <RadioForm
                      style={{ marginLeft: 20, marginTop: 5, }}
                      radio_props={business}
                      initial={2}
                      buttonSize={10}
                      buttonOuterSize={18}
                      buttonColor={'#3D3B3B'}
                      borderWidth={1}
                      selectedButtonColor={'red'}
                      selectedLabelColor={'black'}
                      labelStyle={{ fontSize: 13, color: "#707070" }}
                      disabled={false}
                      boxDeactiveBgColor={'#ffffff'}
                      formHorizontal={false}
                      deactiveColor={"black"}
                      onPress={() => {
                        setChosenOption(setVisible(!visible));
                      }}
                    />
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={(value) => {
                        setChosenOption(setVisible(!visible));

                      }}
                      style={{
                        // marginLeft: 20,
                        backgroundColor: '#FF8A8A',
                        justifyContent: "center",
                        width: UseOrientation.width / 1.1,
                        height: 40,
                        borderRadius: 8,
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

          </View>
        </ScrollView>
      </ View>
    )
  }
}

export default Second
const styles = StyleSheet.create({
  change: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,

  },
  changeView: {
    width: UseOrientation.width / 1.2,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
  },
})