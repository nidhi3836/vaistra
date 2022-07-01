import { View, Text , Image, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../Components/Header'
import images from '../../Components/images'
import { heightToDp } from '../../variable'
import UseOrientation from '../UseOrientation'
import AppStack from '../AppStack'

export default function Reviews({navigation}) {
  
  const inputs = Array(4).fill('');
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
    <View >
      <Header 
      image={images.left}
      onPress={()=>navigation.navigate(AppStack)}
      title={'Reviews'}
      />
      <ScrollView>
    <View style={{height:UseOrientation.height * 2.5, 
     backgroundColor :'#fff',marginBottom : 60}}>
     
     {inputs.map((inp, index)=> {
          return(
          <View style={{flex: 0.6, backgroundColor:'#fff', margin : 17,
        borderRadius : 5, borderWidth : 1, borderColor : '#d5d5d5'
        }}>

    <View style={{flex:0.18, flexDirection : 'row', justifyContent : 'center'}}>

      <View style={{flex:0.15,justifyContent : 'center'}}>
      <Image source={images.Group3583}/>

      </View>

      <View style={{flex:0.55,backgroundColor:'#fff', margin : 5, padding : 5}}>
        <Text style={{fontWeight:'500'}}>Product : Medicine CCC</Text>
        <Text style={{fontWeight:'500'}}>Product ID : 234568</Text>
      </View>
      <View style={{flex:0.25, backgroundColor :'#fff', margin : 5, justifyContent:'center', alignItems : 'center',flexDirection : 'row',}}>

          <View style={{flex:0.7, flexDirection : 'row', backgroundColor : 'green',
        justifyContent:'center',alignItems : 'center', borderRadius : 5
        }}>
            <Text style={{color:'#fff'}}>4.3</Text>
            <Image 
            style={{marginLeft : 10}}
            source={images.starfull}/>
          </View>
      </View>
     
    </View>

    <View style={{backgroundColor :'#d3d3d3', height : 2, marginLeft : 10, marginRight : 10, top : 5}}></View>
    <View style={{flex : 0.8, backgroundColor:'#fff', top : 5, padding : 10}}>
          <View style={{flex : 0.11, flexDirection :'row',backgroundColor:'#fff',
          justifyContent:'space-between', 
        }}>
        
          <Text style={{fontSize : 17, fontWeight : '500',
        color : '#707070'
        }}>Nasrin Mehta</Text>
            <Text style={{fontSize : 14, }}>{day}</Text>
         
          </View>
       
          <View style={{flex : 0.59,backgroundColor:'#fff', }}>
          <Text style={{fontSize : 13, fontWeight : '500'}}>
            Liked it.. go for it</Text>
          <Text>Material god not transparent, versatile</Text>
          <View style={{flex : 0.69, flexDirection:'row',
          alignItems : 'center',top : 5
        }}>
            <Image source={ images.One}/>
            <Image 
            style={{height : 60, marginLeft : 10 ,width : 60}}
            source={ images.g2}/>
          </View>
              <View style={{flexDirection:'row', flex : 0.5, alignItems : 'center', top  : 10
            }}>
              <Image 
              style={{margin : 2}}
              source={ images.Path84}/>
              <Image     style={{margin : 2}}
              source={ images.Path84}/>
              <Image    style={{margin : 2}}source={ images.Path84}/>
              <Image   style={{margin : 2}}source={ images.Path84}/>
              <Image    style={{margin : 2}} source={ images.Path85}/>
          </View>
          </View>
          <View style={{backgroundColor :'#d3d3d3', height : 2, top  : 5}}></View>

          <View style={{flex : 0.15, flexDirection :'row',backgroundColor:'#fff',
          justifyContent:'space-between', top  : 10
        }}>
         
          <Text style={{fontSize : 17, fontWeight : '500',
        color : '#707070'
        }}>Nasrin Mehta</Text>
            <Text style={{fontSize : 14, }}>{day}</Text>
         
          </View>
          <View style={{flex : 0.48,backgroundColor:'#fff', }}>
          <Text style={{fontSize : 13, fontWeight : '500'}}>
            Liked it.. go for it</Text>
          <Text>Material god not transparent, versatile</Text>
         
              <View style={{flexDirection:'row', flex : 0.4, alignItems : 'center', 
            }}>
              <Image 
              style={{margin : 2}}
              source={ images.Path84}/>
              <Image     style={{margin : 2}}
              source={ images.Path84}/>
              <Image    style={{margin : 2}}source={ images.Path84}/>
              <Image   style={{margin : 2}}source={ images.Path84}/>
              <Image    style={{margin : 2}} source={ images.Path85}/>
          </View>
          </View>
    </View>
   
       
          
         
    </View>)
     })}
        
    
       
    </View>
    </ScrollView>
    </View>
  )
}