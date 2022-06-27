import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UseOrientation from '../UseOrientation'

const styles = StyleSheet.create({
            View : {
                // backgroundColor:'#A30000',
                height:60,
                width:UseOrientation.width,
                flexDirection:'row'
            },
            name:{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'white',
                    marginTop:20,
                    marginRight:70,
            },
            touchable : {
                    margin:60,
                    justifyContent:'center',
                    alignSelf:'center',
                    borderRadius:6,
                    borderColor:'#FF5C5C',
                    borderWidth:1.5,
                    width:"90%",
                    height:30,
                     alignItems:'center'
        
            },
            LogOut : {
                color:'#FF5C5C',
                fontSize:15,
                fontWeight:"bold",
            },
            TextStyle : {
                marginLeft:20,
                fontSize:12,
                fontWeight:'bold',
                color:'#808080'
            },
            subtitle : {
                fontSize:10,
                color:'#AEAEAE'
            },
            categoryView : {
                margin:10,
                flexDirection:'row'
            }
})
export default styles