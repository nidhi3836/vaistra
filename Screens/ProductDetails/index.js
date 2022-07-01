import { View, Text, ScrollView, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import images from '../../Components/images'
import UseOrientation from '../UseOrientation'
import InputText from '../../Components/InputText'
import DropDown from '../../Components/DropDown'
import LinearGradient from 'react-native-linear-gradient'
import AddVarient from './AddVarient'
import { RadioButtonInput } from 'react-native-simple-radio-button'
import AddImage from './AddImage'

export default function ProductDetails({navigation}) {

let data = [

]

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
    const [kids, setKids] = useState(false)
    const [cloth, setCloth] = useState(false)
    const [jeans, setJeans] = useState(false)
    const [Stock, setStock] = useState(false)
    const [max, setMax] = useState(false)
    const [min, setMin] = useState(false)
    const [video, setVideo] = useState(false)
    const [mrp, setMrp] = useState(false)
    const [Price, setPrice] = useState(false);
    
    const [discount, setDiscount] = useState(false)
    const [offer, setOffer] = useState(false)
    const [tax, setTax] = useState(false)
    const [offerDetail, setOfferDetail] = useState(false);

    return (
        <View>
            <Header
                image={images.left}
                onPress={()=>navigation.navigate('AppStack')}
            />
            <ScrollView>
                <View style={{ height: orientations != 'landscape' ? UseOrientation.height * 2 : UseOrientation.height * 3, }}>
                    <View style={{ flex: 0.025, marginLeft :20, marginRight : 10, padding : 10, marginBottom : 10}}>
                      <Text style ={{fontSize : 19, color : '#000',fontWeight : '500'}}>Add Product Details *</Text>  
                    </View>

                    <View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={kids}
                            onChangeText={(text) => {setKids(text) }}
                            placeholder="Kids"
                            placeholderTextColor="#505050" />
                       
                    </View>

                    <View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={cloth}
                            onChangeText={(text) => {setCloth(text) }}
                            placeholder="Cloth"
                            placeholderTextColor="#505050" />
                       
                    </View>

                    <View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={jeans}
                            onChangeText={(text) => {setJeans(text) }}
                            placeholder="Jeans"
                            placeholderTextColor="#505050" />
                       
                    </View>

                    <View style={[styles.textInput,
                    {flex : 0.09}]}>
                        <InputText
                            
                            value={jeans}
                            onChangeText={(text) => {setJeans(text) }}
                            placeholder="Product Description"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    {/* <DropDown 
                    
                    /> */}
                   < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={Stock}
                            onChangeText={(text) => {setStock(text) }}
                            placeholder="Stock"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={max}
                            onChangeText={(text) => {setMax(text) }}
                            placeholder="Maximum Order Value"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={min}
                            onChangeText={(text) => {setMin(text) }}
                            placeholder="Minimum Order Value"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    <View style={{ flex: 0.025, backgroundColor : '#fff', marginLeft :20, marginRight : 10, padding : 10}}>
                      <Text style ={{fontSize : 19, color : '#000',fontWeight : '500'}}>Media (0/5)</Text>  
                    </View>
                    
                        
                        <View style={{ flex: 0.055, backgroundColor : '#fff', marginLeft :20, marginRight : 10, padding : 10, flexDirection:'row',justifyContent :'space-around', marginTop : 20}}>
                        <View style={{flex:0.22, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5'
                    }}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>AddProduct Image *</Text>
                        </View>
                        <View style={{flex:0.22, marginLeft : 10, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5'}}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>AddProduct Image *</Text>
                        </View>
                        <View style={{flex:0.22, marginLeft : 10, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5'}}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>AddProduct Image *</Text>
                        </View>
                        <View style={{flex:0.22, marginLeft : 10, justifyContent : 'center',alignItems:'center',borderWidth : 1,
                    borderColor : '#d5d5d5'}}>
                            <Image 
                            source={images.camera}                     
                            />
                            <Text style={{fontSize : 8,textAlign :'center'}}>AddProduct Image *</Text>
                        </View>
                    </View>
                       <TouchableOpacity 
                       onPress={ ()=> navigation.navigate('AddImage')}
                       style={[styles.textInput,
                    {marginTop :5}]}>
                    < View>
                        <InputText
                            value={video}
                            onChangeText={(text) => {setVideo(text) }}
                            placeholder="Product Video Link"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    </TouchableOpacity>
                    <View style={{ flex: 0.028,  marginLeft :20, marginRight : 10, padding : 10}}>
                      <Text style ={{fontSize : 19, color : '#000',fontWeight : '500'}}>Product Price, Discount etc</Text>  
                    </View>


                    < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={mrp}
                            onChangeText={(text) => {setMrp(text) }}
                            placeholder="MRP *"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={Price}
                            onChangeText={(text) => {setPrice(text) }}
                            placeholder="Your Selling Price *"
                            placeholderTextColor="#505050" />
                       
                    </View>
                     {/* <DropDown /> */}
                    
                     < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={Price}
                            onChangeText={(text) => {setPrice(text) }}
                            placeholder="Your Selling Price *"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={discount}
                            onChangeText={(text) => {setDiscount(text) }}
                            placeholder="Discount %"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={offerDetail}
                            onChangeText={(text) => {setOfferDetail(text) }}
                            placeholder="Offer Details"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={offer}
                            onChangeText={(text) => {setOffer(text) }}
                            placeholder="Offer Price or Percentage"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    < View style={[styles.textInput,
                    {}]}>
                        <InputText
                            value={tax}
                            onChangeText={(text) => {setTax(text) }}
                            placeholder="Product Tax"
                            placeholderTextColor="#505050" />
                       
                    </View>
                    <TouchableOpacity onPress={()=>       
                navigation.navigate('AddVarient') 
                
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
        borderRadius: 5,
        backgroundColor: '#f6f6f6',
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#B7B7B7',
        marginBottom: 16,
        // height: 43,
         flex:0.0383,
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
      width: UseOrientation.width/ 1.1,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginLeft: 10,
      marginRight: 10,
    }
})