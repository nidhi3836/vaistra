import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View,  } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
 import InputText from '../../Components/InputText';
import StepIndicator from "react-native-step-indicator";
import images from '../../Components/images';
import Header from '../../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { heightToDp } from '../../variable';
import AppStack from '../AppStack';

const  BankDetails=({navigation})=> 
{  
  return (
<>
<Header 
 image={images.leftArrow}
 onPress={()=>navigation.navigate('AppStack')}
/>
<ScrollView style={{backgroundColor:'#000',}}>
    <View style={{height:heightToDp('100%')}}>    
 
    <View style={{backgroundColor:"#fff",flex:0.9,}}>
            <View style={{ marginTop:20,borderStartColor:'#000'}}>
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
              
          <LinearGradient
                   style={{
                    marginLeft: 20,                  
                    justifyContent:"center",
                    marginRight: 20,
                    height:40,
                    borderRadius:8,
                    alignItems:'center',
                    marginTop:20,
                }} 
                    colors={['#ED4343', '#A52021']} >
 <TouchableOpacity onPress={()=>navigation.navigate('ForgotPass')}
                  
            >
                <Text style={{color:"#ffffff",
                              fontSize:18,
                              fontWeight:"500"}}>Save Details</Text>

              </TouchableOpacity>

</LinearGradient>
             
            </View>
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
    borderColor:'#707070',
    marginLeft:20,
    marginRight : 20,
 borderRadius : 5,
 height : 40,

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