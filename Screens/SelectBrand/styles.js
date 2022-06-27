import {StyleSheet} from 'react-native'
import UseOrientation from '../UseOrientation'

const styles = StyleSheet.create({
    Touchable : {
            backgroundColor:'#D01110',
            height:45,
            width:UseOrientation.width / 1.1 ,
             marginHorizontal : 20,
             marginTop:70,
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            borderRadius:7,         
  },
  btn : {
    color : "white",
    fontSize : 18,
    fontWeight : 'bold'
  },
  addBrand:{
      color:'red',
      alignSelf:'flex-end',
      marginRight:10,      
  },
  label : {
    color:'#454545',
    alignSelf:'center',
    fontSize:18,
    fontWeight:"bold",
    margin:16,
  },
  text : {
            backgroundColor:'#EAEFF2',
            width:100,
            justifyContent:'center',
            textAlign:'center',
            fontWeight:"bold",
            height:28,
            marginLeft:20,
            alignContent:'center',
            borderRadius:5,
          
  },
  InputText : {
        alignSelf:'center',
         marginTop :15,
         borderWidth : 1,
         borderRadius : 8,
         height : 40,
         width : "90%",
         paddingLeft : 20,
         borderColor:"#707070",
         paddingLeft:30
  },
  AddBrandText : {
    fontWeight:"bold",
    color:'#fff',
  }
  })
  export default styles