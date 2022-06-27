import { View, Text, Dimensions, ScrollView , Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import UseOrientation from '../../UseOrientation'
import images from '../../../Components/images'
import { heightToDp, widthToDp } from '../../../variable'

export default function Complete() {
  const inputs = Array(3).fill('');

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
  const [view, setView] = useState({0:'', 1:'', 2:'', 3:''});
  return (
    <ScrollView style={{
      backgroundColor: '#fff',
      height: "100%",
      paddingTop: 15,
    
    }}>
     
     {inputs.map((inp, index)=> {
          return(
      <View 
      key={index.toString()}
      value={view[index]}
      style={{
        backgroundColor: '#fff', marginTop: 5, borderWidth: 1,
        marginHorizontal: 20, borderColor: '#d5d5d5',
        borderRadius: 6, marginBottom: 5

      }}>
        <View style={{
          padding: 10,
          backgroundColor: "#f6f6f6",
        }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#000', fontWeight: "500" }}>Vishakha Mehta</Text>
            <Text style={{ fontSize: 11 }}>
              Order ID : 23456</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 11, fontWeight: "500", color: '#b7b7b7' }}>Vagheshwari Plot, opp Vikas colony,</Text>
            <Text style={{ fontSize: 11, fontWeight: "500" }}>Total : 200.00</Text>
          </View>

          <Text style={{ fontSize: 11, fontWeight: "500", color: '#b7b7b7' }}>Ahmedabad, Gujarat : 360001</Text>
          <Text>24 jun, 20:00</Text>
        </View>

      

        <View style={{height:heightToDp('10%'),flexDirection:'row'}}>
            <View style={{flex:0.25,alignItems:'center',       
          }}>

            <Image
              resizeMode='cover'
              source={images.man}
              style={{ height: 70, width: 70,margin : 5 }}
            />
            </View>
            <View style={{flex:0.75,backgroundColor:'#fff'}}>
              <View style={{flex:0.333,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{ color: '#000', fontWeight: '500'}}>Kook N Keech Marvel</Text>
                  <Text  style={{fontSize: 11, fontWeight: '500'}}>{'Order Id' + ': 123456'} </Text>
              </View>
              <View style={{flex:0.333,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{ fontSize: 11, fontWeight: '500' }}>Men Printed SweatShirt</Text>
                  <Text  style={{ fontSize: 11, fontWeight: '500' }}>Price : &#8377; 400.00 </Text>
              </View>
              <View style={{flex:0.2,flexDirection:'row',}}>
              <View style={{
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    borderColor: '#d5d5d5', borderRadius: 4,
                  }}>
                    <Text style={{
                      fontSize: 10,
                    }}>Size : 30</Text>
              </View>
              <View style={{marginLeft:5,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    borderColor: '#d5d5d5', borderRadius: 4,
                  }}>
                    <Text style={{
                      fontSize: 10,
                    }}>Qty : 1</Text>
              </View>
            </View>
        </View>
      </View>

      <View style={{height:heightToDp('10%'),flexDirection:'row'}}>
            <View style={{flex:0.25,alignItems:'center',
          
          }}>

            <Image
              resizeMode='cover'
              source={images.man}
              style={{ height: 70, width: 70,margin : 5 }}
            />
            </View>
            <View style={{flex:0.75,backgroundColor:'#fff'}}>
              <View style={{flex:0.333,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{ color: '#000', fontWeight: '500'}}>Kook N Keech Marvel</Text>
                  <Text  style={{fontSize: 11, fontWeight: '500'}}>{'Order Id' + ': 123456'} </Text>
              </View>
              <View style={{flex:0.333,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{ fontSize: 11, fontWeight: '500' }}>Men Printed SweatShirt</Text>
                  <Text  style={{ fontSize: 11, fontWeight: '500' }}>Price : &#8377; 400.00  </Text>
              </View>
              <View style={{flex:0.2,flexDirection:'row',}}>
              <View style={{
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    borderColor: '#d5d5d5', borderRadius: 4,
                  }}>
                    <Text style={{
                      fontSize: 10,
                    }}>Size : 30</Text>
              </View>
              <View style={{marginLeft:5,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    borderColor: '#d5d5d5', borderRadius: 4,
                  }}>
                    <Text style={{
                      fontSize: 10,
                    }}>Qty : 1</Text>
              </View>
            </View>
        </View>
      </View>

      <View style={{height:heightToDp('10%'),flexDirection:'row'}}>
            <View style={{flex:0.25,alignItems:'center',
          
          }}>

            <Image
              resizeMode='cover'
              source={images.man}
              style={{ height: 70, width: 70,margin : 5 }}
            />
            </View>
            <View style={{flex:0.75,backgroundColor:'#fff'}}>
              <View style={{flex:0.333,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{ color: '#000', fontWeight: '500'}}>Kook N Keech Marvel</Text>
                  <Text  style={{fontSize: 11, fontWeight: '500'}}>{'Order Id' + ': 123456'} </Text>
              </View>
              <View style={{flex:0.333,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{ fontSize: 11, fontWeight: '500' }}>Men Printed SweatShirt</Text>
                  <Text  style={{ fontSize: 11, fontWeight: '500' }}>Price : &#8377; 400.00  </Text>
              </View>
              <View style={{flex:0.2,flexDirection:'row',}}>
              <View style={{
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    borderColor: '#d5d5d5', borderRadius: 4,
                  }}>
                    <Text style={{
                      fontSize: 10,
                    }}>Size : 30</Text>
              </View>
              <View style={{marginLeft:5,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    borderColor: '#d5d5d5', borderRadius: 4,
                  }}>
                    <Text style={{
                      fontSize: 10,
                    }}>Qty : 1</Text>
              </View>
            </View>
        </View>
      </View>
    


</View>
  )
})}
    </ScrollView>
  )
}