import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightToDp } from '../variable'
import images, { background } from '../Components/images'
export default function RegisterPage({navigation})  {

    const Register = () => {
        alert('Thank You For Registration : )')
    }
    return (
      <ScrollView >
      <View style={{height:heightToDp('100%'),
      
      backgroundColor:'#02071A'}}>
          <View style={{flex : 0.1, 
      justifyContent:'center', marginTop : 50,marginHorizontal : 20,
      }}>
             <Text style={{fontSize : 28, 
          color:'#C9CBCC',fontWeight : '700'
          }}>Register to Vermo</Text>
          </View>
         
  
  <View style={{flex:0.07,marginHorizontal : 20,marginTop : 20,
  borderBottomColor : '#7A8090', borderBottomWidth : 1
  }}>
      <TextInput 
      keyboardType='default'
      placeholder='Full Name'
      placeholderTextColor={'#7A8090'}
      color = '#fff'
      /> 
  
  </View>
  
  <View style={{flex:0.07, marginHorizontal : 20,marginTop : 20,
  borderBottomColor : '#7A8090', borderBottomWidth : 1
  }}>
      <TextInput 
      keyboardType='visible-password'
      placeholder='Email'
      placeholderTextColor={'#7A8090'}
      color = '#fff'
      // secureTextEntry='password'
      /> 
  
  </View>

  <View style={{flex:0.07,marginHorizontal : 20,marginTop : 20,
  borderBottomColor : '#7A8090', borderBottomWidth : 1
  }}>
      <TextInput 
      keyboardType='number-pad'
      placeholder='Mobile Number'
      placeholderTextColor={'#7A8090'}
      color = '#fff'
      /> 
  
  </View>

  <View style={{flex:0.07,marginHorizontal : 20,marginTop : 20,
  borderBottomColor : '#7A8090', borderBottomWidth : 1
  }}>
      <TextInput 
      keyboardType='name-phone-pad'
      placeholder='Password'
      placeholderTextColor={'#7A8090'}
      color = '#fff'
      /> 
  
  </View>

  <View style={{flex:0.07,marginHorizontal : 20,marginTop : 20,
  borderBottomColor : '#7A8090', borderBottomWidth : 1
  }}>
      <TextInput 
      keyboardType='name-phone-pad'
      placeholder='Confirm Password'
      placeholderTextColor={'#7A8090'}
      color = '#fff'
      /> 
  
  </View>

  
  
  <View style={{flex:0.11, marginTop : 5,
  justifyContent:'center',marginHorizontal : 20,alignItems : 'center'
  }}>
     <View style={{flexDirection : 'row',flex : 0.4, alignItems : 'center'}}>

      <Text style={{color : '#7A8090', fontWeight : "500"}}> By Registring you agree to </Text>
      <Text  style={{color : '#CF2451', fontWeight : "500"}}>Terms and Conditions</Text>
     </View>
     <View style={{flexDirection : 'row',flex : 0.4, alignItems : 'center'}}>

    <Text  style={{color : '#7A8090', fontWeight : "500"}}> and the </Text>
    <Text style={{color : '#CF2451', fontWeight : "500"}}> Privacy Policy</Text>
    <Text  style={{color : '#7A8090', fontWeight : "500"}}> of the Vermo </Text> 
      
     </View>
  </View>
  
  <TouchableOpacity style={{flex : 0.09, backgroundColor : '#CF2451', marginHorizontal  :20, top : 30,
  borderRadius : 7,justifyContent:'center',alignItems:'center'
  }}
  onPress={Register}
  >
  
      <Text  style={{ color : '#fff',fontSize : 22, fontWeight : "800"
      }}>Register</Text>
  </TouchableOpacity>
  
  <View style={{flex:0.05, bottom : -60,
  justifyContent:'center',flexDirection : 'row'
  }}>
      <Text style={{
      color : '#fff',fontWeight : '500'
      }}>
         Already have an Account ? 
      </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('LoginPage')}>
          <Text style={{
      color : '#CF2451', fontWeight : '500', fontSize : 15
      }}> Sign In</Text>
          </TouchableOpacity> 
      
  </View>
  
      </View>
      </ScrollView>
    )
  }