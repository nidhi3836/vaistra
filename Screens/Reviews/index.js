import { View, Text , Image, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../Components/Header'
import images from '../../Components/images'
import { heightToDp } from '../../variable'

export default function Reviews() {
  
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
      title={'Reviews'}
      />
      <ScrollView>
    <View style={{height:heightToDp('100%'), 
     backgroundColor :'#fff'}}>
          <View style={{flex: 0.6, backgroundColor:'#fff', margin : 17,
        borderRadius : 5, borderWidth : 1
        }}>

    <View style={{flex:0.16, flexDirection : 'row'}}>

      <View style={{flex:0.18,}}>
      <Image source={images.Group3583}/>

      </View>

      <View style={{flex:0.55,backgroundColor:'#fff', margin : 5, padding : 5}}>
        <Text style={{fontWeight:'500'}}>Product : Medicine CCC</Text>
        <Text style={{fontWeight:'500'}}>Product ID : 234568</Text>
      </View>
      <View style={{flex:0.25, backgroundColor :'#fff', margin : 5, justifyContent:'center', alignItems : 'center',flexDirection : 'row',}}>

          <View style={{flex:0.8, flexDirection : 'row', backgroundColor : 'green',
        justifyContent:'center',alignItems : 'center', borderRadius : 5
        }}>
            <Text style={{color:'#fff'}}>4.3</Text>
            <Image 
            style={{marginLeft : 10}}
            source={images.starfull}/>
          </View>
      </View>
    </View>

    <View style={{flex : 0.5, backgroundColor:'#fff', top : 5}}>
          <View style={{flex : 0.12, flexDirection :'row',backgroundColor:'#fff',
          justifyContent:'space-between'
        }}>
         
          <Text style={{fontSize : 17, fontWeight : '500'}}>Nasrin Mehta</Text>
            <Text style={{fontSize : 14, }}>{day}</Text>
         
          </View>
          <View style={{flex : 0.7,backgroundColor:'#d5d5d5', }}>
          <Text style={{fontSize : 13, fontWeight : '500'}}>Liked it.. go for it</Text>
          <Text>Material god not transparent, versatile</Text>
          <View style={{flex : 0.65, backgroundColor:'gray', flexDirection:'row',
          alignItems : 'center'
        }}>
            <Image source={ images.One}/>
            <Image 
            style={{height : 60, marginLeft : 10 ,width : 60}}
            source={ images.g2}/>
          </View>
              <View style={{flexDirection:'row', flex : 0.4, left : 10,alignItems : 'center'
            }}>
              <Image source={ images.Path84}/>
              <Image source={ images.Path84}/>
              <Image source={ images.Path84}/>
              <Image source={ images.Path84}/>
              <Image source={ images.Path85}/>
          </View>
          </View>

    </View>

          </View>
    </View>
    </ScrollView>
    </View>
  )
}