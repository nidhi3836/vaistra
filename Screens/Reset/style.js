import { StyleSheet  } from 'react-native'
import React from 'react'
import UseOrientation from '../UseOrientation'

const style = StyleSheet.create({
    textInput : {
        height: 40,
        padding: 10,
         marginRight:40
    },
    view : {
        position: 'absolute', 
        backgroundColor: '#fff',         
         width: '100%', 
         top: "15%", 
         height:'100%',
         borderTopStartRadius: 50, 
         borderTopEndRadius: 50 ,
        
        //  justifyContent:'center'
        
    },
    resetText : {
        marginTop: 50,
         marginLeft: 20,
          fontSize: 20, 
          fontWeight: "bold", 
          color: 'black'
    },
    inputView : {
     borderColor:'#B7B7B7',
        borderWidth:1,
        margin: 10,
        justifyContent:'center',
        borderRadius:7
    },
    change : {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    changeView : {
        width: UseOrientation.width/ 1.1,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginLeft: 10,
        marginRight: 10,
    }
})

export default style