import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View,  } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputText from '../../../Components/InputText';
import StepIndicator from "react-native-step-indicator";
import images from '../../../Components/images';
import Header from '../../../Components/Header';

const labels = [
  "Seller detail",
    "Store Details",
    "Pick-up Deatils",
    "Bank Details",
];
const customStyles = {
  stepIndicatorSize: 15,
  currentStepIndicatorSize: 19,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#A52021",
  stepStrokeWidth: 3,
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

const  BankDetails=({navigation})=> { 
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
<>
<Header 
 image={images.leftArrow}
 onPress={()=>navigation.navigate('ThirdFile')}
/>
<ScrollView style={{flex:1,backgroundColor:'#fff',top : 5}}>
<View >
     <StepIndicator
      customStyles={customStyles}
      currentPosition={3}
      labels={labels}
      stepCount={4}
    />
  </View>
  <View style={{backgroundColor:'#B7B7B7',height:2}}></View>

    <View style={{flex:1,backgroundColor:"#ffffff",height:500}}>
            <View style={{marginTop:20}}>
                <Text style={{marginLeft:20,fontSize:22,fontWeight:"700",color:'black',margin:5,}}>Bank details</Text>
             
                <View style={styles.textInput}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="HDFC Bank"
              placeholderTextColor="#505050"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:70,}]} >Bank Name</Text>
            </View>
          </View>                  
           
          <View style={styles.textInput}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Nidhi Sanathara"
              placeholderTextColor="#505050"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:115,}]} >Account Holder Name</Text>
            </View>
          </View>   
          
          <View style={styles.textInput}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="1256478963218458"
              placeholderTextColor="#505050"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:120,}]} >Bank Account Number</Text>
            </View>
          </View>   
          <View style={styles.textInput}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="12364578965"
              placeholderTextColor="#505050"
            />
            <View style={styles.TextInputView}>
              <Text style={styles.TextInputLabel} >IFSC Number</Text>
            </View>
          </View>   
              <View style={{ flexDirection: "row", marginTop: 8,}}>
                   <CheckBox style={{height:40,}}
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  /> 
                  <Text style={{ marginTop:7,color:'gray'}}>I have read and agreed to the </Text>
                  <Text  style={{ marginTop:7,color:'red'}}>Terms and Conditions</Text>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('ForgotPass')}
                  style={{
                    marginLeft: 20,
                    backgroundColor: toggleCheckBox ? 'red' : '#FF5C5C',
                    justifyContent:"center",
                    width:350,
                    height:40,
                    borderRadius:8,
                    alignItems:'center',
                    marginTop:20,
                }} 
            >
                <Text style={{color:"#ffffff",
                              fontSize:18,
                              fontWeight:"500"}}>Submit</Text>

              </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </>
  )
}
export default BankDetails
const styles = StyleSheet.create({
  textInput : {
    borderWidth : 1,
    borderTopColor:'#000',
    marginLeft:20,
 borderRadius : 5,
 height : 40,
 width : 350,
 paddingLeft : 20,
 marginBottom : 20,
 backgroundColor:'#FFFFFF',
 margin:5,
 

  },
  TextInputView :{
    justifyContent:'center',
    alignContent:'center',
    position:'absolute',
    left:25,
    top:-15,
    paddingTop:5
  },
  TextInputLabel :{
    padding:0,
     width: 80, 
     color:'red',
     fontSize:10,
     marginBottom:10,
     backgroundColor:'white',
     alignContent:'center',
     paddingLeft:5,
     fontWeight:'500'
  },

 

})