import {  Text,View,Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TouchableOpacity } from 'react-native-gesture-handler'
import images from '../../Components/images'
import ActivePage from '../TopScreens/ActivePage'
import Complete from '../TopScreens/Complete'
import UseOrientation from '../UseOrientation'
import Cancel from './topFiles/Cancel'
import Total from './topFiles/Total'
import Header from '../../Components/Header'
import AppStack from '../AppStack'


const Tab = createMaterialTopTabNavigator();


export default function Analytics({navigation}) {
  return (
    <View style={{height : UseOrientation.height,backgroundColor:'#fff',}}>
  <Header 
  image={images.left}
  onPress ={()=> navigation.navigate('AppStack')}
  />  
      <View style=
      {{flex : 0.1 , justifyContent : 'center', alignItems : 'center', margin : 10,backgroundColor:'#fff',}}>
          <Text style ={{fontSize : 22, fontWeight : '500', color : '#444'}}>
            Order
          </Text>
      </View>
        <Tab.Navigator     
        initialRouteName='ActivePage'    
        screenOptions={{      
          tabBarShowLabel : true,
          tabBarLabelStyle: { fontSize: 12 },
            // tabBarItemStyle: { width: 100 },      
          tabBarActiveTintColor :"#fff",
          tabBarInactiveTintColor:'#000',
          tabBarStyle: {
            backgroundColor: '#fff' ,
          //  height:35,
           margin : 15,
  // backgroundColor  : '#000'
           borderRadius:5,
             flex:0.099,
        },
         }}     
        >
          <Tab.Screen name='Total'
            component={Total}
            options={{   
              tabBarIndicatorStyle : {backgroundColor:'#D63737', height : 47,
              borderTopLeftRadius : 5, borderBottomLeftRadius : 5,
              }, 
              
              tabBarLabel:'',
           tabBarIcon: ({focused}) => (
           <View style={{ 
             width:UseOrientation.width / 5,
            //  backgroundColor:'gray',
             marginHorizontal:-20 }}>
             <Text  style={{ fontSize:13,color : focused ? '#fff' : '#000', fontWeight:'500',}}>
               Total Order</Text>
           </View>
         )
       }} />
  
           <Tab.Screen 
          name='Complete'
          component={Cancel}
          options={{    
            tabBarIndicatorStyle : {backgroundColor:'#D63737', height : 47,
              borderTopRightRadius : 5, borderBottomRightRadius : 5,
              },         
            tabBarLabel:'',
         tabBarIcon: ({focused}) => (
         <View style={{ width:UseOrientation.width / 4,
         marginHorizontal:-22
         }}>
           <Text  style={{ fontSize:13, color : focused ? '#fff' : '#000', fontWeight:'500', }}>
             Cancel Order</Text>
         </View>
       )
     }} 
          /> 
        </Tab.Navigator> 
  
  
        </View>
      
    )
}