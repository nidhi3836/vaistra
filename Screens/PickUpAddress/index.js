import { Text, View,TextInput,ToastAndroid,Image,StyleSheet, ScrollView } from 'react-native'
import React, {useState } from 'react'
import RadioForm from 'react-native-simple-radio-button'
import InputText from '../../../Components/InputText';
import StepIndicator from "react-native-step-indicator";
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDown from '../../../Components/DropDown';
import images from '../../../Components/images';

let states = [
  {
    id : 1,
    name : "Gujrat"
  },
  {
    id : 2,
    name : "hariyana"
  },
  {
    id : 3,
    name : "maharastra"
  },
  {
    id : 4,
    name : "Uttar Pradesh"
  },
]
let cities = [
  {
    id : 1,
    name : "Pobandar"
  },
  {
    id : 2,
    name : "Rajkot"
  },
  {
    id : 3,
    name : "Ahamdabad"
  },
  {
    id : 4,
    name : "junagadh"
  },
]

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
  currentStepLabelColor: "#A52021"
};


const PickUpAddress = ({navigation}) => {

  const [state, setState] = useState(null)
  const [city, setCity] = useState(null)
const OnSelect = (item) => {
  setState(item)
}

const OnCity = (item) => {
  setCity(item)
}

    var business = [
        {label: "Want to add Bank details", value:0},
        {label: "Skip Bank details", value: 1},
      ];
    return (
<>
        <ScrollView style={{flex:1}}>
      <View style={{flex:1}}>
      <StepIndicator
      customStyles={customStyles}
      currentPosition={2}
      labels={labels}
      stepCount={4}
    />
      </View>
        <View style={{flex:1,backgroundColor:"#fff",borderColor:"red"}}>       

        <Text style={{marginLeft:20,fontSize:22,fontWeight:"700",color:"black"}}>
          Pick up Address</Text>
        <View style={[styles.InputText,{paddingLeft:30}]}>
                    <InputText
                        style={
                           {height: 40,
                            padding: 10,   
                             marginRight:40,}
                        }
                        onChangeText={(text) => { console.log('text', text) }}
                       // value={newPass}
                        placeholder="Use my Current Location"
                        placeholderTextColor="red"
                      
                    />
                    <View style={{position:'absolute', top:10,marginLeft:10}}>
                        <Image source={images.accurate}
                            style={{ height: 20, width: 23 }} />
                    </View>
                </View>   
              
                <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Vagheshwari Plot, Porbandar"
              placeholderTextColor="#505050"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:50,}]} >Address</Text>
            </View>
          </View>

          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Devdarshan Apatment, porbandar"
              placeholderTextColor="#505050"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:85,}]} >Locality/ Town</Text>
            </View>
          </View>
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Near Jay Hospital"
              placeholderTextColor="#505050"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:119,}]} >Near By famous Place</Text>
            </View>
          </View>
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="360575"
              placeholderTextColor="#505050"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:55,}]} >Pin Code</Text>
            </View>
           
          </View>

            <View>
            <DropDown  style={[styles.InputText,{marginRight:50,}]}
                title={'select State *'}
                subTitle={'Search Selected Brand'}
                value={state}
                data={states}
                onSelect={OnSelect}
            /> 
              </View>            
          <View style={{marginTop:20,}}>
          
          <DropDown  style={[styles.InputText]}
                title={'select City *'}
                subTitle={'Search City'}
                value={city}
                data={cities}
                onSelect={OnCity}
            /> 
           
          </View>
            <RadioForm 
             style={{marginLeft:20,marginTop:8,color:'black'}}
             radio_props={business}
             initial={2}
             onPress={(value) => {ToastAndroid.show(value.toString(), ToastAndroid.SHORT)}}
             buttonSize={10}
             buttonOuterSize={18}
             buttonColor={'#3D3B3B'}
             borderWidth={0.2}
             selectedButtonColor={'red'}
             selectedLabelColor={'black'}
             labelStyle={{fontSize: 13,color:"#707070"}}
             disabled={false}
             boxDeactiveBgColor={'#ffffff'}
             formHorizontal={false}
             deactiveColor={"black"}
        />
              </View>
              <View >
              <TouchableOpacity 
         onPress={()=>navigation.navigate('Fourth')}
                  style={{
                    marginLeft: 20,
                    backgroundColor: '#ED4343' ,
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
                              fontWeight:"500"}}>Continue</Text>

              </TouchableOpacity>
            </View>
        
         </ScrollView>
         </>
    )
  }

export default PickUpAddress
 
const styles = StyleSheet.create({

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

  InputText : {
    marginLeft : 20,
         marginTop :15,
         borderWidth : 1,
         borderRadius : 8,
         height : 40,
         width : "90%",
         paddingLeft : 20,
         borderColor:"#707070",
},
text : {
    backgroundColor:"#EFECEC",
    color:"#504E4E",
    fontSize:12,
    borderRadius:10
}
})