import { Text, View, TextInput, ToastAndroid, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import RadioForm from 'react-native-simple-radio-button'
import InputText from '../../../Components/InputText';
import StepIndicator from "react-native-step-indicator";
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDown from '../../../Components/DropDown';
import images from '../../../Components/images';
import Header from '../../../Components/Header';
import UseOrientation from '../../UseOrientation';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import { heightToDp } from '../../../variable';
import { width } from 'react-native-dimension';



let states = [
  {
    id: 1,
    name: "Gujrat"
  },
  {
    id: 2,
    name: "hariyana"
  },
  {
    id: 3,
    name: "maharastra"
  },
  {
    id: 4,
    name: "Uttar Pradesh"
  },
]
let cities = [
  {
    id: 1,
    name: "Pobandar"
  },
  {
    id: 2,
    name: "Rajkot"
  },
  {
    id: 3,
    name: "Ahamdabad"
  },
  {
    id: 4,
    name: "junagadh"
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
const ThirdFile = ({ navigation }) => {
  
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [visible, setVisible] = useState(false);

  const [chosenOption, setChosenOption] = useState('');

  const [state, setState] = useState(null)
  const [city, setCity] = useState(null)
  const OnSelect = (item) => {
    setState(item)
  }

  const OnCity = (item) => {
    setCity(item)
  }

  var business = [
    { label: "Want to add Bank details", value: 0 },
    { label: "Skip Bank details", value: 1 },
  ];
  return (
    <>
      <Header
        image={images.leftArrow}
        onPress={() => navigation.navigate('Second')}
      />

      <View style={{paddingTop:5,backgroundColor: '#fff',}}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={2}
          labels={labels}
          stepCount={4}
        />
      </View>
    
      <ScrollView style={{ flex: 1, backgroundColor: '#fff', top: 5,}}>
        
        <View style={{  backgroundColor: "#fff", borderColor: "red",
        top:15,}}>

          <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "700", color: "black", }}>
            Pick up Address</Text>
          <View style={[styles.InputText, { paddingLeft: 30 , borderColor:'#Ed4343'}]}>
            <InputText
              style={
                {
                  height: 40,
                  padding: 10,
                  marginRight: 40,
                }
              }
              onChangeText={(text) => { console.log('text', text) }}
              // value={newPass}
              placeholder="Use my Current Location"
              placeholderTextColor="red"

            />
            <View style={{ position: 'absolute', top: 10, marginLeft: 10 }}>
              <Image source={images.accurate}
              resizeMode='contain'
                style={{ height: 20, width: 25 }} />
            </View>
          </View>

          <Dropdown
           style={[styles.InputText,{width:UseOrientation.width /1.1, }]}
            //  placeholderStyle={styles.dropdown}
           selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            
           iconStyle={styles.iconStyle}   
           icon = {images.search}        
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : 'search itme'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(false)}
          // onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
         
          >
           {/* {isFocus ?
           <Image
           style={{ width: 30, height: 23 }}
           source={images.search} />
           :
           <Image source={images.rightArrow} />            
            } */}
          </Dropdown>

          <View style={styles.InputText}>
            <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Vagheshwari Plot, Porbandar"
              placeholderTextColor="#505050"
            />

          </View>

          <View style={styles.InputText}>
            <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Devdarshan Apartment, porbandar"
              placeholderTextColor="#505050"
            />

          </View>
          <View style={styles.InputText}>
            <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Near Jay Hospital"
              placeholderTextColor="#505050"
            />

          </View>
          <View style={styles.InputText}>
            <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="360575"
              placeholderTextColor="#505050"
            />

          </View> 

          {/* <View style={{ marginTop: 20, height:50, }}>
            <DropDown style={[styles.InputText, { marginRight: 100, position:'absolute',}]}
              title={'select State *'}
              subTitle={'Search Selected Brand'}
              value={state}
              data={states}
              onSelect={OnSelect}
              onPress={visible}
             
              
            />
          </View>
          <View style={{ marginTop: 10,height:50}}>

            <DropDown style={[styles.InputText, {position:'absolute',}]}
          
              title={'select City *'}
              subTitle={'Search City'}
              value={city}
              data={cities}
              onSelect={OnCity}
            //  onBlur={() => focus}
            />

          </View> */}

<Dropdown
           style={[styles.InputText, ]}
            // placeholderStyle={styles.InputText}
           selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}            
           iconStyle={styles.iconStyle}   
           icon = {images.search}        
          data={data}
          search         
          maxHeight={100}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : 'search itme'}
          searchPlaceholder="Search..."
          value={value}
          //  onFocus={() => setIsFocus(true)}
           onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        
          />
          <RadioForm
            style={{ marginLeft: 20, marginTop: 30, color: 'black', }}
            radio_props={business}
            initial={0}
            onPress={(value) => {
              setChosenOption(value)
            }}
            buttonSize={10}
            buttonOuterSize={18}
            buttonColor={'#3D3B3B'}
            borderWidth={0.2}
            selectedButtonColor={'red'}
            selectedLabelColor={'black'}
            labelStyle={{ fontSize: 13, color: "#707070" }}
            disabled={false}
            boxDeactiveBgColor={'#ffffff'}
            formHorizontal={false}
            deactiveColor={"black"}
          />
        </View>
       
        <View style={{ alignItems: 'center' }}>
       
          <TouchableOpacity
            onPress={() => navigation.navigate('Fourth')}
            style={{
              backgroundColor:'#ED4343',
              justifyContent: "center",
              width: UseOrientation.width / 1.1,
              height: 40,
              alignItems: 'center',           
             borderRadius: 5,
             marginTop:10 

            }}
          >
            <Text style={{
              color: "#ffffff",
              fontSize: 18,
              fontWeight: "500"
            }}>Continue</Text>

          </TouchableOpacity>
        
        </View>

      </ScrollView>
    </>
  )
}

export default ThirdFile

const styles = StyleSheet.create({
  InputText: {   
   marginTop: 15,
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    width:"90%",
    paddingLeft: 20,
    borderColor: "#B7B7B7",
    alignSelf: "center",
  },
  text: {
    backgroundColor: "#EFECEC",
    color: "#504E4E",
    fontSize: 12,
    borderRadius: 10
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    // width:UseOrientation.width
  },
  icon: {
    marginRight: 50,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 5,
     zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 25,
    height: 22,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
}
)