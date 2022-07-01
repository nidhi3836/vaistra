import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text , Image} from 'react-native'
import Home from './Home';
import OrderStatus from './OrderStatus';
import StockManage from './StockManage';
import YourProduct from './YourProduct';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AddProduct from './AddProduct';
import Header from '../Components/Header';
import images from '../Components/images';
import UseOrientation from './UseOrientation';
import Product from '../Screens/YourProduct/product'


const Tab = createBottomTabNavigator();
const BottomTag = () => {
  return (
    
    <Tab.Navigator     
    screenOptions={{
      headerShown : false,
    tabBarShowLabel : false, 
    tabBarStyle: { height:55,
  
  },
   }}     
    >        
       <Tab.Screen name="Home" component={Home} 
        options={{       
          headerShown : false,      
          // tabBarLabel:'',
        tabBarIcon: ({focused}) => (
        <View style={{   alignItems:'center', height:40   
            }}>
          <Image 
          resizeMode='contain'
          style={{height:25,width:25, 
          tintColor : focused ? 'red' : 'gray'}}
          source={images.House}/>
          <Text  style={{ fontSize:10, color : focused ? 'red' : 'gray', width:'100%',fontWeight:'500'}}>
            Home</Text>
        </View>
      )
    }} 
      
      /> 
     <Tab.Screen name="OrderStatus" component={OrderStatus}
       options={            
        {
          // headerShown: false,
          tabBarIcon: ({focused}) => (
        <View style={{ 
       alignItems:'center', alignItems:'center', height:40
      }}>
          <Image 
          resizeMode='contain'
          style={{height:25,width:25, 
          tintColor : focused ? 'red' : 'gray',}}
          source={images.addFile}/>
           <Text
           style={{ fontSize:10,color : focused ? 'red' : 'gray' ,
           width:'100%',fontWeight:'500'}}
           >OrderStatus</Text>
        </View>
      )
    
    }}
      />
      <Tab.Screen name="StockManage" component={StockManage}
       options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
        <View style={{ alignItems:'center', height:40 }}>
          <Image 
           resizeMode='contain'
          style={{height:27,width:25,tintColor : focused ? 'red' : 'gray'}}
          source={images.StockManage}/>
           <Text style={{ fontSize:10,color : focused ? 'red' : 'gray', width:'100%',fontWeight:'500' }}>StockManage</Text>
        </View>
      )
    
    }}
      />
      <Tab.Screen name="YourProduct" component={YourProduct}
       options={{ headerShown: false,tabBarIcon: ({focused}) => (
        <View style={{alignItems:'center', height:40 }}>
          <Image 
          resizeMode='contain'
          style={{height:25,width:25,
            tintColor : focused ? 'red' : 'gray'}}
          source={images.product}/>
           <Text style={{ fontSize:10,color : focused ? 'red' : 'gray', width:'100%',fontWeight:'500' }}>YourProduct</Text>
        </View>
      ),
    }}
      />
    <Tab.Screen name='add Product' component={AddProduct}
     options={{headerShown: false,
     tabBarIcon: ({focused}) => (
      <View style={{alignItems:'center', height:55  }}>
    <TouchableOpacity style={{top:-20, }}>
      <Image 
      resizeMode='cover'     
      source={images.plus}/>       
    </TouchableOpacity>
    <Text style={{ fontSize:10,color : focused ? 'red' : 'gray', bottom:8,
  width:"100%",fontWeight:'500' }}>Add Product</Text>    
    </View>
  ),
}}
    /> 

    </Tab.Navigator>
    
  )
}

export default BottomTag