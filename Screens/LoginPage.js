import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { heightToDp } from '../variable'
import images, { background } from '../Components/images'

export default function LoginPage({navigation}) {


    const [password, setPassword] = useState(password)
  return (
    <ScrollView>
    <View style={{height:heightToDp('100%'),
    
    backgroundColor:'#02071A'}}>
        <View style={{flex : 0.3, 
    justifyContent:'center', alignItems:'center'
    }}>
            <Image 
            style={{height : 150, width : 150,marginTop : 50}}
            source={images.vermoLogo}
            />
        </View>
        <View style={{flex:0.07,  margin :10,marginTop : 30,
    justifyContent : 'space-between', flexDirection : 'row'
    }}>
        <TouchableOpacity 
       onPress={()=> Linking.openURL('https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en_US&gl=US')}
        style={{flex: 0.45, backgroundColor :'#D6D6D4',
    borderWidth : 1, borderRadius : 10,justifyContent:'center', alignItems:'center'
    }}>
           <View style={{flexDirection : 'row', justifyContent:'center', alignItems:'center'
        }}>

        <Image 
        // resizeMode='contain'
        source={images.facebook}
        style={{height : 30, width : 30}}
        />
        <Text style={{fontSize : 17, paddingHorizontal: 15,
        color:'#000',fontWeight : '700'
        }}>Facebook</Text>
           </View>
        </TouchableOpacity>

        <TouchableOpacity 
         onPress={()=> Linking.openURL('https://www.google.com/')}
        style={{flex: 0.45, backgroundColor :'#D6D6D4', borderWidth : 1, borderRadius : 10,justifyContent:'center', alignItems:'center'
    }}>

 <View style={{flexDirection : 'row', justifyContent:'center', alignItems:'center'
        }}>

        <Image 
        // resizeMode='contain'
        source={images.Google}
        style={{height : 30, width : 30}}
        />
        <Text style={{fontSize : 17, paddingHorizontal: 15,
        color:'#000',fontWeight : '700'
        }}>Google</Text>
           </View>
        </TouchableOpacity>
        </View>

<View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize : 18, paddingHorizontal: 15,
        color:'#fff',fontWeight : '700'
        }}>Or</Text>
</View>

<View style={{flex:0.07,marginHorizontal : 20,
borderBottomColor : '#7A8090', borderBottomWidth : 1
}}>
    <TextInput 
    keyboardType='email-address'
    placeholder='Email ID'
    placeholderTextColor={'#7A8090'}
    color = '#fff'
    /> 

</View>

<View style={{flex:0.07, marginHorizontal : 20,marginTop : 20,
borderBottomColor : '#7A8090', borderBottomWidth : 1
}}>
    <TextInput 
    secureTextEntry = {password}
    keyboardType='default'
    placeholder='PassWord'    
    placeholderTextColor={'#7A8090'}
    color = '#fff'    
    /> 

<View style={{ position: 'absolute',
                             right: 10, }}>
                                <TouchableOpacity onPress={() => setPassword(!password)}>
                                    <Image source={password ? images.closeEye : images.openEye}
                                        style={{ resizeMode: 'contain', height: 30, top: 5 , color : "#fff"}} />
                                </TouchableOpacity>
                            </View>

</View>

<View style={{flex:0.05, marginTop : 5,
justifyContent:'center',
}}>
    <TouchableOpacity >
        <Text style={{alignSelf : 'flex-end',marginRight : 20,
    color : '#7A8090',fontWeight : '700'
    }}>Forgot Password ?</Text>
        </TouchableOpacity> 
    
</View>

<TouchableOpacity style={{flex : 0.08, backgroundColor : '#CF2451', marginHorizontal  :20, top : 30,
borderRadius : 7,justifyContent:'center',alignItems:'center'
}}
onPress={() => navigation.navigate('RegisterPage')}
>
    <Text  style={{ color : '#fff',fontSize : 22, fontWeight : "800"
    }}>Login</Text>
</TouchableOpacity>

<View style={{flex:0.05, bottom : -60,
justifyContent:'center',flexDirection : 'row'
}}>
    <Text style={{
    color : '#fff',fontWeight : '500'
    }}>
        Don't have an Account?
    </Text>
    <TouchableOpacity 
    onPress={()=> navigation.navigate('RegisterPage')}
    >
        <Text style={{
    color : '#CF2451', fontWeight : '500'
    }}> Register now</Text>
        </TouchableOpacity> 
    
</View>

    </View>
    </ScrollView>
  )
}