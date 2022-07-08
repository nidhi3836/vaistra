import { StyleSheet } from 'react-native'
import React from 'react'
import UseOrientation from '../UseOrientation'

const styles = StyleSheet.create ({
  
    InputText : {
        backgroundColor:'#F6F6F6',
        fontWeight:"600",
        padding:5,
        fontSize:18,
        height:55,
        width:UseOrientation.width / 8,
        borderRadius:8,
        //justifyContent:'center',
        textAlign:'center'
        
    },
    view : {
        flex:1,
         backgroundColor:"white",
         borderTopStartRadius:50,
         borderTopEndRadius:50,
         height:300
    },
    verifyView : {
       
        //backgroundColor:'#E0E0E0',
        height:55,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
    },
    ViewOtp : {
        width:UseOrientation.width / 1.2,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginLeft:10,
        marginRight:10,
    },
    resendText : {
        fontSize:13,
        marginTop:10,
        color:"#A5A3A3"
    }


})

export default styles