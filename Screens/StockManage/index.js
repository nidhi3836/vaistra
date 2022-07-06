import React,{useState, useEffect, useRef} from 'react'
import { View, Text,Image,SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView,Switch } from 'react-native'
import Header from '../../Components/Header'
import images from '../../Components/images'
const {width} = Dimensions.get('window');
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function StockManage({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const citiesDropdownRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setCountries([
        {title: '1', cities: [{title: '1'}, ]},
        {title: '2', cities: [{title: '2'}, ]},
        {title: '3', cities: [{title: 'Cairo'}, {title: 'Alex'}]},
        {title: '4', cities: [{title: 'Cairo'}, {title: 'Alex'}]},
        {title: '5', cities: [{title: 'Cairo'}, {title: 'Alex'}]},
        {title: '6', cities: [{title: 'Cairo'}, {title: 'Alex'}]},
      ]);
    }, 1000);
  }, []);
  const inputs = Array(4).fill('');
  const [view, setView] = useState({0:'', 1:'', 2:'', 3:'', 4:'', 5:''});

  return (
    <>
    <Header 
    image={images.Group355}
    onPress={()=> navigation.navigate('AppStack')}
    image2={images.notification}
    onPress3={()=> navigation.navigate('Notification')}
    />
   <ScrollView style={{backgroundColor:"#fff", width:"100%", flex:1}}>
   
   {inputs.map((inp, index)=> {
          return(
    <View 
    key={index.toString()}
    value={view[index]}
    style={[styles.shadow ,
   { borderColor:'#d5d5d5',
       borderBottomColor:"#d5d5d5",
        borderWidth:1,
      marginHorizontal:20,
           borderRadius:6,
           padding:10,
           backgroundColor:'#fff',
           marginTop:10,}]
           
           }>
     <View style={{flexDirection:'row', }}>
        <Image source={images.Group3583}/>
        <View style={{marginLeft:10}}>
          <Text style={{fontWeight:"500"}}>
            Product : Medicine ccc
          </Text>
          <Text style={{fontWeight:"500"}}>
            Product ID  : 12345678
          </Text>
         
         <View style={{flexDirection:'row', width:150}}>
          <SafeAreaView style={styles.saveAreaViewContainer}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.viewContainer}>
      
        <View        
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                citiesDropdownRef.current.reset();
                setCities([]);
                setCities(selectedItem.cities);
              }}
             defaultButtonText={'Stock:20'
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
    </SafeAreaView>
       <Text style={{marginLeft:-15,fontWeight:"500"}}> Instock </Text>
      <Switch
      style={{}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#fff"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    
    </View>



        </View>
     </View>
    </View>
          )
            })}

    


    </ScrollView>
  
    </>
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
 

  saveAreaViewContainer: { backgroundColor: '#FFF', width:"80%"},
  viewContainer: { backgroundColor: '#FFF',  },
  // scrollViewContainer: {
  //   flexGrow: 1,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   paddingVertical: '10%',
  // },
  dropdownsRow: {flexDirection: 'row', width: '80%', },

  dropdown1BtnStyle: {
    flex: 1,
    height: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
     borderColor: '#d5d5d5',
   
  },
  dropdown1BtnTxtStyle: {color: 'gray', fontSize:11, fontWeight:'500'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left',fontSize:11},
  divider: {width: 12},
  
  // dropdown2BtnStyle: {
  //   flex: 1,
  //   height: 50,
  //   backgroundColor: '#FFF',
  //   borderRadius: 8,
  //   borderWidth: 1,
  //   borderColor: '#444',
  // },
  // dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
  // dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  // dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  // dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
});