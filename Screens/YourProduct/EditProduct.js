import { View, Text, ScrollView, Dimensions, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import images from '../../Components/images'
import Product from './product'
import UseOrientation from '../UseOrientation'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InputText from '../../Components/InputText'
import Ripple from 'react-native-material-ripple'
import AddVarient from '../ProductDetails/AddVarient'
import EditVarients from '../ProductDetails/EditVarients'
import LinearGradient from 'react-native-linear-gradient'

export default function EditProduct({navigation}) {

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
// DropDown Variable
  const [kids, setKids] = useState([]);
  const [cloth, setCloth] = useState([]);
  const [jeans, setJeans] = useState([]);
  const [colors, setColors] = useState([]);
  const [active, setActive] = useState([]);


  
    useEffect(() => {
    setTimeout(() => {
      setKids([
        {title: '0-5 month baby', kids: [{title: '0-5 month baby'}, ]},
        {title: '6-12 month baby', kids: [{title: '6-12 month baby'}, ]},
        {title: '1-3 year baby ', kids: [{title: '1-3 year baby'}, ]},
        
      ]);
    }, 1000);
  }, []);

  useEffect(() => {
      setTimeout(() => {
        setCloth([
          {title: 'Cloth 1', cloth: [{title: 'Cloth 1'}, ]},
          {title: 'Cloth 2', cloth: [{title: 'Cloth 2'}, ]},
          {title: 'Cloth 3', cloth: [{title: 'Cloth 3'}, ]},
          
        ]);
      }, 1000);
    }, []);

    useEffect(() => {
      setTimeout(() => {
        setJeans([
          {title: 'Man', jeans: [{title: 'Man'}, ]},
          {title: 'Women', jeans: [{title: 'Women'}, ]},
          {title: 'Kids ', jeans: [{title: 'Kids'}, ]},
          
        ]);
      }, 1000);
    }, []);

    useEffect(() => {
      setTimeout(() => {
        setColors([
          {title: 'Green', colors: [{title: 'Green'}, {subTitle : 'add'} ]},
          {title: 'Yellow', colors: [{title: 'Yellow'}, ]},
          {title: 'Black ', colors: [{title: 'Black'}, ]},
          
        ]);
      }, 1000);
    }, []);

    useEffect(() => {
      setTimeout(() => {
        setActive([
         
          {title: 'Active', active: [{title: 'Active'}, ]},
          {title: 'Inavtive ', active: [{title: 'Inavtive'}, ]},
          
        ]);
      }, 1000);
    }, []);

  const inputs = Array(4).fill('');
  return (
    <View>
       
      <Header 
      image={ images.left}
      onPress ={()=> navigation.navigate('Product')}
      title={'Edit Product'}
      image2={images.trash}
      />
      <ScrollView>
        <View style={{height:orientations !='landscape' ? UseOrientation.height * 2.55:  UseOrientation.height * 3,backgroundColor : 
 "#fff", }}>

<View style={{ flex:0.03, margin : 10, justifyContent : 'space-between',
marginBottom : 5,
}}>
          
      {/* <StatusBar backgroundColor="#FFF" barStyle="dark-content" /> */}
      <View style={styles.viewContainer}>
      
        <View        
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={kids}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                // citiesDropdownRef.current.reset();
                setKids([]);
                setKids(selectedItem.kids);
              }}
             defaultButtonText={'Kids'}
            
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return  <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={15} />
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            >
            </SelectDropdown>
          
           
          </View>
        </View>
      </View>
    
    
    </View>

    <View style={{ flex:0.03, margin : 10, backgroundColor : 
 "#fff", }}>
          
      <StatusBar 
      hidden
      backgroundColor="#FFF"  />
      <View style={styles.viewContainer}>
      
        <View        
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={cloth}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                // citiesDropdownRef.current.reset();
                setCloth([]);
                setCloth(selectedItem.cloth);
              }}
             defaultButtonText={'Cloth'
             }
            
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return  <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={15} />
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            >
            </SelectDropdown>
          
           
          </View>
        </View>
      </View>
    
    
    </View>

    <View style={{ flex:0.03, margin : 10, justifyContent : 'space-between', backgroundColor : 
 "#fff",}}>
          
      <StatusBar 
      hidden
      backgroundColor="#FFF"  />
      <View style={styles.viewContainer}>
      
        <View        
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={jeans}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                // citiesDropdownRef.current.reset();
                setJeans([]);
                setJeans(selectedItem.jeans);
              }}
             defaultButtonText={'Jeans'
             }
            
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return  <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={15} />
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            >
            </SelectDropdown>
          
           
          </View>
        </View>
      </View>
    
    
    </View>

    <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Sassaras"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:90,}]} >Product Name</Text>
            </View>
          </View>

          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Black Blazer Dress"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:120,}]} >Product Description</Text>
            </View>
          </View>

          <View style={{ flex:0.03, margin : 10,  backgroundColor : 
 "#fff", }}>
          
      <StatusBar 
      hidden
      backgroundColor="#FFF"  />
      <View style={styles.viewContainer}>
      
        <View        
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={colors}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                // citiesDropdownRef.current.reset();
                setColors([]);
                setColors(selectedItem.colors);
              }}
             defaultButtonText={'Green, Yellow'
             }
             defaultButtonTextStyle={{marginRight : 100}}
            
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return  <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={15} />
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            >
            </SelectDropdown>          
           
          </View>
        </View>
      </View>
    
    
    </View>

    <View style={styles.InputText}>
              <InputText               
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="25"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:40,}]} >Stock</Text>
            </View>
          </View>
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="2"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:83,}]} >Minimum Order</Text>
            </View>
          </View>
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="9"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:90,}]} >Maximum Order</Text>
            </View>
          </View>

         

    <View style={{flex : 0.06,  margin : 10,
  flexDirection:'row', justifyContent : 'space-around'
  }}>
              <View style={{flex : 0.2,margin : 10,
            alignItems : 'center', justifyContent : 'center'
            }}>
            <Image source={images.Group3688}/>
              </View>
              <View style={{flex : 0.2,margin : 10,
            alignItems : 'center', justifyContent : 'center'
            }}>
            <Image source={images.Group3689}/>
              </View>
              <View style={{flex : 0.2,margin : 10,
            alignItems : 'center', justifyContent : 'center'
            }}>
            <Image source={images.Group3690}/>
              </View>
              <View style={{flex : 0.2,margin : 10,
            alignItems : 'center', justifyContent : 'center'
            }}>
            <Image source={images.Group3688}/>
              </View>

          </View>

          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="&#8377; 800.00"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:30,}]} >MRP</Text>
            </View>
          </View>
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="&#8377; 800.00"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:100,}]} >Your Selling Price</Text>
            </View>
          </View>
          <View style={{ flex:0.03, margin : 10,  backgroundColor : 
 "#fff", }}>
          
      <StatusBar 
      hidden
      backgroundColor="#FFF"  />
      <View style={styles.viewContainer}>
      
        <View        
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={active}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                // citiesDropdownRef.current.reset();
                setActive([]);
                setActive(selectedItem.active);
              }}
             defaultButtonText={'Active'
             }
             defaultButtonTextStyle={{marginRight : 100}}
            
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return  <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={15} />
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            >
            </SelectDropdown>          
           
          </View>
        </View>
      </View>
    
    
    </View>

    <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="20%"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:50,}]} >Discount</Text>
            </View>
          </View>

          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Bank Offer 5% unlimited cashback on Axis Bank Credit Card"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:65,}]} >Offer Detail</Text>
            </View>
          </View>
          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="5% "
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:135,}]} >Offer Price of Percentage</Text>
            </View>
          </View>

          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="10 "
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:65,}]} >Product Tax</Text>
            </View>
          </View>

          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="10 "
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:120,}]} >Local Delivery Charge</Text>
            </View>
          </View>

          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="10 "
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:120,}]} >Zonal Delivery Charge</Text>
            </View>
          </View>
          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="10 "
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:90,}]} >Country of Origin</Text>
            </View>
          </View>

          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,height : 50,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Falcon Apprels, MIN Ground Floor, Kapashra, New-Delhi - 110037 "
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:105,}]} >Manufacturer Detail</Text>
            </View>
          </View>
          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,height : 50,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Falcon Apprels, MIN Ground Floor, Kapashra, New-Delhi - 110037 "
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:73,}]} >Packer Detail</Text>
            </View>
          </View>


          <View style={[styles.InputText,]}>
              <InputText
              style={{fontSize : 11,top : -3,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Polyster "
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:60,}]} >Material</Text>
            </View>
          </View>



          <View style={[styles.InputText,{top : 20}]}>
              <InputText
              style={{fontSize : 11,top : -3,}}
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="S, M, L, XL, XXl"
              placeholderTextColor="#a5a3a3"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:30,}]} >Size</Text>
            </View>
          </View>

          <View style={{flex : 0.04, backgroundColor : '#fff',
 top : 12,
  borderTopWidth : 2, borderBottomWidth : 2, borderColor :'#d5d5d5' , flexDirection : 'row', justifyContent : 'space-between',bottom : -20}}>

