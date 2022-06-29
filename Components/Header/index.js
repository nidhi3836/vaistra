import { View, Text, Image, Dimensions } from 'react-native'
import React, {useEffect, useState} from 'react'
import UseOrientation from '../../Screens/UseOrientation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import { heightToDp } from '../../variable';


const Header = ({
  title,
  backgroundColor,
  image,
  image1,
  image2,
  onPress,
  onPress2,
  onPress3

}) => {

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

  console.log('title',title)
  return ( 
      <LinearGradient
        style={{ height: heightToDp('7%')}}
        colors={['#ED4343', '#A52021']} >

        <View style={{flex: 1,
         flexDirection: 'row',
          //
         
        }}>
          <View style={{ flex: 0.9,
             flexDirection: 'row',
             height: UseOrientation.height / 14,
             alignItems:'center',
             
          }}>

          <View style={{ flex:0.1, 
            justifyContent:'center',
            marginLeft: 10,alignItems:'center',flexDirection:'row', 
           
            }}>

            <TouchableOpacity onPress={onPress}>
              <Image
                resizeMode='contain'
                style={{ height: UseOrientation.height,

                  }}
                source={image}              
                />
            </TouchableOpacity>


            </View>

            {/* <View style={{ marginLeft: 5, flex:0.03, }}>
            
          </View>  */}
           <View style={{  flex:0.35,
          //  marginRight : 50,
          justifyContent:'center',
          // alignItems:'center'
          }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold',
          
          }}>
              {title}
            </Text>
            <TouchableOpacity  
             onPress={onPress2}>
              <Image
                resizeMode='contain'
                style={{ 
                  // height: UseOrientation.height /9,
                   width: UseOrientation.width / 5,                 
                  }}
                source={image1}
                />
            </TouchableOpacity> 
           </View>
          </View>

         
          <View style={{flex: 0.12,  justifyContent:'center',alignItems:'center'
            //  marginLeft : orientations !='landscape' ? "5%" : "85%",backgroundColor:'#000'
           }}>
            <TouchableOpacity  
             onPress={onPress3}>
              <Image
                resizeMode='contain'
                style={{ 
                  height: UseOrientation.height /11,
                   width: UseOrientation.width / 13,
                  //  alignSelf:'flex-end'
                  }}
                source={image2}
                />
            </TouchableOpacity>
           
            </View>  
        </View>
       </LinearGradient>   
  )
}
export default Header