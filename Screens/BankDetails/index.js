import React, {useEffect, useState} from 'react'
import { Alert, Dimensions, ScrollView, StyleSheet, Text, View,  } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
 import InputText from '../../Components/InputText';
import StepIndicator from "react-native-step-indicator";
import images, { addFile } from '../../Components/images';
import Header from '../../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { heightToDp } from '../../variable';
import AppStack from '../AppStack';
import UseOrientation from '../UseOrientation';

const  BankDetails=({navigation})=> 
{  


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

  const [bankName,setBankName] = useState(false);
  const [ifsc,setIfsce] = useState(false);
  const [ accNumber, setAccNumber] = useState(false);
  const [bankHolderName, setBankHolderName] = useState(false);

const check = () =>{
 Alert.alert('Check the details','Please ! Fill the required fields first'); 
}
  return (
<>
<Header 
 image={images.leftArrow}
 onPress={()=>navigation.navigate('AppStack')}
/>
<ScrollView style={{backgroundColor:'#fff',}}>
    <View style={{height:heightToDp('100%')}}>    
 
    <View style={{backgroundColor:"#fff",flex:0.99,}}>
            <View style={{ marginTop:'5%',borderStartColor:'#000', flex : 0.07, backgroundColor : '#fff'}}>
              <View style={{}}>

                <Text style={{marginLeft:20,fontSize:22,fontWeight:"700",color:'black',margin:"2%",botom : 30}}>Bank details</Text>
             
              </View>
                <View style={styles.textInput}>
              <InputText
              value = {bankName}
              onChangeText={(text) => setBankName( text) }
              placeholder="HDFC Bank"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:70,}]} >Bank Name *</Text>
            </View>
          </View>                  
           
          <View style={styles.textInput}>
              <InputText
              value={bankHolderName}
              onChangeText={(text) => setBankHolderName( text) }
              placeholder="Nidhi Sanathara"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:120,}]} >Account Holder Name*</Text>
            </View>
          </View>   
          
          <View style={styles.textInput}>
              <InputText
               keyboardType={'numeric'}
              value={accNumber}
              onChangeText={(text) =>  setAccNumber(text) }
              placeholder="1256478963218458"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:125,}]} >Bank Account Number *</Text>
            </View>
          </View>   
          <View style={styles.textInput}>
              <InputText
               keyboardType={'numeric'}
              value={ifsc}
              onChangeText={(text) =>  setIfsce( text) }
              placeholder="12364578965"
              placeholderTextColor="#c9c9c9"
            />
            <View style={styles.TextInputView}>
              <Text style={styles.TextInputLabel} >IFSC Number *</Text>
            </View>
          </View>  
        
{
  bankName == ''|| bankHolderName == '' || ifsc == '' || bankHolderName == '' ? 
  <View style={{justifyContent:"center",alignItems:'center',backgroundColor : '#fff', }}>

    <TouchableOpacity 
    // disabled
    onPress={check}>
          <LinearGradient
                   style={{
                    width : UseOrientation.width  / 1.1,         
                    justifyContent:"center",
                    marginHorizontal : 20,
                    height:"70%",
                    borderRadius:8,
                    alignItems:'center',                    
                    marginBottom : "5%",
                    opacity : 0.6
                }} 
                    colors={['#ED4343', '#A52021']}>
                <Text style={{color:"#ffffff",
                              fontSize:18,
                              fontWeight:"500"}}>Save Details</Text>

</LinearGradient>
              </TouchableOpacity>
</View>
:
<View style={{justifyContent:"center",alignItems:'center',backgroundColor : '#fff'}}>
<TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <LinearGradient
                   style={{
                    width : UseOrientation.width  / 1.1,         
                    justifyContent:"center",
                    marginHorizontal : 20,
                    height:"68%",
                    borderRadius:8,
                    alignItems:'center',
                    // marginTop:20,
                    marginBottom : "6%"
                }} 
                    colors={['#ED4343', '#A52021']} >
 
                <Text style={{color:"#ffffff",
                              fontSize:18,
                              fontWeight:"500"}}>Save Details</Text>

</LinearGradient>
              </TouchableOpacity>
</View>
}
             
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
    // flex : 0.7,
    borderWidth : 1,
    borderColor:'#707070',
    marginHorizontal : 20,
    borderRadius : 5,
    height : '90%',
    paddingLeft : 20,
     marginBottom : 20,
    backgroundColor:'#FFFFFF',
     margin:5,
     top : 5
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

  ContinueBtn : {       
    width:UseOrientation.width  / 1.06,       
    height: "40%",
    borderRadius:7,
    alignItems:'center',      
    justifyContent:'center',      
   marginHorizontal : 20,
}

 

})