<View  style={{flex : 0.29, marginLeft : 20,justifyContent : 'center', alignItems : 'center', }}>
<Text style ={{fontSize : 18, color :'#000', fontWeight : '500'}}>
                Add Varient
              </Text>
</View>

<View  style={{flex : 0.2,justifyContent : 'center', alignItems : 'center'}}>
  <Ripple onPress={() => navigation.navigate('EditVarients')}>

                <Image source={images.plus}/>
  </Ripple>
</View>
              
  </View>
  <LinearGradient
                   style={{
                    bottom : -50,
                    marginLeft: 20,                  
                    justifyContent:"center",
                    marginRight: 20,
                    flex : 0.04,
                    borderRadius:8,
                    alignItems:'center',
                    marginTop:20,
                }} 
                    colors={['#ED4343', '#A52021']} >
 <TouchableOpacity onPress={()=>navigation.navigate('Product' )}
                  
            >
                <Text style={{color:"#ffffff",
                              fontSize:18,
                              fontWeight:"500"}}>Update Details</Text>

              </TouchableOpacity>

</LinearGradient>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#d5d5d5',
    shadowOffset: {width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
 

  saveAreaViewContainer: { backgroundColor: '#FFF',  
  },
  viewContainer: { backgroundColor: '#fff', flex: 0.99,
   marginHorizontal: 10,
},
  
  dropdownsRow: {flexDirection: 'row',  },

  dropdown1BtnStyle: {
    flex: 1,
  //   height: 2,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
     borderColor: '#d5d5d5',
    // marginLeft : 90,
    //  justifyContent : 'flex-end'
   
  },
  dropdown1BtnTxtStyle: {color: 'gray', fontSize:18, fontWeight:'500'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left',fontSize:11},
  divider: {width: 8},

  InputText : {
    top  : 20,
    borderWidth : 1,
    borderColor:'#d5d5d5',
    marginLeft:20,
    marginRight : 20,
 borderRadius : 5,
//  height : 40,
flex: 0.03,
 paddingLeft : 20,
 marginBottom : 20,
 backgroundColor:'#FFFFFF',

  },
  TextInputView :{
    justifyContent:'center',
    alignContent:'center',
    position:'absolute',
    left:25,
    top:-10,
    paddingTop:1
  },
  TextInputLabel :{
    padding:0,
    
     color:'red',
     fontSize:10,
     marginBottom:10,
     backgroundColor:'white',
     alignContent:'center',
     paddingLeft:5,
     fontWeight:'500'
  },
 
})