import { StyleSheet } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../variable';
import UseOrientation from '../UseOrientation';

const styles =StyleSheet.create({
    view : {
      height: heightToDp('17%'), 
      justifyContent: 'center',
    },
    textInput : {
            borderRadius:5,
            backgroundColor:'#f6f6f6',
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: '#B7B7B7',
            marginBottom:16,
            height:43,
           // flex:0.2,
            // justifyContent:'center',
            
            paddingHorizontal : 20
    },
    TextInputView :{
      justifyContent:'center',
      position:'absolute',
      top:-15,
      paddingTop:5,
      marginLeft:20,
    },
    
    TextInputLabel :{
      padding:0,
       width: 80, 
       color:'red',
       fontSize:10,
       marginBottom:10,
       backgroundColor:'white',
       paddingLeft:5,
       fontWeight:'500'
    },

    text : {
      marginTop : 50,
      color:"red",
    },
    label  : {
      justifyContent:'center',
        color:'black',
        
        fontSize:20,
        fontWeight:"bold",
        marginLeft:20,
        //marginTop:15,
        marginBottom:15,
    },
    ViewBtn : {
        backgroundColor :'#C8C8C8' ,
         margin:20,
         height:40,
         borderRadius:5,
         alignSelf:'center',
         alignItems : 'center',
         justifyContent:'center',
         width:UseOrientation.width / 1.1,
         
    },

    change: {
        backgroundColor:'#F6F6F6',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        // marginTop:20,
        // marginBottom:20,

        
    },
    changeView : {
      width:UseOrientation.width / 1.1,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
       
        // marginLeft:10,
        // marginRight:10,
    }

  })

export default styles