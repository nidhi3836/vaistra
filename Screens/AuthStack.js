
import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './Splash'
import OnBoarding from './OnBoarding'
import EditProfile from './EditProfile'
import CodeVerification from './CodeVerification'
import ForgotPass from './ForgotPass'
import ResetFile from './Reset'
import Login from './Login'
import FileOne from './ProgrssFiles/fileOne'
import Second from './ProgrssFiles/fileTwo'
import ThirdFile from './ProgrssFiles/FileThree'
import Fourth from './ProgrssFiles/FileFour'
import Home from './Home';
import AppStack from './AppStack'
import SecondFile from './ChanePassword/SecondFile'
import SelectBrand from './SelectBrand'
import BlurBackground from './BlurBackground'
import DrawerFile from './Drawer'
import Analytics from './Analytics'
import Product from './YourProduct/product'
import Notification from './Notification'
import HomeOnBoarding from './Home/onBoarding'
import ActivePage from './TopScreens/ActivePage'
import MyTicktes from './myTickets'
import Customers from './Customers'
import CustomerDetails from './Customers/customerdetails'


const Stack = createStackNavigator();
function AuthStack() {

    return (
        <Stack.Navigator initialRouteName='CustomerDetails' >  

             <Stack.Screen name='Splash' component={Splash} options={{ header: () => null }} />
              <Stack.Screen name='Fourth' component={Fourth}options={{header: () => null }} />
             <Stack.Screen name='AppStack' component={AppStack} options={{ header: () => null }} /> 
             <Stack.Screen name='ForgotPass' component={ForgotPass} options={{ header: () => null }} />
            <Stack.Screen name='FileOne' component={FileOne}
                options={{
                    header: () => null }}
                 />
              <Stack.Screen name='Second' component={Second} 
            options={{header: () => null }}
            />
            <Stack.Screen name='Login' component={Login} options={{ header: () => null }} />
            <Stack.Screen name='CodeVerification' component={CodeVerification}
                options={{ header: () => null }}               
            />
        <Stack.Screen name='EditProfile' component={EditProfile}
                options={{header: () => null }} />
               
            <Stack.Screen name='Analytics' component={Analytics}/> 
            <Stack.Screen name='SelectBrand' component={SelectBrand} 
            options={{
                    header: () => null }} />
            <Stack.Screen name='BlurBackground' component={BlurBackground} options={{ header: () => null }} />

            <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ header: () => null }} />
            <Stack.Screen name='ThirdFile' component={ThirdFile}  options={{header: () => null }}/>          
           
            <Stack.Screen name='ResetFile' component={ResetFile} options={{ header: () => null }} />

           <Stack.Screen name='Home' component={Home}/>  

            <Stack.Screen name='SecondFile' component={SecondFile} options={{ header: () => null }} /> 
            <Stack.Screen name='Product' component={Product} options={{ header: () => null }} /> 
            <Stack.Screen name='Notification' component={Notification} options={{ header: () => null }} /> 
            <Stack.Screen name='HomeOnBoarding' component={HomeOnBoarding} options={{ header: () => null }} /> 
            <Stack.Screen name='ActivePage' component={ActivePage} options={{ header: () => null }} /> 
            <Stack.Screen name='MyTicktes' component={MyTicktes} options={{ header: () => null }} /> 
            <Stack.Screen name='Customers' component={Customers} options={{ header: () => null }} /> 
            <Stack.Screen name='CustomerDetails' component={CustomerDetails} options={{ header: () => null }} /> 
        </Stack.Navigator>

    )
}

export default AuthStack