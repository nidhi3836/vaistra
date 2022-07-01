import { View, Text , Image, ScrollView} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../Components/Header'
import images from '../../Components/images'
import { heightToDp } from '../../variable'
import LinearGradient from 'react-native-linear-gradient';
import AppStack from '../AppStack'


export default function Payments({navigation}) {

  const inputs = Array(3).fill('');
  const input = Array(2).fill('');
  return (
       <>
       <Header 
       image={images.left}
       onPress={()=> navigation.navigate('AppStack')}
       title={'Payments'}
       />
    <ScrollView >
      <View style={{height:heightToDp('100%'),backgroundColor:'#fff' }}>
      <View style={{flex:0.06, backgroundColor:'#fff', flexDirection : 'row', padding: 15, justifyContent : 'space-between'}}>
        <Text style={{fontSize : 18,color:'#000' }}>Total Revenue </Text>
        <Text style={{fontSize : 18,color:'#000' }}>&#8377; 1000.00</Text>
</View>
<View style={{height:2, backgroundColor : '#f6f6f6'}}/>
<View style={{flex:0.06, backgroundColor:'#fff', flexDirection : 'row', padding: 15, justifyContent : 'space-between'}}>
        <Text style={{fontSize : 18,color:'#000' }}>Panding Amount </Text>
        <Text style={{fontSize : 18,color:'#000' }}>&#8377; 80.00</Text>
</View>
<View style={{height:2, backgroundColor : '#f6f6f6'}}/>


{inputs.map((inp, index)=> {
          return(

<View style={{flex : 0.12, backgroundColor : '#fff', margin : 18,flexDirection : 'row', borderRadius : 8, borderWidth : 1, borderColor : '#d5d5d5'}}> 

<LinearGradient
        style={{ flex:0.25,justifyContent:'center',
        alignItems:'center', 
        borderTopLeftRadius : 8,
      borderBottomLeftRadius : 8,
      }}
        colors={['#ED4343', '#A52021', '#622c2c']} >
      
        <Text style={{color :'#fff', fontWeight :'500',fontSize : 15}}>Price</Text>
        <Text style={{color :'#fff', fontWeight :'500',fontSize : 15}}>&#8377; 45.00</Text>

     
      </LinearGradient>
        <View style={{flex : 0.72, padding : 10}}>
            <Text style={{fontWeight : '500', color : '#a5a3a3'}}>{'Order ID :' + '   #216351353'} </Text>
            <Text style={{fontWeight : '500', color : '#a5a3a3'}}>Payment Status : Panding</Text>
        </View>
</View>)
})}

{input.map((inp, index)=> {
          return(
<View style={{flex : 0.12, backgroundColor : '#fff', margin : 18,flexDirection : 'row', borderRadius : 8, borderWidth : 1, borderColor : '#d5d5d5'}}> 

<LinearGradient
        style={{ flex:0.25,justifyContent:'center',
        alignItems:'center', 
        borderTopLeftRadius : 8,
      borderBottomLeftRadius : 8,
      }}
        colors={[  '#2ad71f','#1bac19','#127519', ]} >
      
        <Text style={{color :'#fff', fontWeight :'500',fontSize : 15}}>Price</Text>
        <Text style={{color :'#fff', fontWeight :'500',fontSize : 15}}>&#8377; 45.00</Text>

     
      </LinearGradient>
        <View style={{flex : 0.72, padding : 10}}>
            <Text style={{fontWeight : '500', color : '#a5a3a3'}}>{'Order ID :' + '   #216351353'} </Text>
            <Text style={{fontWeight : '500', color : '#a5a3a3'}}>Payment Status : Panding</Text>
        </View>
</View>)
})}
      </View>


    
     

    </ScrollView>
      </>
   
  )
}