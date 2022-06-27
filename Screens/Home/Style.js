import { StyleSheet } from 'react-native'
import React from 'react'

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
        // borderBottomWidth:0,

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
        marginLeft:22
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
        marginTop:40,
        margin: 22,
        justifyContent:'center',
        alignItems:'center'
    },
    Text:{
        fontSize:15,
        color:'#FF8A8A'
    },
    TouchableOpacity:{
          backgroundColor:'#FF2E2E',
          height:50,
          width:350,
          marginTop:10,
          justifyContent:'center',
          alignItems:'center',
          alignSelf:'center',
          borderRadius:7,
          flexDirection:'row'
    },
    btn : {
        color : "white",
        fontSize : 18,
        fontWeight : 'bold'
    }

    
})
export default styles
