import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View,  } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputText from '../../../Components/InputText';
import StepIndicator from "react-native-step-indicator";
import images from '../../../Components/images';
import Header from '../../../Components/Header';
import UseOrientation from '../../UseOrientation';
import AppStack from '../../AppStack';

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

const  Fourth=({navigation}) => { 
  
  const onPress = ({navigation}) => {
    navigation.navigate('Home')
  }


  const [visible, setVisible] = useState(true)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
<>
<Header 
 image={images.leftArrow}
 onPress={()=>navigation.navigate('ThirdFile')}
/>
<View style={{backgroundColor:'#fff',paddingTop:5}}>
     <StepIndicator
      customStyles={customStyles}
      currentPosition={3}
      labels={labels}
      stepCount={4}
    />
  </View>
<ScrollView style={{flex:1,backgroundColor:'#fff',top : 5}}>


    <View style={{flex:1,backgroundColor:"#ffffff",height:500}}>
            <View style={{marginTop:20}}>
                <Text style={{marginLeft:20,fontSize:22,fontWeight:"700",color:'black',margin:5,}}>Bank details</Text>
             
             <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Bank Name"
              placeholderTextColor="#505050"
            />
          
          </View>                  
           
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Account Holder Name"
              placeholderTextColor="#505050"
            />
            
          </View>   
          
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Bank Account Number"
              placeholderTextColor="#505050"
            />           
          </View>  

          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="IFSC Number"
              placeholderTextColor="#505050"
            />           
          </View>          
      
            <View>
            <View style={{ flexDirection: "row", marginTop: 10,
          marginLeft:20,justifyContent:'center',marginRight:20
          }}>
                 <CheckBox style={{height:32,}}
                    disabled={false}
                    onCheckColor='red'
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                /> 
              
                <Text style={{ marginTop:7,color:'gray'}}>I have read and agreed to the </Text>
                <Text  style={{ marginTop:7,color:'red'}}>Terms and Conditions</Text>
               
            </View>
              <View style={{alignItems:'center'}}>  
          <TouchableOpacity 
          onPress={()=> toggleCheckBox  ?   navigation.navigate(AppStack): 
            setVisible(visible)
          }
              style={{                 
                backgroundColor:  toggleCheckBox ? '#Ed4343' : '#FF8A8A' ,
                justifyContent:"center",
                width:UseOrientation.width / 1.1,
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
            </View>
        </View>
        </ScrollView>
        </>
  )
}
export default Fourth
const styles = StyleSheet.create({

  InputText : {
    marginLeft : 20,
         marginTop :15,
         borderWidth : 1,
         borderRadius : 8,
         height : 40,
         width : "90%",
         paddingLeft : 20,
         borderColor:"#B7B7B7",
},
text : {
    backgroundColor:"#EFECEC",
    color:"#504E4E",
    fontSize:12,
    borderRadius:10
},
touchable : {

}
})