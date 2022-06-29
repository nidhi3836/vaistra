import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import images from '../../Components/images'
import { ScrollView } from 'react-native-gesture-handler'
import UseOrientation from '../UseOrientation'
import MyTicktes from '.'
import Ripple from 'react-native-material-ripple'
import Reply from './reply'
import SecondTicket from './SecondTicket'

export default function ResponsTicket({navigation}) {

    const [time, setTime] = useState(null);
    const [day, setDay] = useState(null);
  
    useEffect(() => {
      let time = getCurrentTime();
      setTime(time);
    }, []);
  
    useEffect (() => {
      let day = getDay();
      setDay(day);
    }, []);
  
    const getCurrentTime = () => {
      let today = new Date();
      let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
      let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
      let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
     
      return hours + ':' + minutes  ;
      
    }
    const getDay = () => {
      let today = new Date();
      // let dayName = (today. getVarDate());
      let date = (today.getDate());
      let day =(today.getDay()) + (today.getDay());
      let month =(today.getMonth());
      let year = (today.getFullYear());
      return  date + "-" + month+ "-" + year;
    }
  
    const inputs = Array(4).fill('');

  return (
    <>
    <View>
     <Header 
     image={images.left}
     onPress = {()=>navigation.navigate(SecondTicket)}
     title={'My Tickets'}
     />
    </View>
    <ScrollView >
        <View style={{height:UseOrientation.height, backgroundColor : '#fff',marginBottom : 20 }}>
        <View style={{flex:0.33, backgroundColor:'#fff',margin : 20, borderColor : '#b7b7b7', borderRadius : 8 ,borderWidth : 1}}>

<View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.15, margin : 5, marginLeft: 10,marginRight :10}}>
  <Text style={{fontSize : 16, fontWeight : '500'}}>Customer Name </Text>
    <Text style={{fontSize : 14, fontWeight : '500'}}>
      Kirti Mishra
    </Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.15, margin : 5,marginLeft: 10,marginRight :10}}>
  <Text style={{fontSize : 16, fontWeight : '500'}}>Order ID </Text>
    <Text style={{fontSize : 14, fontWeight : '500'}}>
     { '' + ' 0001235649849'}
    </Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.15,  margin : 5,marginLeft: 10,marginRight :10}}>
  <Text style={{fontSize : 16, fontWeight : '500'}}>Order Time </Text>
    <Text style={{fontSize : 14, fontWeight : '500',}}>
     {day} ,{time}
    </Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.15, margin : 5,marginLeft: 10,marginRight :10}}>
  <Text style={{fontSize : 16, fontWeight : '500'}}>Reference No </Text>
    <Text style={{fontSize : 14, fontWeight : '500',}}>
      {'' + '521'}
    </Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.15, margin : 5,marginLeft: 10,marginRight :10}}>
  <Text style={{fontSize : 16, fontWeight : '500'}}>Product Name </Text>
    <Text style={{fontSize : 14, fontWeight : '500',}}>
      Crew neck T-shirt
    </Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', flex:0.15, margin : 5,marginLeft: 10,marginRight :10}}>
  <Text style={{fontSize : 16, fontWeight : '500'}}>Product ID </Text>
    <Text style={{fontSize : 14, fontWeight : '500',}}>
      {'' + 'C7168511315'}
    </Text>
  </View>
</View>

<View style={{flex:0.05, backgroundColor:'#fff', margin : 20, padding : 5, justifyContent : 'center',borderRadius : 8 ,borderWidth : 1,borderColor : '#b7b7b7',top : -20}}>
    <Text style={{fontSize : 16, fontWeight : '500'}}>Subject : Size Issue</Text>
</View>
<View style={{flex:0.04, backgroundColor:'#fff',  padding : 5, justifyContent : 'center',marginLeft : 20, marginRight:20, top : -25}}>
    <Text style={{fontSize : 16, fontWeight : '500',color:'#ED4343'}}>Customer's Message</Text>
</View>

<View style={{flex:0.3,backgroundColor:'#fff',margin : 5,marginLeft : 20, marginRight:20,borderColor : '#b7b7b7', borderRadius : 8 ,top : -20,borderWidth : 1,}}>
            <Text style={{color : '#a5a3a3', fontWeight : '400', paddingTop : 5, paddingBottom : 5, marginLeft : 10, marginRight : 10}}>Hello ! I recently placed an Order for Women Crew Neck T-shirt in Green Color and have received a {'\n'}different size T-shirt thwn what i Order. I want to Exchange the T-shirt and get the right size.</Text>
            <View style={{flex:0.88, backgroundColor:'#fff',flexDirection:'row', alignItems : 'center', marginRight : 10}}>
                <Image style={{marginLeft : 10}}source={images.Group3583}/>
                <Image style={{marginLeft : 10}}source={images.Group3583}/>
            </View>
{/* <Ripple onPress={()=>navigation.navigate(Reply)}>
            <Text style={{alignSelf : 'flex-end', color : '#ED4343',fontWeight : '500', top : 5 ,marginRight : 10}}>Reply</Text>
</Ripple> */}
</View>
<View style={{flex : 0.05,marginLeft : 60,marginRight : 20, top : -10}}> 
<Text style={{fontSize : 19, fontWeight : '500', color:'#707070'}}>My Response</Text>
</View>
<View style={{flex:0.3, backgroundColor : '#d5d5d5', marginLeft : 60,marginRight : 20, margin : 5,top : -10, borderRadius : 5}}>
    <Text style={{textAlign:'justify', marginLeft : 5,marginRight:5}}>
    Hi ! Natalie{'\n'}Our Team has reviewed your invoice on our system and see what that the T-shirt was supposed to be in medium size. we sincerely apologized for the inconvenience caused to you regarding the order that you've placed. We will happily do an Exchange at no additional cost, as per our return policy. Can you confirm you Shipping address for us to send a courier to collect the T-shirt for Exchange ? 

    </Text>
</View>
        </View>
    </ScrollView>
    </>
  )
}