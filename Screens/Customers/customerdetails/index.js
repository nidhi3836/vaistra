import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import images from '../../../Components/images'
import { heightToDp } from '../../../variable'
import Ripple from 'react-native-material-ripple'
import OrderDetails from '../OrderDetails'

export default function CustomerDetails({navigation}) {
  const inputs = Array(5).fill('');
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
<ScrollView style={{ height: heightToDp('100%'),}}>
      <View style={{backgroundColor : '#fff'}}>
      <View style={{backgroundColor:'#fff', flex : 0.11, margin : 20,
      borderRadius : 9, borderColor : '#b7b7b7',
       borderWidth : 1,marginBottom:1 }} >

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
    <Text style={{fontSize : 14, fontWeight : '500'}}>Total Orders </Text>
      <Text style={{fontSize : 14, fontWeight : '500'}}>
        Total Sales
      </Text>
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between',}}>
    <Text style={{fontSize : 14, fontWeight : '500', color:'#444'}}>{'' + '   5'} </Text>
      <Text style={{fontSize : 14, fontWeight : '500',color:'#444'}}> &#8377;
      {'' + '740.00'}
      </Text>
    </View>    
    </View>
    
    </View>  

      </View>
  <View style={{flex:0.04,  justifyContent:'center', marginLeft : 20, top : 10, }}>
        <Text style={{fontSize :19 , fontWeight:'500',color : '#000'}}>Customer Details</Text>
  </View>

  <View style={{flex:0.22, backgroundColor:'#fff',margin : 20, borderColor : '#b7b7b7', borderRadius : 8,padding :15 ,borderWidth : 1}}>

  <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.2, margin : 5, }}>
    <Text style={{fontSize : 14, fontWeight : '500'}}>Customer Name </Text>
      <Text style={{fontSize : 14, fontWeight : '500'}}>
        Kirti Mishra
      </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.2, margin : 5}}>
    <Text style={{fontSize : 14, fontWeight : '500'}}>Mobile </Text>
      <Text style={{fontSize : 14, fontWeight : '500'}}>
       { '' + ' 9123456789'}
      </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.2,  margin : 5}}>
    <Text style={{fontSize : 14, fontWeight : '500'}}>Email </Text>
      <Text style={{fontSize : 14, fontWeight : '500',color:'#444'}}>
        {'' + 'kirtimishra@gmail.com'}
      </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.2, margin : 5}}>
    <Text style={{fontSize : 14, fontWeight : '500'}}>Customer ID </Text>
      <Text style={{fontSize : 14, fontWeight : '500',color:'#444'}}>
        {'' + 'C7168511315'}
      </Text>
    </View>
  </View>

  <View style={{flex:0.04,  justifyContent:'center', marginLeft : 20, }}>
        <Text style={{fontSize :19 , fontWeight:'500',color:'#000'}}>Orders</Text>
  </View>

  <View style={{flex:0.3, backgroundColor:'#fff',margin : 20, borderColor : '#b7b7b7', borderRadius : 7, borderWidth:1}}>

<View style={{  backgroundColor:'#f6f6f6', flex:0.32, padding : 5}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.7}}>
    <Text style={{fontSize : 14, fontWeight : '500'}}>Order ID </Text>

<Text style={{fontSize : 12, fontWeight : '500',color:'red'}}>
  {day}
</Text>
    </View>

<View>
<Text style={{fontSize : 14, fontWeight : '500'}}>Total : &#8377; 500.00</Text>
</View>
  </View>
  
  <View style={{flex:0.35, padding : 5}}>
  
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.7}}>
    <Text style={{fontSize : 15, fontWeight : '500', color: '#000'}}>Kook n Keech Marvel </Text>

<Text style={{fontSize : 10, fontWeight : '500',color:'#d5d5d5'}}>
 {'Product ID' + ' : tf16561'}
</Text>
    </View>

<View style={{flexDirection:'row',justifyContent:'space-between',}}>
<Text>Men Printed Sweat Shirt</Text>
<Text style={{fontSize : 10, fontWeight : '500',color:'#d5d5d5'}}>Price : &#8377; 200</Text>

</View>
  
</View>
<View style={{height:3, backgroundColor:'#f6f6f6'}}></View>
<View style={{flex:0.35, padding : 5,}}>
  
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.7}}>
    <Text style={{fontSize : 15, fontWeight : '500', color: '#000'}}>Kook n Keech Marvel </Text>

<Text style={{fontSize : 10, fontWeight : '500',color:'#d5d5d5'}}>
 {'Product ID' + ' : tf16561'}
</Text>
    </View>

<View style={{flexDirection:'row',justifyContent:'space-between',}}>
<Text>Men Printed Sweat Shirt</Text>
<Text style={{fontSize : 10, fontWeight : '500',color:'#d5d5d5'}}>Price : &#8377; 200</Text>

</View>
  
</View>
  
</View>

{inputs.map((inp, index)=> {
          return(
<Ripple onPress={()=>navigation.navigate(OrderDetails)}>
<View style={{flex:0.3, backgroundColor:'#fff',margin : 20, borderColor : '#b7b7b7', borderRadius : 7, borderWidth:1, top : -20}}>


<View style={{  backgroundColor:'#f6f6f6', flex:0.32, padding : 5}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.7}}>
    <Text style={{fontSize : 14, fontWeight : '500'}}>Order ID </Text>

<Text style={{fontSize : 12, fontWeight : '500',color:'red'}}>
  {day}
</Text>
    </View>

<View>
<Text style={{fontSize : 14, fontWeight : '500'}}>Total : &#8377; 500.00</Text>
</View>
  </View>
  

  <View style={{flex:0.35, padding : 5}}>
  
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.7}}>
    <Text style={{fontSize : 15, fontWeight : '500', color: '#000'}}>Kook n Keech Marvel </Text>

<Text style={{fontSize : 10, fontWeight : '500',color:'#d5d5d5'}}>
 {'Product ID' + ' : tf16561'}
</Text>
    </View>

<View style={{flexDirection:'row',justifyContent:'space-between',}}>
<Text>Men Printed Sweat Shirt</Text>
<Text style={{fontSize : 10, fontWeight : '500',color:'#d5d5d5'}}>Price : &#8377; 200</Text>

</View>
  
</View>
  
</View>
</Ripple>
          )
})} 
      </View>
</ScrollView>

    </View>
  )
}