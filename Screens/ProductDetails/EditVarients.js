import React, { useState, useEffect } from 'react'
import { Text, View, TextInput,  Image, TouchableOpacity,ImageBackground,Dimensions ,ScrollView, StyleSheet} from 'react-native'
import images from '../../Components/images'
import LinearGradient from 'react-native-linear-gradient';

import UseOrientation from '../UseOrientation'
import { heightToDp } from '../../variable';
import InputText from '../../Components/InputText';
import EditProduct from '../YourProduct/EditProduct';

export default function EditVarients({navigation}) {
    console.log('UseOrientation', UseOrientation.height, UseOrientation.width)
    const [screenWidths, setScreenWidths] = useState('')
    const [screenHeight, setScreenHeight] = useState('')
    const [orientations, setOrientations] = useState(true)
    useEffect(() => {
        Dimensions.addEventListener('change', newDimensions => {
            let screenWidth = newDimensions.window.width;
            let screenHeight = newDimensions.window.height;
            setScreenWidths(newDimensions.window.width);
            setScreenHeight(newDimensions.window.height);
            setOrientations(screenWidth < screenHeight ? 'portrait' : 'landscape');
        });
    }, [orientations]);
    const [newPass, setNewPass] = useState(false)
    const [visible, setVisible] = useState(true)
    console.log('newPass', newPass)
    return   (
        <View style={{ justifyContent:'center',       
        }}>
            <ScrollView >
                
            <View style={{ position:'absolute',
             height:orientations !='landscape' ? UseOrientation.height * 1.1 :  UseOrientation.height * 2 
               }}>
                <Image
                    source={images.bg}
                    style={{ 
                           height:orientations !='landscape' ? UseOrientation.height  :  UseOrientation.height * 2 ,                     
                         width:  orientations !='landscape' ? UseOrientation.width  : screenWidths ,   
                         
                     }}
               />
            </View>

            <View style={{ width: '100%', top: '58%', backgroundColor: '#fff',
             height:orientations !='landscape' ? UseOrientation.height : UseOrientation.height * 2 ,
             borderTopLeftRadius:50,
             borderTopRightRadius:50,
             bottom : 20
             }}>

    <View style={{marginHorizontal:20, flex : 0.08,  top : 10, margin : 10, }}>
     <Text style={styles.LabelView}>Add Varients</Text>
       </View>

       <View style={{flex : 0.08, backgroundColor : '#000', marginHorizontal : 20,
    marginTop : 15,
    borderRadius: 5,
    backgroundColor: '#f6f6f6',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    marginBottom: 10,
    
    paddingLeft: 20,    
    }}
            >
                <InputText
                    // value={Interest}
                    // onChangeText={(text) => {setInterest(text) }}
                    placeholder="Product Key"
                    placeholderTextColor="#505050" />
               
            </View>


            <View style={{flex : 0.08, backgroundColor : '#000', marginHorizontal : 20,
    marginTop : 15,
    borderRadius: 5,
    backgroundColor: '#f6f6f6',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    marginBottom: 10,
    flexDirection : 'row' ,
    paddingLeft: 20, 
    justifyContent : 'space-between'   
    }}
            >
                <InputText
                    // value={Interest}
                    // onChangeText={(text) => {setInterest(text) }}
                    placeholder="Product Key"
                    placeholderTextColor="#505050" />
                    <Image 
                    resizeMode='contain'
                    style={{width : 30, right : 10}}
                    source={images.plus}/>
               
            </View>

            <TouchableOpacity onPress={ () => navigation.navigate (EditProduct)}
        
        >
     <View style={[styles.change,{marginTop : 30}]}>
                   <LinearGradient
                     style={{ borderRadius: 5 }}
                     colors={['#DE3F3F', '#BE3636','#A32E2E', ]} >
                    <View style={styles.changeView}>
                         <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 19 }}>
                           Submit
                         </Text>
                       </View>
                   
                   </LinearGradient>
                 </View>
                 </TouchableOpacity>
    

            </View>


            </ScrollView>
        </View>
    )
  }

  const styles = StyleSheet.create({
   
    LabelView : {
        fontSize:22,
        marginTop:10,
        fontWeight:"bold",
        color:'black',
        marginRight:170,
        //backgroundColor:'gray',
      

      },
      
    change : {
        // height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    //   marginTop : 10,

      
    },
    changeView : {
      width: UseOrientation.width/ 1.16,
      height: 45,
    //  flex : 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginHorizontal : 10,
     
    },
   
   
   
   
})