import React, {useEffect, useRef,useState} from 'react'
import { View, Text,Animated, Image, StatusBar, } from 'react-native'
import images from '../Components/images';

const FadeInView = (props) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;    
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 2,
          duration: 2000,
          useNativeDriver: true
        }
      ).start();
    }, [fadeAnim]) 
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, 
          transform : [{
            scale : fadeAnim.interpolate({
              inputRange: [0,1],
              outputRange: [0.9, 3]
            })
          }]        // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
function Splash({navigation}) {
    setTimeout(() => {
        navigation.navigate('OnBoardingScreen')    
      }, 2000);
            const styleTypes = ['default','dark-content','light-content']
            const [visibleStatusBar, setvisibleStatusBar] = useState(true);
            const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  return (
    <View style={{flex:1,justifyContent: 'center',alignItems:'center',
    // backgroundColor:'red'
    }}>
    <StatusBar
        barStyle={styleStatusBar}
        hidden={visibleStatusBar}
        />    
          <FadeInView 
    style={{ 
}}>
      <View style={{ backgroundColor:'red' ,borderRadius:200,
    height:250,justifyContent:'center',width:250,
    alignItems:'center',
}}/>  
</FadeInView>
    <Image 
      style={{marginBottom:70,alignSelf:'center',position:'absolute'}}
    source={images.Vaistralogo} />
  
  
      {/* </View> */}
     
  </View>
  )
}
export default Splash