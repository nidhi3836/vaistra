import { View, Text, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, PixelRatio } from 'react-native'
import React, { useState } from 'react'
import images from '../Components/images';

export default function Slider() {

    const [sliderState, setSliderState] = useState({ currentPage: 1 });
    const { width, height } = Dimensions.get('window');
  
    const setSliderPage = (event ) => {
      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.floor(x / width);
      if (indexOfNextScreen !== currentPage) {
        setSliderState({
          ...sliderState,
          currentPage: indexOfNextScreen,
        });
      }
    };
  
    const { currentPage: pageIndex } = sliderState;
  
  return (
    <SafeAreaView style={{ flex: 0.8, backgroundColor :'red' }}>
    <ScrollView
      style={{ flex: 0.5,backgroundColor :'red' }}
      horizontal={true}
      scrollEventThrottle={16}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}

      onScroll={(event) => {
        setSliderPage(event);
      }}
    >
       {/* <View style={{ width, 
        height , 
        backgroundColor :"#d5d5d5"}}>
        <View style={{ backgroundColor : '#fff'}}>
       
        <Image 
        resizeMode='contain'
        source={images.Group3702} style={styles.imageStyle} />
        </View>   
        
      </View> */}
      <View style={{ width, 
        height , 
        backgroundColor :"#d5d5d5"}}>
        <View style={{ backgroundColor : '#fff'}}>
       
        <Image 
        resizeMode='contain'
        source={images.Group3701} style={styles.imageStyle} />
        </View>   
        
      </View>
      <View style={{ width, 
        height , 
        backgroundColor :"#d5d5d5"}}>
              
        <Image 
        resizeMode='contain'
        source={images.Group3702} style={styles.imageStyle} />
       
        
      </View>
      <View style={{ width, 
        height , 
        backgroundColor :"#d5d5d5"}}>
              
        <Image 
        resizeMode='contain'
        source={images.Group3702} style={styles.imageStyle} />
       
        
      </View>
     
      <View style={styles.paginationWrapper}>
      {Array.from(Array(3).keys()).map((key, index) => (
        <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
      ))}
    </View>
    </ScrollView>
    
  </SafeAreaView>

  )
}
const styles = StyleSheet.create({
    imageStyle: {
      height: PixelRatio.getPixelSizeForLayoutSize(100),
      width: '100%',
    //   marginBottom : "90%"
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    paginationWrapper: {
      position: 'absolute',
      bottom: 200,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    paginationDots: {
      height: 12,
      width: 19,
      top : 100,
      borderRadius: 10 / 2,
      backgroundColor: '#ED4343',
      marginLeft: 30,
      
    },
  });