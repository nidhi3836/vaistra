import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import images from '../../Components/images'
import { heightToDp } from '../../variable'
import UseOrientation from '../UseOrientation'
import InputText from '../../Components/InputText'
import Ripple from 'react-native-material-ripple'
import LinearGradient from 'react-native-linear-gradient'
import AdditionalDetail from './AdditionalDetail'
import ProductDetails from '.'

export default function AddVarient({navigation}) {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState(false)
    const [key, setKey] = useState(false)
    const [jeans, setJeans] = useState(false)
  return (
    <View>
     <Header 
     image={images.left}
     onPress={()=> navigation.navigate(ProductDetails)}
     />
     <View style={{height : heightToDp('100%'), backgroundColor : '#fff'}}>
        <View style={{flex : 0.05, marginLeft : 20, margin: 20,marginRight : 20 }}>
            <Text style={{color:'#000', fontSize : 20, fontWeight : '500', }}>
                Add Varients
            </Text>
        </View>

        {visible ?
        <>
       

     
       <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={key}
                    onChangeText={(text) => {setKey(text) }}
                    placeholder="Product Key"
                    placeholderTextColor="#505050" />
               
            </View>
                <View style={[styles.textInput,
                    {justifyContent :'space-between',flexDirection:'row',
                    alignItems:'center'}]}>
                        <InputText
                             value={value}
                          onChangeText={(text) => {setValue(text) }}
                            placeholder="Product Value"
                            placeholderTextColor="#505050" />
                   {/* <Ripple
                   onPress={()=> setVisible(!visible) }
                   >
                    <Image
                    style={{height:28,}}
                    resizeMode='contain'
                    source={images.plus}/>
                    </Ripple>     */}
              </View> 
              <View style={[styles.textInput,
                    {justifyContent :'space-between',flexDirection:'row',
                    alignItems:'center'}]}>
                        <InputText
                            value={value}
                            onChangeText={(text) => {setValue(text) }}
                            placeholder="Product Value"
                            placeholderTextColor="#505050" />
                   <Ripple
                   onPress={()=> setVisible(!visible) }
                   >
                    <Image
                    style={{height:28,}}
                    resizeMode='contain'
                    source={images.plus}/>
                    </Ripple>    
              </View>
        </>
        :
        <>
        <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={key}
                    onChangeText={(text) => {setKey(text) }}
                    placeholder="Product Key"
                    placeholderTextColor="#505050" />
               
            </View>
                <View style={[styles.textInput,
                    {justifyContent :'space-between',flexDirection:'row',
                    alignItems:'center'}]}>
                        <InputText
                            value={value}
                            onChangeText={(text) => {setValue(text) }}
                            placeholder="Product Value"
                            placeholderTextColor="#505050" />
                   <Ripple
                   onPress={()=> setVisible(!visible) }
                   >
                    <Image
                    style={{height:28,}}
                    resizeMode='contain'
                    source={images.plus}/>
                    </Ripple>    
              </View> 
              </>       
                }  
                
                <TouchableOpacity onPress={()=>       
                navigation.navigate(AdditionalDetail) 
                
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