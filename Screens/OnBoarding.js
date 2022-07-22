import { View, Text, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, PixelRatio, StatusBar } from 'react-native'
import React, { useState } from 'react';
import Ripple from 'react-native-material-ripple';
import Onboarding from 'react-native-onboarding-swiper'
import images from '../Components/images';

function OnBoarding ({navigation}){

  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const setSliderPage = (event) => {
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
  const Done = ()=>{
    return(
      <View>
        <Ripple 
        onPress ={()=> navigation.navigate('Login')}
        >
        <Text style={{color:'#B03B3C',marginRight:24,fontSize : 18,
      fontWeight :'700',}}>NEXT</Text>
        </Ripple>
      </View>
    )
  } 
  const next = () => {
    return(
      <View>
       <Ripple 
        onPress ={()=> navigation.navigate('Login')}
        >
        <Text style={{color:'#B03B3C',marginRight:24,fontSize : 18,
      fontWeight :'700',
      }}>SKIP</Text>
        </Ripple>
      </View>
    )
  } 
  // const Dot = () => {
  //   return(
  //     <View>
  //      <Ripple 
  //       onPress ={()=> navigation.navigate('Login')}
  //       >
  //      <View style={{backgroundColor:'#a5a3a3', height : 15}}>

  //      </View>
  //       </Ripple>
  //     </View>
  //   )
  // } 
  return (

    <Onboarding   
    DoneButtonComponent={Done}
    showDone={true}
    bottomBarHighlight={false}
    // showSkip={true}
    
    NextButtonComponent={next}    
    // DotComponent={Dot}
    do
      pages={[
          {
              backgroundColor: '#fff',
              image: <Image  source={images.Group785} />,
              title :<View><Text style={styles.title1}>Create your Online Store</Text></View>,
              subtitle:<View style={{marginTop:10}}><Text style={{fontWeight:'400',fontSize:16,textAlign:'justify'}}>
                  Become a seller on CleverTop and {'\n'}reach out to million of B2B buyers.</Text></View>,    
         
        },
        {
              backgroundColor: '#fff',
              image: <Image source={images.Group3682} />,
              title: <View><Text style={styles.title1}>Create your Online Store</Text></View>,
              subtitle:<View style={{marginTop:10,}}><Text style={{fontWeight:'400',fontSize:16,textAlign:'center'}}>
              Expand your business by distributing {'\n'}your good online</Text></View>
        },
        { 
                backgroundColor: '#fff',
                image: <Image 
                style={{}}
                source={images.Group787} />,
                title:  <View ><Text style={styles.title1}>Manage from everywhere</Text></View>,

                subtitle: <View style={{marginTop:10,}}><Text style={{fontWeight:'400',fontSize:16,textAlign:'center'}}>
                Multiplying Your earning and use our {'\n'}suites of shipping payments, {'\n'}marketing, and other services</Text>   
                </View>
        }
      ]}
    />
   
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    title1 : {
        color : "#A52021",
        fontSize : 26,
        fontWeight : '600'
    },
})

// export default function OnBoarding({navigation}){
//   const [sliderState, setSliderState] = useState({ currentPage: 0 });
//   const { width, height } = Dimensions.get('window');

//   const setSliderPage = (event) => {
//     const { currentPage } = sliderState;
//     const { x } = event.nativeEvent.contentOffset;
//     const indexOfNextScreen = Math.floor(x / width);
//     if (indexOfNextScreen !== currentPage) {
//       setSliderState({
//         ...sliderState,
//         currentPage: indexOfNextScreen,
//       });
//     }
//   };
//   const { currentPage: pageIndex } = sliderState;

// return  ( 
// <>
// <StatusBar barStyle="dark-content" />
// <SafeAreaView style={{ flex: 1 }}>
//   <ScrollView
//     style={{ flex: 1 }}
//     horizontal={true}
//     scrollEventThrottle={16}
//     pagingEnabled={true}
//     showsHorizontalScrollIndicator={false}
//     onScroll={(event) => {
//       setSliderPage(event);
//     }}
//   >
//     <View style={{ width, height }}>
//       <Image source={images.Group3583} style={styles.imageStyle} />
//       <View style={styles.wrapper}>
//         <Text style={styles.header}>Nature Imitates Art</Text>
//         <Text style={styles.paragraph}>....something like that</Text>
//       </View>
//     </View>
//     <View style={{ width, height }}>
//       <Image
//         source={images.Group3682}
//         style={styles.imageStyle}
//       />
//       <View style={styles.wrapper}>
//         <Text style={styles.header}>High quality Art work</Text>
//         <Text style={styles.paragraph}>... for a fraction of the price</Text>
//       </View>
//     </View>
//     <View style={{ width, height }}>
//       <Image
//         source={images.Group3583}
//         style={styles.imageStyle}
//       />
//       <View style={styles.wrapper}>
//         <Text style={styles.header}>Top Notch Artists</Text>
//         <Text style={styles.paragraph}>... all in one place</Text>
//       </View>
//     </View>
    
   
//   </ScrollView>
//   <View style={styles.paginationWrapper}>
//     {Array.from(Array(3).keys()).map((key, index) => (
//       <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
//     ))}
//   </View>
// </SafeAreaView>
// </>
// );
// };

// const styles = StyleSheet.create({
// imageStyle: {
// height: PixelRatio.getPixelSizeForLayoutSize(145),
// width: '100%',
// },
// wrapper: {
// justifyContent: 'center',
// alignItems: 'center',
// marginVertical: 30,
// },
// header: {
// fontSize: 30,
// fontWeight: 'bold',
// marginBottom: 20,
// },
// paragraph: {
// fontSize: 17,
// },
// paginationWrapper: {
// position: 'absolute',
// bottom: 20,
// left: 0,
// right: 0,
// justifyContent: 'center',
// alignItems: 'center',
// flexDirection: 'row',
// },
// paginationDots: {
// height: 10,
// width: 10,
// borderRadius: 10 / 2,
// backgroundColor: '#0898A0',
// marginLeft: 10,
// },
// });