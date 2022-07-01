import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import images from '../../Components/images'
import { heightToDp } from '../../variable'
import Header from '../../Components/Header'
import AppStack from '../AppStack'
import Ripple from 'react-native-material-ripple'
import CustomerDetails from './customerdetails'


export default function Customers({navigation}) {

  const inputs = Array(5).fill('');
  return (
 
    <>
    <Header 
    image={images.left}
    title = {'Customrs'}
    onPress={()=> navigation.navigate('AppStack')}

    />
    <ScrollView style={{backgroundColor:'#fff'}}>
    <Ripple
    onPress={() => navigation.navigate('CustomerDetails')}
    style={{height:heightToDp('100%')}}>
     

    {inputs.map((inp, index)=> {
          return(
            
      <View style={{backgroundColor:'#fff', flex : 0.20, margin : 20,
      borderRadius : 7, borderColor : '#b7b7b7', borderWidth : 1,marginBottom:1
      }} >
    <View style={{flex:0.65, backgroundColor:"#fff", 
    flexDirection:'row', margin:8, 
  }}>
    <View style={{flex:0.15, justifyContent:'center'}}>
    <Image 
      style={{marginLeft : 5}}
      source={images.photo}/>
    </View>
    <View style={{flex:0.9,  marginLeft : 10}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Mohit Raichura </Text>
      <Text style={{fontSize : 16, fontWeight : '500'}}>
       {'Customer ID' + ' : 23461168461'}
      </Text>
    </View>
    
    </View>

    <View style={{flex : 0.45, backgroundColor:'#f6f6f6', flexDirection : 'row',alignItems:'center', justifyContent:'space-between',
  margin :5}}>

      <View style={{flex:0.5, flexDirection : 'row',
    justifyContent:'center', alignItems:'center'
    }}>
      <Text>  Total Orders </Text>
      <Text  style={{  borderRadius : 5, backgroundColor : '#f5e5e5', color : '#000' }}>{''+ '  5  '}</Text>
      </View>

      <View style={{ flexDirection : 'row',
    marginLeft : 10, justifyContent:'center', alignItems:'center'
 
    }}>
      <Text style={{fontWeight:'500'}}>  Total Sales </Text>
      <Text  style={{ borderRadius : 5,  alignSelf:'flex-end',backgroundColor : '#f5e5e5', color : '#000' }}> &#8377;{''+ '  740.00  '}</Text>
      </View>
      



    </View>

      </View>
     
          )
  })}
  
    </Ripple>


    </ScrollView>
    </>
  )
}