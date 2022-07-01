import { View, Text, Dimensions, ScrollView , Image, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../Components/Header'
import images from '../../Components/images'
import UseOrientation from '../UseOrientation'
import Product from './product'
import Home from '../Home'
import FileOne from '../ProgrssFiles/fileOne'
import { heightToDp } from '../../variable'

export default function YourProduct({navigation}) {
  
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

  const inputs = Array(4).fill('');
  const [view, setView] = useState({0:'', 1:'', 2:'', 3:'', 4:'', 5:''});

  return (
    <View style={{ flex:1}}>
    <Header 
    image={images.Group355}
    image2={images.notification}
    onPress3={()=> navigation.navigate('Notification')}
    />
      <ScrollView style={{backgroundColor:'#fff', }}>
     
<TouchableOpacity onPress={()=> navigation.navigate(Product)}>
          <View style={{flexDirection:'row', alignContent:'center',
          width:80,justifyContent:'center',
          margin:15,alignItems:'center',
          borderRadius:8,
          backgroundColor:'#f6f6f6', 
          alignSelf:'flex-end'}}>
            <Image 
            resizeMode='contain'
            style={{height:25,width:20}}
            source={images.filter}/>
    <Text style={{color:'#000',fontWeight:'500',marginLeft:5,}}>Filter</Text>
           
          </View>
          {inputs.map((inp, index)=> {
          return(
<View style={{flexDirection:'row', justifyContent:'center', marginTop : 10}}>

<View style={{alignContent:'center',
         
          height:UseOrientation.height / 3, 
          width:  orientations !='landscape' ? UseOrientation.width / 2.4 : UseOrientation.width /1.3
          ,
          backgroundColor:'#fff',
          borderColor : "#b7b7b7",
          borderWidth : 1,
          borderRadius : 8
          
          }}>           

              <View style={{height:heightToDp("40%"), }}>
                <View style={{flex:0.09, }}>

                <View style={{ alignSelf:'flex-end',width:60,margin:5,
              justifyContent:'center',
             alignItems:'center',
            borderTopEndRadius:8,
            borderBottomLeftRadius:8,
            backgroundColor:'#f6f6f6', }}>
            <Text style={{color:'#000', fontWeight:'500',fontSize:8,}}>Cloth</Text>
            </View>
                </View>
               < View style={{flex:0.48,marginTop:5}}>

            <View style={{
            justifyContent:'center',
              //  height:UseOrientation.height / 5, 
             alignItems:'center',
                // width:orientations !='landscape' ? UseOrientation.width / 2.4  : UseOrientation.width /1.3
                
            }}>
                <Image
                 resizeMode='contain'
                 style={{
                  // marginTop:25,
                  height:UseOrientation.height / 4.8,
                 width:orientations !='landscape' ? UseOrientation.width   : UseOrientation.width
                }}
                source={images.Tshirt1}
                />
              </View>

                </View>
                <View style={{flex:0.3,marginTop:10,padding:8}}>
                <Text style={{color:'#000', fontWeight:'500'}}>Kook N Keech Marvel</Text>
                  <Text style={{fontSize:10,fontWeight:'500'}}>
                    Men Printed sweatShirt
                  </Text>
                  <View style={{flexDirection:'row', }}>
                    <Text style={{fontSize:10,color:'#707070',fontWeight:'500'}}>&#8377;600.00</Text>
                    <Text style={{fontSize:10,
                      marginLeft:5,
                      textDecorationLine: 'line-through',color:'#b7b7b7',fontWeight:'500'}}>&#8377;800.00</Text>
                      <Text style={{fontSize:10,color:'red',fontWeight:'500'}}>(20% off)</Text>
                  </View>
                </View>

              </View>

          </View>


          <View style={{alignContent:'center',
          marginLeft:12,
          // marginRight:10,
          height:UseOrientation.height / 3, 
          width:  orientations !='landscape' ? UseOrientation.width / 2.4 : UseOrientation.width /1.3
          ,
          backgroundColor:'#fff',
          borderColor : "#b7b7b7",
          borderWidth : 1,
          borderRadius : 8
          
          }}>           

              <View style={{height:heightToDp("40%"), }}>
                <View style={{flex:0.09, }}>

                <View style={{ alignSelf:'flex-end',width:60,margin:5,
              justifyContent:'center',
             alignItems:'center',
            borderTopEndRadius:8,
            borderBottomLeftRadius:8,
            backgroundColor:'#f6f6f6', }}>
            <Text style={{color:'#000', fontWeight:'500',fontSize:8,}}>Cloth</Text>
            </View>
                </View>
                <View style={{flex:0.48,marginTop:5}}>

                <View style={{
            justifyContent:'center',
              //  height:UseOrientation.height / 5, 
             alignItems:'center',
                // width:orientations !='landscape' ? UseOrientation.width / 2.4  : UseOrientation.width /1.3
                
            }}>
                <Image
                 resizeMode='contain'
                 style={{
                  // marginTop:25,
                  height:UseOrientation.height / 4.8,
                 width:orientations !='landscape' ? UseOrientation.width   : UseOrientation.width
                }}
                source={images.Tshirt1}
                />
              </View>

                </View>
                <View style={{flex:0.3,marginTop:10,padding:8}}>
                <Text style={{color:'#000', fontWeight:'500'}}>Kook N Keech Marvel</Text>
                  <Text style={{fontSize:10,fontWeight:'500'}}>
                    Men Printed sweatShirt
                  </Text>
                  <View style={{flexDirection:'row', }}>
                    <Text style={{fontSize:10,color:'#707070',fontWeight:'500'}}>&#8377;600.00</Text>
                    <Text style={{fontSize:10,
                      marginLeft:5,
                      textDecorationLine: 'line-through',color:'#b7b7b7',fontWeight:'500'}}>&#8377;800.00</Text>
                      <Text style={{fontSize:10,color:'red',fontWeight:'500'}}>(20% off)</Text>
                  </View>
                </View>

              </View>

          </View>
</View>
 )
})}

          </TouchableOpacity>
         
      </ScrollView>
          
                   
    </View>
  )
}




const styles = StyleSheet.create({
  
});