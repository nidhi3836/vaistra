
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
import SelectBrand from './SelectBrand/index'
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
import OrderDetails from './Customers/OrderDetails'
import Payments from './Payments'
import ChangePassword from './ChanePassword'
import EditAddress from './EditAddress'
import BankDetails from './BankDetails'
import EditBank from './EditBank'
import DrawerContent from './DrawerContent'
import Reviews from './Reviews'
import Filters from './Filters'
import Unsigned from './myTickets/topScreens/unsigned'
import Open from './myTickets/topScreens/Open'
import Resolved from './myTickets/topScreens/Resolved'
import SecondTicket from './myTickets/SecondTicket'
import Reply from './myTickets/reply'
import ResponsTicket from './myTickets/responsTicket'
import EditProduct from './YourProduct/EditProduct'
import ProductDetails from './ProductDetails'
import AddVarient from './ProductDetails/AddVarient'
import AdditionalDetail from './ProductDetails/AdditionalDetail'
import EMIProduct from './ProductDetails/EMIProduct'
import StockManage from './StockManage'
import AddImage from './ProductDetails/AddImage'
import YourProduct from './YourProduct'
import EditVarients from './ProductDetails/EditVarients'
import Total from './Analytics/topFiles/Total'
import Cancel from './Analytics/topFiles/Cancel'
import SecondBlurBg from './SecondBlurBg'

const Stack = createStackNavigator();
function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='EditProduct' >
            <Stack.Screen name='Splash' component={Splash} options={{ header: () => null }} />

            <Stack.Screen name='Fourth' component={Fourth} options={{ header: () => null }} />

            <Stack.Screen name='AppStack' component={AppStack} options={{ header: () => null }} />

            <Stack.Screen name='ForgotPass' component={ForgotPass} options={{ header: () => null }} />

            <Stack.Screen name='FileOne' component={FileOne}              options={{header: () => null }}
            />

            <Stack.Screen name='Second' component={Second}
                options={{ header: () => null }} />

            <Stack.Screen name='Login' component={Login} options={{ header: () => null }} />
            <Stack.Screen name='CodeVerification' component={CodeVerification}
                options={{ header: () => null }}
            />
            <Stack.Screen name='EditProfile' component={EditProfile}
                options={{ header: () => null }} />

            <Stack.Screen name='Analytics' component={Analytics}
                options={{ header: () => null }} />

            <Stack.Screen name='SelectBrand' component={SelectBrand}
                options={{ header: () => null}} />

            <Stack.Screen name='BlurBackground' component={BlurBackground} options={{ header: () => null }} />

            <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ header: () => null }} />

            <Stack.Screen name='ThirdFile' component={ThirdFile} options={{ header: () => null }} />


            <Stack.Screen name='ResetFile' component={ResetFile} options={{ header: () => null }} />

            <Stack.Screen name='Home' component={Home} options={{header: () => null }} />

            <Stack.Screen name='Product' component={Product} options={{ header: () => null }} />

            <Stack.Screen name='Notification' component={Notification} options={{ header: () => null }} />

            <Stack.Screen name='HomeOnBoarding' component={HomeOnBoarding} options={{ header: () => null }} />

            <Stack.Screen name='ActivePage' component={ActivePage} options={{ header: () => null }} />

            <Stack.Screen name='Customers' component={Customers} options={{ header: () => null }} />

            <Stack.Screen name='CustomerDetails' component={CustomerDetails} options={{ header: () => null }} />

            <Stack.Screen name='OrderDetails' component={OrderDetails} options={{ header: () => null }} />

            <Stack.Screen name='Payments' component={Payments} options={{ header: () => null }} />

            <Stack.Screen name='ChangePassword' component={ChangePassword} options={{ header: () => null }} />
            <Stack.Screen name='EditAddress' component={EditAddress} options={{ header: () => null }} />

            <Stack.Screen name='BankDetails' component={BankDetails} options={{ header: () => null }} />

            <Stack.Screen name='EditBank' component={EditBank} options={{ header: () => null }} />

            <Stack.Screen name='DrawerContent' component={DrawerContent} options={{ header: () => null }} />

            <Stack.Screen name='Reviews' component={Reviews} options={{ header: () => null }} />

            <Stack.Screen name='Filters' component={Filters} options={{ header: () => null }} />

            <Stack.Screen name='DrawerFile' component={DrawerFile} options={{ header: () => null }} />

            <Stack.Screen name='MyTicktes' component={MyTicktes} options={{ header: () => null }} />

            <Stack.Screen name='Unsigned' component={Unsigned} options={{ header: () => null }} />

            <Stack.Screen name='Open' component={Open} options={{ header: () => null }} />

            <Stack.Screen name='Resolved' component={Resolved} options={{ header: () => null }} />

            <Stack.Screen name='SecondTicket' component={SecondTicket} options={{ header: () => null }} />

            <Stack.Screen name='Reply' component={Reply} options={{ header: () => null }} />
            <Stack.Screen name='ResponsTicket' component={ResponsTicket} options={{ header: () => null }} />

            <Stack.Screen name='EditProduct' component={EditProduct} options={{ header: () => null }} />

            <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ header: () => null }} />

            <Stack.Screen name='AddVarient' component={AddVarient} options={{ header: () => null }} />

            <Stack.Screen name='AdditionalDetail' component={AdditionalDetail} options={{ header: () => null }} />

            <Stack.Screen name='EMIProduct' component={EMIProduct} options={{ header: () => null }} />

            <Stack.Screen name='StockManage' component={StockManage} options={{ header: () => null }} />

            <Stack.Screen name='AddImage' component={AddImage} options={{ header: () => null }} />

            <Stack.Screen name='YourProduct' component={YourProduct} options={{ header: () => null }} />

            <Stack.Screen name='EditVarients' component={EditVarients} options={{ header: () => null }} />

            <Stack.Screen name='Total' component={Total} options={{ header: () => null }} />

            <Stack.Screen name='Cancel' component={Cancel} options={{ header: () => null }} />

            <Stack.Screen name='SecondBlurBg' component={SecondBlurBg} options={{ header: () => null }} />           
            
        </Stack.Navigator>
    )
}

export default AuthStack