import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from '../DrawerContent/style'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import images from '../../Components/images'
import LinearGradient from 'react-native-linear-gradient'
import MyTicktes from '../myTickets'
import OrderStatus from '../OrderStatus'
import StockManage from '../StockManage'
import Customers from '../Customers'


export default function DrawerContent({navigation}) {
  return (
    <ScrollView>
    <View style={{backgroundColor:'white'}}>
       <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
    <LinearGradient
                    colors={['#ED4343', '#A52021']} >
    <View style={styles.View}>
    <ImageBackground
          style={{ width: 55, height: 45,margin:10 }}
          resizeMode="contain"
          source={require('../../images/dp.png')}>
          <Image
            style={{ marginLeft: 40, marginTop: 30, }}
            source={images.Group564}
             />
        </ImageBackground>
       
    <Text style={styles.name}>Jigar Thakrar</Text>
    </View>
    </LinearGradient>
    </TouchableOpacity>
    <View style={{marginTop:3}}>
    <TouchableOpacity onPress={()=>navigation.navigate('YourProduct')}>
    <View style={styles.categoryView}>
      <Image resizeMode='contain'
      style={{height:27,width:27,}}
      source={images.product}/>
      <Text style={{marginLeft:20,fontSize:11,fontWeight:'bold',color:'#808080'}}>YOUR PRODUCT{'\n'}
      <Text style={styles.subtitle}>View, Edit and Delete Your Profile</Text></Text>   
    </View>
    </TouchableOpacity>

       {/* <AddProduct /> */}
       <TouchableOpacity 
       onPress={()=>navigation.navigate('AddProduct')}>
    <View style={styles.categoryView}>
      <Image resizeMode='contain'
      style={{height:27,width:27,}}
      source={images.addFile}/>
      <Text style={styles.TextStyle}>ADD PRODUCT{'\n'}
      <Text style={styles.subtitle}>Add your new Product</Text></Text>   
    </View>
    </TouchableOpacity>


      {/* <StockManage /> */}
      <TouchableOpacity onPress={()=>navigation.navigate(StockManage)}>
      <View style={styles.categoryView}>
      <Image resizeMode='contain'
      style={{height:27,width:27,}}
      source={images.StockManage}/>
      <Text style={styles.TextStyle}>STOCK MANAGE{'\n'}
      <Text style={styles.subtitle}>Manage your Stock</Text></Text>   
    </View>
    </TouchableOpacity>

      {/* <OrderStatus /> */}
      <TouchableOpacity onPress={()=>navigation.navigate(OrderStatus)}>
      <View style={styles.categoryView}>   
       <Image resizeMode='contain'
      style={{height:27,width:27,}}
      source={images.addFile}/>
       <Text style={styles.TextStyle}>ORDERS{'\n'}
       <Text style={styles.subtitle}>View your Order Status</Text></Text>   
    </View>
    </TouchableOpacity>
      <View style={{height:3,backgroundColor:'#C5C5C5'}}/> 
    </View>

    <View style={{margin:3}}>

       {/* <Tickets/> */}
       <TouchableOpacity onPress={()=>navigation.navigate(MyTicktes)}>
       <View style={styles.categoryView}>
        <Image resizeMode='contain'
      style={{height:27,width:27,}}
      source={images.commentBubble}/>
       <Text style={styles.TextStyle}>TICKETS{'\n'}
       <Text style={styles.subtitle}>Client problem of your product</Text></Text>   
    </View>
    </TouchableOpacity>

       {/* <Reviews /> */}
       <TouchableOpacity onPress={()=>navigation.navigate('Reviews')}>
       <View style={styles.categoryView}>
      <Image 
      style={{height:27,width:27,}}
      source={images.criticism}/>
       <Text style={styles.TextStyle}>REVIEWS{'\n'}
       <Text style={styles.subtitle}>Your Product Reviews</Text></Text>   
    </View>
    </TouchableOpacity>
    
      {/* <Customers /> */}
      <TouchableOpacity onPress={()=>navigation.navigate(Customers)}>
      <View style={styles.categoryView}>
     <Image resizeMode='contain'
      style={{height:25,width:32,}}
      source={images.lineAngleRight}/>
       <Text style={styles.TextStyle}>CUSTOMERS{'\n'}
       <Text style={styles.subtitle}> your total Customers</Text></Text>   
    </View>
    </TouchableOpacity>

      {/* <Analytics/> */}
      <TouchableOpacity onPress={()=>navigation.navigate('Analytics')}>
      <View style={styles.categoryView}>    
        <Image 
      style={{height:25,width:32,}}
      source={images.businessPresentation}/>
       <Text style={styles.TextStyle}>ANALYTICS{'\n'}
       <Text style={styles.subtitle}> your total Customers</Text></Text>   
    </View>
    </TouchableOpacity>

      {/* <Payments /> */}
      <TouchableOpacity onPress={()=>navigation.navigate('Payments')}>
      <View style={styles.categoryView}>
      <Image 
      style={{height:27,width:27,}}
      source={images.moneyBack}/>
       <Text style={styles.TextStyle}>PAYMENTS{'\n'}
       <Text style={styles.subtitle}>Your all Product payment details</Text></Text>   
    </View>
    </TouchableOpacity>
      <View style={{height:3,backgroundColor:'#C5C5C5'}}/>
    </View>
    <View style={{margin:3}}>

      {/* Change Password */}
    <TouchableOpacity onPress={()=>navigation.navigate('ChangePassword')}>
    <View style={styles.categoryView}>
       <Image 
       style={{height:30,width:30,}}
       source={images.changePassword}/>
        <Text style={styles.TextStyle}>CHANGE PASSWORD{'\n'}
       <Text style={styles.subtitle}>Set your new password</Text></Text>   
    </View>
    </TouchableOpacity>
      
       {/* <EditAddress /> */}
       <TouchableOpacity onPress={()=>navigation.navigate('ThirdFile')}>
       <View style={styles.categoryView}>
      <Image 
      style={{height:30,width:30,}}
      source={images.officeAddress}/>
       <Text style={styles.TextStyle}>EDIT ADDRESS{'\n'}
       <Text style={styles.subtitle}>Change your pick-up address</Text></Text>   
    </View>
    </TouchableOpacity>
    
      {/* <BankDetails /> */}
      <TouchableOpacity onPress={()=>navigation.navigate('Fourth')}>
      <View style={styles.categoryView}>

      <Image resizeMode='contain'
      style={{height:30,width:30,}}
      source={images.bank}/>
      <Text style={styles.TextStyle}>EDIT BANK DETAILS{'\n'}
      <Text style={styles.subtitle}> Edit your bank details</Text></Text>   
    </View>
    </TouchableOpacity>
      <View style={{height:3,backgroundColor:'#C5C5C5'}}/>
    </View>

    <View>
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Login')}
    style={styles.touchable}>
        <Text style={styles.LogOut}>LOG OUT</Text>
    </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  )
}