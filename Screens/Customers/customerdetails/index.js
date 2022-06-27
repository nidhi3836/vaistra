import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import images from '../../../Components/images'
import { heightToDp } from '../../../variable'

export default function CustomerDetails() {
   
    const [day, setDay] = useState(null);
  
  
  
    useEffect (() => {
      let day = getDay();
      setDay(day);
    }, []);
  
   
    const getDay = () => {
      let today = new Date();
      // let dayName = (today. getVarDate());
      let date = (today.getDate());
      let day =(today.getDay()) + (today.getDay());
      let month =(today.getMonth());
      let year = (today.getFullYear());
      return  date + "-" + month+ "-" + year;
    }
  

  return (
    <View>
        <Header
        image={images.left}
        title={'Kirti Mishra'}
        />
      <View style={{height: heightToDp('100%')}}>

      <View style={{backgroundColor:'#fff', flex : 0.10, margin : 20,
      borderRadius : 9, borderColor : '#b7b7b7',
       borderWidth : 1,marginBottom:1
      }} >

    <View style={{flex:1, backgroundColor:"#fff", 
    flexDirection:'row', margin:8, 
  }}>
    <View style={{flex:0.19, justifyContent:'center', }}>
    <Image 
      style={{marginLeft : 5}}
      source={images.photo}/>
    </View>
    <View style={{flex:1, }}>
    <View style={{flexDirection:'row', justifyContent:'space-between',}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Total Orders </Text>
      <Text style={{fontSize : 16, fontWeight : '500'}}>
        Total Sales
      </Text>
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between',}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>{'' + '   5'} </Text>
      <Text style={{fontSize : 16, fontWeight : '500'}}> &#8377;
      {'' + '740.00'}
      </Text>
    </View>
    
    </View>
    
    </View>  

      </View>
  <View style={{flex:0.04,  margin : 10,justifyContent:'center', marginLeft : 15}}>
        <Text style={{fontSize :19 , fontWeight:'500'}}>Customer Details</Text>
  </View>

  <View style={{flex:0.22, backgroundColor:'#fff',margin : 20, borderColor : '#b7b7b7', borderRadius : 8}}>

  <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.29, margin : 5}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Customer Name </Text>
      <Text style={{fontSize : 16, fontWeight : '500'}}>
        Kirti Mishra
      </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.29, margin : 5}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Mobile </Text>
      <Text style={{fontSize : 16, fontWeight : '500'}}>
       { '' + ' 9123456789'}
      </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.29,  margin : 5}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Email </Text>
      <Text style={{fontSize : 16, fontWeight : '500'}}>
        {'' + 'kirtimishra@gmail.com'}
      </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.29, margin : 5}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Customer ID </Text>
      <Text style={{fontSize : 16, fontWeight : '500'}}>
        {'' + 'C7168511315'}
      </Text>
    </View>
  </View>

  <View style={{flex:0.04,  margin : 10,justifyContent:'center', marginLeft : 15}}>
        <Text style={{fontSize :19 , fontWeight:'500'}}>Orders</Text>
  </View>

  <View style={{flex:0.3, backgroundColor:'#fff',margin : 20, borderColor : '#b7b7b7', borderRadius : 8}}>

<View style={{  backgroundColor:'#b7b7b7', flex:0.35, margin : 5}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.7}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Order ID </Text>

<Text style={{fontSize : 16, fontWeight : '500'}}>
  {day}
</Text>
    </View>

<View>
<Text>Total : &#8377; 500.00</Text>
</View>
  </View>
  
  <View style={{flex:0.4, backgroundColor:'gray',}}>
  
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.7}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Kook n Keech Marvel </Text>

<Text style={{fontSize : 16, fontWeight : '500', fontSize:10}}>
 {'Product ID' + 'tf16561'}
</Text>
    </View>

<View style={{flexDirection:'row'}}>
<Text>Men Printed Sweat Shirt</Text>
<Text>Price : &#8377; 200</Text>

</View>
  
</View>

<View style={{flex:0.4, backgroundColor:'gray', marginTop : 5}}>
</View>
  
</View>

      </View>
    </View>
  )
}