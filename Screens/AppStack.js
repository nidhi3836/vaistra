import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import DrawerContent from './DrawerContent';
import AddProduct from './AddProduct';
import DrawerFile from './Drawer';
import BottomTag from './BottomTag';
import OrderStatus from './OrderStatus';
import TopTab from './TopTab';


const Drawer = createDrawerNavigator();
 function AppStack() 
 {
  return (
    <>
    <Drawer.Navigator initialRouteName='Home'
    drawerContent={props => <DrawerContent {...props} />} >
         {/* <Drawer.Screen name='Home' component={Home} 
         options={{title : '',}}
         /> */}
           {/* <Drawer.Screen name='DrawerFile' component={DrawerFile}  /> */}
           <Drawer.Screen name='BottomTag' component={BottomTag} options={{headerShown:false}}/>
           {/* <Drawer.Screen name='Home' component={Home} options={{headerShown:false}}/> */}
           <Drawer.Screen name='TopTab' component={TopTab} />    
           <Drawer.Screen name='AddProduct' component={AddProduct}  
           options={{headerShown:false}}
           />
           
         </Drawer.Navigator>
         </>  
  )
}

export default AppStack