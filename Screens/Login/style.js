import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
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
        fontSize:18,
        marginTop:30,
        fontWeight:"bold",
        color:'black',
        marginRight:170,
        //backgroundColor:'gray',
      

      },
    ContinueBtn : {
        opacity : 0.5,
        width:UseOrientation.width / 1.1,
        marginLeft:20,
        height:45,
        borderRadius:7,
        alignItems:'center',
       // marginTop:20,
        justifyContent:'center',
        marginRight:20,
       
    },
    Text : {
        color:'red',
        fontWeight:"bold",
        fontSize:16,
        flexDirection:'row',
        marginLeft:5,
       
    },
    View : {
       // width:UseOrientation.width,
        borderWidth:1,
        marginTop: 10,
        borderRadius:7, 
        borderColor : '#707070',
        marginLeft:20,
        marginRight:20,
        
    }
})
export default styles