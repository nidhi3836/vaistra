import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import UseOrientation from '../UseOrientation'

const styles = StyleSheet.create({
    textInput : {
        padding: 10,
        paddingLeft : 30,
        height:40,
        color : 'black',
        width : UseOrientation.width
    },
    BackView : {
        marginTop:220,
        backgroundColor:"white",
        height:420,
        borderTopLeftRadius : 60,
        borderTopEndRadius : 60,
       
    },
    LabelView : {
        fontSize:22,
        marginTop:25,
        fontWeight:"700",
        color:'#000',
        marginRight:170,
        //backgroundColor:'gray',
      

      },
    ContinueBtn : {       
        width:UseOrientation.width / 1.1,       
        height:45,
        borderRadius:7,
        alignItems:'center',      
        justifyContent:'center',      
       marginHorizontal : 20,
    },
   

    Text : {        
        color:'red',
        fontWeight:"bold",
        fontSize:16,
        flexDirection:'row',
        marginLeft:5,
       
    },
    View : {
        borderWidth:1,
        marginTop: 10,
        borderRadius:7, 
        borderColor : '#707070',
        marginLeft:20,
        marginRight:20,
        
    }
})
export default styles