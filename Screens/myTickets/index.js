import { View, Text } from 'react-native'
import React from 'react'
import UseOrientation from '../UseOrientation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Unsigned from './topScreens/unsigned';
import Open from './topScreens/Open';
import Resolved from './topScreens/Resolved';
import Header from '../../Components/Header';
import images from '../../Components/images';
import AppStack from '../AppStack';


const Tab = createMaterialTopTabNavigator();
export default function MyTicktes({navigation}) {

  return (
    <>
<View>
    <Header 
    image={images.left}
    onPress = {()=>navigation.navigate(AppStack)}
    title={'My Tickets'}
    />
    </View>
    <Tab.Navigator     
    initialRouteName='Unsigned'    
    screenOptions={{      
      tabBarShowLabel : true,
      // tabBarLabelStyle: { fontSize: 12 },
        // tabBarItemStyle: { backgroundColor:'#d5d5d5' },      
      tabBarActiveTintColor :"#fff",
      tabBarInactiveTintColor:'#000',
      tabBarStyle: {
        backgroundColor: '#fff' ,
        margin : 20,
        borderRadius : 8,
       height:40,
      //  borderRightWidth:2,
        //  flex:0.1,
    },
     }}     
    >
      <Tab.Screen name='Unsigned'
        component={Unsigned}
        options={{  
          tabBarIndicatorStyle : {backgroundColor:'#D63737', height : 40,
          borderTopLeftRadius : 5, borderBottomLeftRadius : 5
          }, 
          // tabBarItemStyle: { backgroundColor:'red' },    
          tabBarActiveTintColor :"#fff",       
          tabBarLabel:'',
       tabBarIcon: ({focused}) => (
       <View style={{ 
         width:UseOrientation.width / 7,
        //  backgroundColor:'gray',
         marginHorizontal:-15 }}>
         <Text  style={{ fontSize:12,color : focused ? '#fff' : 'red', fontWeight:'500',}}>
         Unsigned </Text>
       </View>
     )
   }} />

       <Tab.Screen 
      name='Open'
      component={Open}
      options={{      
        tabBarIndicatorStyle : {backgroundColor:'#D63737', height : 40,
          
          },      
        tabBarLabel:'',
     tabBarIcon: ({focused}) => (
     <View style={{ width:UseOrientation.width / 7,
     marginHorizontal:-5
     }}>
       <Text  style={{ fontSize:12, color : focused ? '#fff' : 'red', fontWeight:'500', }}>
       Open</Text>
     </View>
   )
 }} />

<Tab.Screen 
      name='Resolved'
      component={Resolved}
      options={{            
        tabBarIndicatorStyle : {backgroundColor:'#D63737', height : 40,
      borderTopRightRadius : 5, borderBottomRightRadius : 5
      }, 
        tabBarLabel:'',
     tabBarIcon: ({focused}) => (
     <View style={{  width:UseOrientation.width / 7,
     marginHorizontal:-12
         }}>
       
       <Text  style={{ fontSize:12, color : focused ? '#fff' : 'red', fontWeight:'500',  }}>
       Resolved</Text>
     </View>
   )
 }} />
     
    </Tab.Navigator> 
    </>
  )
}