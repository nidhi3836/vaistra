import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import images from '../../Components/images'
import AddVarient from './AddVarient'
import { ScrollView } from 'react-native-gesture-handler'
import { heightToDp } from '../../variable'
import UseOrientation from '../UseOrientation'
import InputText from '../../Components/InputText'
import LinearGradient from 'react-native-linear-gradient'
import EMIProduct from './EMIProduct'

export default function AdditionalDetail({navigation}) {

    const [localCharge, setLocalCharge] = useState(false)
    const [ZonalCharge, setZonalCharge] = useState(false)
    const [packer, setPacker] = useState(false)
    const [origin, setOrigin] = useState(false)
    const [Manufacturer, setManufacturer] = useState(false)
  return (
    <View>
     <Header 
     image={images.left}
     onPress={()=> navigation.navigate('AddVarient')}
     />
     <ScrollView>
        <View  style={{height : heightToDp('100%'), backgroundColor : '#fff'}}>
        <View style={{flex : 0.05, marginLeft : 20, margin: 20,marginRight : 20 }}>
            <Text style={{color:'#000', fontSize : 20, fontWeight : '500', }}>
                Additional Details
            </Text>
        </View>

        <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={localCharge}
                    onChangeText={(text) => {setLocalCharge(text) }}
                    placeholder="Enater Local Delivery Charge"
                    placeholderTextColor="#505050" />
               
            </View>
            <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={ZonalCharge}
                    onChangeText={(text) => {setZonalCharge(text) }}
                    placeholder="Enater Zonal Delivery Charge"
                    placeholderTextColor="#505050" />
               
            </View>
            <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={packer}
                    onChangeText={(text) => {setPacker(text) }}
                    placeholder="Enater Packer details"
                    placeholderTextColor="#505050" />
               
            </View>
            <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={origin}
                    onChangeText={(text) => {setOrigin(text) }}
                    placeholder="Country of Origin"
                    placeholderTextColor="#505050" />
               
            </View>
            <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={Manufacturer}
                    onChangeText={(text) => {setManufacturer(text) }}
                    placeholder="Enter Manufacturer detail"
                    placeholderTextColor="#505050" />
               
            </View>

            <TouchableOpacity onPress={()=>       
                navigation.navigate('EMIProduct')                 
              }
       >
    <View style={styles.change}>
                  <LinearGradient
                    style={{ borderRadius: 5 }}
                    colors={['#ED4343', '#A52021']} >
                   <View style={styles.changeView}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                          Next
                        </Text>
                      </View>
                  
                  </LinearGradient>
                </View>
                </TouchableOpacity>
        </View>
     </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({

    textInput: {
        top : 5,
        borderRadius: 5,
        backgroundColor: '#f6f6f6',
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#B7B7B7',
        marginBottom: 16,
        // height: 43,
         flex:0.065,
        // justifyContent:'center',
        paddingLeft: 20, 
        // marginTop : 10
    },
    change : {
        // height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
         marginBottom : 10
    },
    changeView : {
      width: UseOrientation.width/ 1.14,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginLeft: 10,
      marginRight: 10,
    }
})