import { StyleSheet } from 'react-native'
import React from 'react'
import UseOrientation from '../UseOrientation'

const styles = StyleSheet.create ({
  
    InputText : {
        backgroundColor:'white',
        alignSelf: "center",
        padding: 2,
        fontSize: 15,       
        height: 90,
        width: "90%",
        borderColor: "grey",
        borderRadius: 7,
        borderWidth: 1,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      
    },
    ViewStyle : {
        margin:10,
        color :'black',
        fontSize:22,
        fontWeight:'900',
        marginLeft:22,
        
    },
    setLinkVIew : {
        backgroundColor:'#BF181D',
        width:350,
        height:45,
        borderRadius:8,
        marginLeft:12,
        alignItems:'center',
        justifyContent:'center',
       
    },
    setLinkText : {
        color:'#ffffff',
        fontWeight:"500",
        fontSize:17,
        flexDirection:'row',
        marginLeft:3
    },
    LabelStyle:{
      
        marginTop:30,
      // margin: 20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    Text:{
        fontSize:14.5,
        color:'#FF8A8A',
        fontWeight:"500"
    },
    TouchableOpacity:{
         // backgroundColor:'#FF2E2E',
          height:45,
          width:UseOrientation.width / 1.1,
         // marginTop:10,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:7,
          flexDirection:'row'
    },
    btn : {
        color : "white",
        fontSize : 18,
        fontWeight : 'bold',
        justifyContent:'center'
    }

    
})
export default styles