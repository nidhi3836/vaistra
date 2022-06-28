import React from 'react'
import {StyleSheet } from 'react-native'
import UseOrientation from '../UseOrientation'

const styles = StyleSheet.create ({
    input : {
        height: 40,
        padding: 10,   
         marginRight:40
    },
    forgot : {
        marginTop:50,
        marginLeft:20,
        fontSize:22,
        fontWeight:"bold",
        color:'black'
    },
    InputView : {
        position:'relative',
        borderWidth:1,
        margin: 12,
        justifyContent:'center',
        borderRadius:7,
        borderColor:'#B7B7B7'
    },
    
    change: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    
      },
      changeView: {
        width: UseOrientation.width / 1.1,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
      },
   
})

export default styles