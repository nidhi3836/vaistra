import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import UseOrientation from '../../UseOrientation'
import images from '../../../Components/images'

export default function Resolved() {

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
  const inputs = Array(3).fill('');
return (

  <View>
    <ScrollView>
      <View style={{height : UseOrientation.height}}>
      {inputs.map((inp, index)=> {
        return(
          <View style={{flex:0.2, backgroundColor : '#fff',
      margin : 15,borderWidth : 1, borderColor : '#d5d5d5',
      borderRadius : 8
      }}>
          <View style={{flex:0.7, backgroundColor : '#fff',flexDirection:'row',margin : 5}}>
              <View style={{flex : 0.2, justifyContent:'center', alignItems : 'center'}}>
                  <Image source={images.Group3583}              
                  />
              </View>
              <View style={{flex:0.8, backgroundColor : '#fff', padding : 5, }}>
              <Text style={{color:'#000', fontWeight:'bold',fontSize : 15}}>Mohit Raichura</Text>
              <Text  style={{ fontWeight:'500',top : 5}}>Received different size product</Text>
              <Text  style={{ fontWeight:'500',fontSize : 10, top : 5}}>Hello ! I recently placed an order for a women Crew Neck T-shirt in Green noon color and have received a different size</Text>
              </View>
          </View>
          <View style={{flex:0.22,backgroundColor : '#fff',top:5,
           flexDirection : 'row', justifyContent : 'space-between', margin : 5 }}>
              <Text style={{color : '#d3d3d3'}}>{'Order Id' + ' : 326646'}</Text>
              <Text style={{fontSize : 9, fontWeight : '500'}}>{day}{'\n'}{time}</Text>
          </View>
          </View>)
      })}
      </View>
    </ScrollView>
  </View>
)
}