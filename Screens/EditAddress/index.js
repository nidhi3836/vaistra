import React, {useState} from 'react'
import { Image, ScrollView, StyleSheet, Text, View,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
 import InputText from '../../Components/InputText';
import images from '../../Components/images';
import Header from '../../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { heightToDp } from '../../variable';
import AppStack from '../AppStack';
import UseOrientation from '../UseOrientation';

export default function EditAddress({navigation}) {  

  const [address, setAddress] = useState('');


  const handleCheckEmail = (text) => {
    setAddress(text);
  }

  return (
<>
<Header 
 image={images.leftArrow}
 title={'Edit Address'}
 onPress={()=>navigation.navigate('AppStack')}
/>
<ScrollView style={{}}>
    <View style={{height:heightToDp('100%')}}>    
 
    <View style={{backgroundColor:"#fff",flex:0.9,}}>

            <View style={{ marginTop:20,borderStartColor:'#000'}}>
                <Text style={{marginLeft:20,fontSize:22,fontWeight:"700",color:'black',margin:5,}}>Pick Up Address</Text>
             
                <View style={[styles.InputText, { paddingLeft: 30 , borderColor:'#Ed4343'}]}>
            <InputText
              style={
                {
                  height: 40,
                  padding: 10,
                  marginRight: 40,
                }
              }
              onChangeText={(text) => { setAddress( address) }}
              value={address}
              placeholder="Use my Current Location"
              placeholderTextColor="red"

            />
            <View style={{ position: 'absolute', top: 10, marginLeft: 10 }}>
              <Image source={images.accurate}
              resizeMode='contain'
                style={{ height: 20, width: 25 }} />
            </View>
          </View>                
           
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Vagheshwari plot, Porbandar"
              placeholderTextColor="#818181"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{width:48,}]} >Address</Text>
            </View>
          </View>   
          
          
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Devdarshan Apartment, Porbandar"
              placeholderTextColor="#818181"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{ width: 80, }]}>Locality/Town</Text>
            </View>
          </View>   
          
              
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="Near Jay Hospital"
              placeholderTextColor="#818181"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{ width: 120, }]} >Near by famous Place</Text>
            </View>
          </View>
 
          <View style={styles.InputText}>
              <InputText
              onChangeText={(text) => { console.log('text', text) }}
              placeholder="360578"
              placeholderTextColor="#818181"
            />
            <View style={styles.TextInputView}>
              <Text style={[styles.TextInputLabel,{ width: 55, }]} >Pin Code</Text>
            </View>
          </View> 
              
          {/* <LinearGradient
                   style={{
                    marginLeft: 20,                  
                    justifyContent:"center",
                    marginRight: 20,
                    height:40,
                    borderRadius:8,
                    alignItems:'center',
                    marginTop:20,
                }} 
                    colors={['#ED4343', '#A52021']} >
 <TouchableOpacity onPress={()=>navigation.navigate('ForgotPass')}
                  
            >
                <Text style={{color:"#ffffff",
                              fontSize:18,
                              fontWeight:"500"}}>Save Details</Text>

              </TouchableOpacity>
</LinearGradient> */}

{ address == "" ? 
              <View style={[styles.change, { opacity: 0.6,}]}>                  
                <LinearGradient                  
                  style={{ borderRadius: 5 }}
                  colors={['#ED4343', '#A52021']} >
                  <TouchableOpacity 
                  disabled
                  onPress={handleCheckEmail}>
                    
                    <View style={[styles.changeView, ]}>
                      <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                       Save Details
                      </Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
:
              <View style={styles.change}>
                <LinearGradient
                  style={{ borderRadius: 5 }}
                  colors={['#ED4343', '#A52021']} >
                  <TouchableOpacity onPress={() => navigation.navigate('ResetFile')}>
                    <View style={styles.changeView}>
                      <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                        Send Link
                      </Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>

                    }

             
            </View>
        </View>
        </View>
        </ScrollView>
        </>
  )
}

const styles = StyleSheet.create({
  InputText : {
    borderWidth : 1,
    borderColor:'#707070',
    marginLeft:20,
    marginRight : 20,
 borderRadius : 5,
 height : 40,
 paddingLeft : 20,
 marginBottom : 20,
 backgroundColor:'#FFFFFF',
 margin:5,
 

  },
  TextInputView :{
    justifyContent:'center',
    alignContent:'center',
    position:'absolute',
    left:25,
    top:-15,
    paddingTop:5
  },
  TextInputLabel :{
    padding:0,
    
     color:'red',
     fontSize:10,
     marginBottom:10,
     backgroundColor:'white',
     alignContent:'center',
     paddingLeft:5,
     fontWeight:'500'
  },
  change: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,

  },
  changeView: {
    width: UseOrientation.width / 1.1,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
  },

 

})