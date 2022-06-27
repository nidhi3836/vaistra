import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'
import { heightToDp } from '../../variable'
import Header from '../../Components/Header'
import images from '../../Components/images'

export default function Notification({navigation}) {
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
   
    return hours + ':' + minutes + ':' + seconds ;
    
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
  const [view, setView] = useState({0:'', 1:'', 2:'', 3:'', 4:'', 5:''});
  return (
    
    <>
    <Header 
    image={images.left}
    title={'Notification'}
    onPress={()=>navigation.navigate('AppStack')}
    />
    <ScrollView>
    <Text style={{alignSelf : 'flex-end',fontSize:17,padding:10}}>Marks all as read</Text>
    {inputs.map((inp, index)=> {
          return(
    <View style={{
      justifyContent:'center' }}>
      
    <Text style={{margin : 15,fontSize:19,color:'#000',fontWeight:'500'}}>{day}</Text>
    <View style={{flex:0.7,margin:12,flexDirection:'row',borderColor : '#d5d5d5',borderWidth:1,borderRadius:7}}>

   <View style={{flex:0.22, justifyContent:'center',alignItems:"center"}}>
    <Image 
    resizeMode='cover'
    style={{height:70,width:70}}
    source={images.pic2}/>
      </View>

        <View style={{flex : 0.8, padding:10, }}>
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

          <Text>1 Unit(s) of Evening Red dress {'\n'}
          has been placed by Janvi Goel</Text>
          <Text style=
          {{color:'#000',fontWeight:'bold',fontSize:12}}> {'Order' + ': #231'}  </Text>
          </View>
          <View style={{flex:0.95, marginTop:10,}}>

         <Text  style={{alignSelf : 'flex-end',fontSize:12}}>{time}</Text>
          </View>
        </View>
        
    </View>
    <View style={{flex:0.7,margin:12,flexDirection:'row',borderColor : '#d5d5d5',borderWidth:1,borderRadius:7}}>

<View style={{flex:0.22, justifyContent:'center',alignItems:"center"}}>
 <Image 
 resizeMode='cover'
 style={{height:70,width:70}}
 source={images.asset1}/>
   </View>

     <View style={{flex : 0.8, padding:10, }}>
       <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

       <Text>1 Unit(s) of Evening Red dress {'\n'}
       has been placed by Janvi Goel</Text>
       <Text style=
       {{color:'#000',fontWeight:'bold',fontSize:12}}> {'Order' + ': #231'}  </Text>
       </View>
       <View style={{flex:0.95, marginTop:10,}}>

      <Text  style={{alignSelf : 'flex-end',fontSize:12}}>{time}</Text>
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
 
  
});