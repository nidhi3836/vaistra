import {  Text,View,Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ActivePage from './TopScreens/ActivePage';
import Complete from './TopScreens/Complete';
import Return from './TopScreens/Return';
import Cancel from './TopScreens/Cancel';
import UseOrientation from './UseOrientation';

const Tab = createMaterialTopTabNavigator();
export default function TopTab() {  

  return (
  //  <View style={{backgroundColor:'red', height:50}}>

  //  </View>
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
         height:45,

        //  borderRightWidth:2,
          //  flex:0.1,
      },
       }}     
      >
        <Tab.Screen name='ActivePage'
          component={ActivePage}
          options={{             
            tabBarLabel:'',
         tabBarIcon: ({focused}) => (
         <View style={{ 
           width:UseOrientation.width / 7,
          //  backgroundColor:'gray',
           marginHorizontal:-10 }}>
           <Text  style={{ fontSize:13,color : focused ? 'red' : '#000', fontWeight:'500',}}>
             Active </Text>
         </View>
       )
     }} 
        />

         <Tab.Screen 
        name='Complete'
        component={Complete}
        options={{             
          tabBarLabel:'',
       tabBarIcon: ({focused}) => (
       <View style={{ width:UseOrientation.width / 7,
       marginHorizontal:-15
       }}>
         <Text  style={{ fontSize:12, color : focused ? 'red' : '#000', fontWeight:'500', }}>
           Complete</Text>
       </View>
     )
   }} 
        />

<Tab.Screen 
        name='Return'
        component={Return}
        options={{             
          tabBarLabel:'',
       tabBarIcon: ({focused}) => (
       <View style={{  width:UseOrientation.width / 7,
       marginHorizontal:-8
           }}>
         
         <Text  style={{ fontSize:12, color : focused ? 'red' : '#000', fontWeight:'500',  }}>
           Return</Text>
       </View>
     )
   }} 
        />
        <Tab.Screen name="Cancel" component={Cancel} 
        options={{             
           tabBarLabel:'',
        tabBarIcon: ({focused}) => (
        <View style={{   width:UseOrientation.width / 7,
        marginHorizontal:-8
            }}>
          
          <Text  style={{ fontSize:12, color : focused ? 'red' : '#000', fontWeight:'500',marginRight:10 }}>
            Cancel</Text>
        </View>
      )
    }} 
      
      /> 
      </Tab.Navigator> 



    
  )
}