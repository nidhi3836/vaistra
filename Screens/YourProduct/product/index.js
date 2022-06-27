import { View, Text, Dimensions, ScrollView , Image, StyleSheet, ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import images from '../../../Components/images'
import UseOrientation from '../../UseOrientation'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { heightToDp, widthToDp } from '../../../variable'


export default function Product({navigation}) {

  const CONTENT = {
    tableHead: ['', 'Months', 'Interests', 'Monthly EMI', 'Overall Cost'],
    tableTitle: ['HDFC', 'HDFC', 'HDFC', 'HDFC'],
    tableData: [
      ['3', '13%pa(rs.25)', '3','4'],
      ['a', 'b', 'c','d'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
     
    ],
  };

  const Images = {
   
  }

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

  return (
    <View>
     <Header 
        image={images.left}
        onPress={()=> navigation.navigate('YourProduct')}
     />
     
    <ScrollView style={{}}>

    <View style={{    
      }} >
        <ImageBackground source={images.girl}
    
       style={{
        // height:orientations !='landscape' ? UseOrientation.height / 1.4:  UseOrientation.height * 2 ,                  
        // width:  orientations !='landscape' ? UseOrientation.width  : screenWidths ,  
      //  position:'absolute'      
    }}
        >
<View style={{flexDirection:'row',
 marginTop: orientations !='landscape' ? "100%":  "170%",
  alignItems:'center',justifyContent:'center',
  }}>
            <Image resizeMode='cover'
             style={{ 
              // height:orientations !='landscape' ? UseOrientation.height / 12:  UseOrientation.height /7 ,
             width:  orientations !='landscape' ? UseOrientation.width / 6.6 : UseOrientation.width / 6 ,  
        }}
            source={images.Group3688} />

            <View style={{marginLeft : 30}}>
                        <Image source={images.b}
                        style={{height:60, width : 60}}
                        />
            </View>
            <View style={{marginLeft : 30, width : 40}}>

                        <Image source={images.Group3690}/>
            </View>
</View>
        </ImageBackground>

    </View>

    <View style={{ backgroundColor:'#fff', padding:15}}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>Sassaras</Text>
        <Text style={{fontSize:15,fontWeight:'500',
        color:'#b5b5b5'
        }}>
          Black Blazer Dress
        </Text>
        <View style={{flexDirection:'row'}}>

        <Text style={{}}>&#8377; 600 </Text>
        <Text style={{ textDecorationLine: 'line-through',color:'#d5d5d5'}}>&#8377; 800</Text>
        <Text style={{color:'red'}}>(20% off)</Text>
        </View>
    </View>

    <View style={{ marginTop : 5, backgroundColor:'#fff',padding:15}}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>Color</Text>
       
        <View style={{flexDirection:'row',padding:10}}>
        <Image source={images.g1}/>

        <Image 
        style={{marginLeft: 5}}
        source={images.pink}/>
      
        </View>
          <View style={{flexDirection:'row',}}>
        <Text style={{marginLeft : 20,color : '#000'}}>Black </Text>
        <Text style={{color:'#d5d5d5', marginLeft : 40, color: '#FF69B4'}}>Pink</Text>
        </View>
        
    </View>
    {/* <View style={{ backgroundColor:'#fff', padding:15,marginTop : 5, }}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>Size</Text>
        <View style = {{flexDirection : 'row', padding: 5}}>
        <View style={{height: 30, width: 30, borderColor : "#b5b5b5", borderWidth:1,
      marginLeft : 10,justifyContent:'center',alignItems:'center'
      }}>
          <Text>XS</Text>
        </View>
        <View style={{height: 30, width: 30, borderColor : "#b5b5b5", borderWidth:1,
      marginLeft : 15,justifyContent:'center',alignItems:'center'
      }}>
          <Text>S</Text>
        </View>
        <View style={{height: 30, width: 30, borderColor : "#b5b5b5", borderWidth:1,
      marginLeft : 15,justifyContent:'center',alignItems:'center'
      }}>
          <Text>M</Text>
        </View>
        <View style={{height: 30, width: 30, borderColor : "#b5b5b5", borderWidth:1,
      marginLeft : 15,justifyContent:'center',alignItems:'center'
      }}>
          <Text>L</Text>
        </View>
        <View style={{height: 30, width: 30, borderColor : "#b5b5b5", borderWidth:1,
      marginLeft : 15,justifyContent:'center',alignItems:'center'
      }}>
          <Text>XL</Text>
        </View> 
        </View>
       
        </View> */}
    

    {/* <View style={{ marginTop : 5, backgroundColor:'#fff',padding:15}}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>Offers Available</Text>
       
        <View style={{flexDirection:'row', marginTop : 5,}}>
          <Image source={images.ticket}
          style={{marginTop:4}}
          />
          <Text style={{color: '#000', fontSize:12, marginLeft : 5,fontWeight:'500'}}>
            Bank Offer             
          </Text>
          <Text style={{ fontSize:12,fontWeight:'500'}}> 5% unlimited cashback on axis bank credit card</Text>
        </View>
        <View style={{flexDirection:'row', marginTop : 5,}}>
          <Image source={images.ticket}
          style={{marginTop:4}}
          />
          <Text style={{color: '#000', fontSize:12, marginLeft : 5,fontWeight:'500'}}>
            Partner Offer             
          </Text>
          <Text style={{ fontSize:12,fontWeight:'500'}}> Sign up for free and get gift card worth &#8377;100 </Text>
        </View>
    </View> */}

    {/* <View style={{ marginTop : 5, backgroundColor:'#fff',padding:15}}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>Addition Details</Text>
       
        <View style={{borderWidth : 1 , borderRadius : 8, borderColor : "#d5d5d5",
      padding : 20
      }}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
           <Text style={{fontWeight : 'bold'}}>Local Delivery Charge </Text> 
           <Text style={{fontWeight : 'bold'}}>&#8377; 20.00</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop : 5}}>
           <Text style={{fontWeight : 'bold'}}>Zonal Delivery Charge </Text> 
           <Text style={{fontWeight : 'bold'}}>&#8377; 40.00</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop : 5}}>
           <Text style={{fontWeight : 'bold'}}>Tax </Text> 
           <Text style={{fontWeight : 'bold'}}>&#8377; 10.00</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop : 5}}>
           <Text style={{fontWeight : 'bold'}}>Country of Origin </Text> 
           <Text style={{fontWeight : 'bold'}}>INDIA</Text>
          </View>
        </View>
        
    </View>
    <View style={{ marginTop : 5, backgroundColor:'#fff',padding:15}}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>EMI on Product</Text>
        
       <View style={styles.container}>
      <Table borderStyle={{ borderBottomWidth : 1}}>
        
        <Row 
          data={CONTENT.tableHead}
          // flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.text}
          />
          <Rows
            data={CONTENT.tableData}
            flexArr={[2, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
        

    </View>
    <View style={{ marginTop : 5, backgroundColor:'#fff',padding:15,flexDirection:'row',
  justifyContent:'space-between'
  }}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000',
        }}>Minimum Order Value </Text>
       
        <Text>2</Text>
        
    </View>
    <View style={{ marginTop : 5, backgroundColor:'#fff',padding:15}}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>Color</Text>
       
        <View style={{flexDirection:'row',padding:10}}>
        <Image source={images.g1}/>

        <Image 
        style={{marginLeft: 5}}
        source={images.pink}/>
      
        </View>
          <View style={{flexDirection:'row',}}>
        <Text style={{marginLeft : 20,color : '#000'}}>Black </Text>
        <Text style={{color:'#d5d5d5', marginLeft : 40, color: '#FF69B4'}}>Pink</Text>
        </View>
        
    </View>
    <View style={{ marginTop : 5, backgroundColor:'#fff',padding:15}}>
          <Text style={{fontSize:22,fontWeight:'500',
        color:'#000'
        }}>Minimum Order Value</Text>
        
    </View> */}
    </ScrollView>
      
     </View>
   
  )
}
const styles = StyleSheet.create({
  container: { padding: 10, paddingTop: 30, backgroundColor: '#fff' ,},
  head: { height: 40, borderWidth: 1 },
  wrapper: { flexDirection: 'row',  },
  title: {borderWidth :1},
  row: { height: 27 ,},
  text: { textAlign: 'center', },
});