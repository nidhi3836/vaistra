import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Onboarding from 'react-native-onboarding-swiper'
import images from '../Components/images';

function OnBoarding ({navigation})  
{
 
  const Done = ()=>{
    return(
      <View>
        <Ripple 
        onPress ={()=> navigation.navigate('EditProfile')}
        >
        <Text style={{color:'black',marginRight:24}}>Done</Text>
        </Ripple>
      </View>
    )
  }  
  return (

    <Onboarding   
    DoneButtonComponent={Done}
    showDone={true}
    bottomBarHighlight={false}
    showSkip={false}
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
        color : "red",
        fontSize : 26,
        fontWeight : '600'
    },
})