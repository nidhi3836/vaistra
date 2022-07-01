import { View, Text,SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header'
import images from '../../Components/images'
import AdditionalDetail from './AdditionalDetail'
import { heightToDp } from '../../variable'
const {width} = Dimensions.get('window');
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UseOrientation from '../UseOrientation'
import InputText from '../../Components/InputText'
import LinearGradient from 'react-native-linear-gradient'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Ripple from 'react-native-material-ripple'
import AppStack from '../AppStack'

export default function EMIProduct({navigation}) {

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


    const CONTENT = {
        tableHead: ['', 'Months', 'Interests', 'Monthly EMI', 'Overall Cost'],
        tableTitle: ['HDFC', 'HDFC', 'HDFC', 'HDFC'],
        tableData: [
          ['3', '13%pa(rs.25)', '408','1224'],
          ['3', '13%pa(rs.25)', '408','1224'],
          ['3', '13%pa(rs.25)', '408','1224'],
          ['3', '13%pa(rs.25)', '408','1224'],
         
        ],
      };


    const [EMI, setEMI] = useState([]);
    const [Interest, setInterest] = useState([]);



    const [countries, setCountries] = useState([]);
    const [month, setMonth] = useState([]);
    // const citiesDropdownRef = useRef();
      useEffect(() => {
      setTimeout(() => {
        setCountries([
          {title: 'HDFC', countries: [{title: 'HDFC'}, ]},
          {title: 'ICICI', countries: [{title: 'ICICI'}, ]},
          {title: 'SBI', countries: [{title: 'SBI'}, {title: 'Alex'}]},
          
        ]);
      }, 1000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setMonth([
            {title: 'January', month: [{title: 'January'}, ]},
            {title: 'February', month: [{title: 'February'}, ]},
            {title: 'March', month: [{title: 'March'}, ]},
            
          ]);
        }, 1000);
      }, []);
    
  return (
    <View>
        <Header
        image={images.left}
        onPress={()=> navigation.navigate('AdditionalDetail') }
        />
        <ScrollView>
      <View style={{ height:orientations !='landscape' ? UseOrientation.height * 1.2:  UseOrientation.height * 2 ,
        
        backgroundColor : '#fff'}}>

      <View style={{flex : 0.08, marginLeft : 20, margin: 20,marginRight : 20 , flexDirection : 'row', justifyContent : 'space-between'}}>
            <Text style={{color:'#000', fontSize : 20, fontWeight : '500', }}>
                Additional Details
            </Text>
            <Ripple onPress={ () => navigation.navigate ('AppStack')}>
            <Text style={{color:'#000', fontSize : 20, fontWeight : 'bold', color : '#ed4343'}}>
                SKIP
            </Text>
            </Ripple>
        </View>


<View style={{ flex:0.07, margin : 10, justifyContent : 'space-between',

marginTop : -30}}>
          
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.viewContainer}>
      
        <View        
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                // citiesDropdownRef.current.reset();
                setCountries([]);
                setCountries(selectedItem.countries);
              }}
             defaultButtonText={'Select Bank'}
            
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

    <View style={{ flex:0.07, margin : 10, justifyContent : 'space-between', backgroundColor : 
 "#fff", marginTop : 2,}}>
          
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.viewContainer}>
      
        <View        
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={month}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                // citiesDropdownRef.current.reset();
                setMonth([]);
                setMonth(selectedItem.month);
              }}
             defaultButtonText={'Select Month'
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

    <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={Interest}
                    onChangeText={(text) => {setInterest(text) }}
                    placeholder="Interest {ex 13% pa Rs.25}"
                    placeholderTextColor="#505050" />
               
            </View>
            <View style={[styles.textInput,
            {}]}>
                <InputText
                    value={EMI}
                    onChangeText={(text) => {setEMI(text) }}
                    placeholder="Monthly EMI Account"
                    placeholderTextColor="#505050" />
               
            </View>

            <TouchableOpacity onPress={()=>       
                navigation.navigate('EMIProduct') 
                
              }
       >
    <View style={styles.change}>
                  <LinearGradient
                    style={{ borderRadius: 5 }}
                    colors={['#d5d5d5', '#707070']} >
                   <View style={styles.changeView}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                          Add EMI
                        </Text>
                      </View>
                  
                  </LinearGradient>
                </View>
                </TouchableOpacity>

                <View style={{ marginTop : 5, backgroundColor:'#fff',padding:15, flex : 0.5}}>

          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>EMI on Product</Text>
        
       <View style={styles.container}>
      <Table borderStyle={{ borderBottomWidth : 1}}>
        
        <Row 
          data={CONTENT.tableHead}
          flexArr={[0, 1, 1.2, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            style={styles.title}
            heightArr={[25, 25]}
            textStyle={styles.text}
          />
          <Rows
            data={CONTENT.tableData}
            flexArr={[2, 2, 2]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
    <TouchableOpacity onPress={ () => navigation.navigate ('AppStack')}
        
       >
    <View style={[styles.change,{marginTop : 30}]}>
                  <LinearGradient
                    style={{ borderRadius: 5 }}
                    colors={['#DE3F3F', '#BE3636','#A32E2E', ]} >
                   <View style={styles.changeView}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                          Submit
                        </Text>
                      </View>
                  
                  </LinearGradient>
                </View>
                </TouchableOpacity>

    </View>
   

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
    viewContainer: { backgroundColor: '#d5d5d5', 
    flex:0.01, marginHorizontal: 12,
},
    // scrollViewContainer: {
    //   flexGrow: 1,
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   paddingVertical: '10%',
    // },
    dropdownsRow: {flexDirection: 'row',  },
  
    dropdown1BtnStyle: {
      flex: 1,
    //   height: 2,
      backgroundColor: '#FFF',
      borderRadius: 10,
      borderWidth: 1,
       borderColor: '#d5d5d5',
       
    //    justifyContent : 'space-between'
     
    },
    dropdown1BtnTxtStyle: {color: 'gray', fontSize:18, fontWeight:'500'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left',fontSize:11},
    divider: {width: 8},
  
    textInput: {
        marginTop : 15,
        borderRadius: 5,
        backgroundColor: '#f6f6f6',
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#B7B7B7',
        marginBottom: 10,
       
         flex:0.07,
        
        paddingLeft: 20, 
        // marginTop : 15
    },
    change : {
        // height: 55,
        alignItems: 'center',
        justifyContent: 'center',
      marginTop : 10,

      
    },
    changeView : {
      width: UseOrientation.width/ 1.16,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginLeft: 10,
      marginRight: 10,
     
    },

    container: { paddingTop: 10, },
  head: { height: 40, borderWidth: 0.3 },
  wrapper: { flexDirection: 'row',  },
  title: {borderWidth :0.3},
  row: { height: 27 ,borderWidth :0.3},
  text: { textAlign: 'center', },
})