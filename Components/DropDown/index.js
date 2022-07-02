import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'


const DropDown = ({
    title,
    subTitle,
    data = [],
    value = {},
    onSelect = () => { },
    onFocus,
}) => {
    console.log('Selected Value ', !!value)
    const [visible, setVisible] = useState(false)
    const [showOption, setShowOption] = useState(false)
     const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)        
}
    return (       
        <View  style={{flex:1, }}>
         <View>
               <TouchableOpacity style={styles.DropDown}
               onFocus={onFocus}
                    onPress={() => setShowOption(!showOption)}
                >
                    {!!showOption ?<Text style={{color:'#808080', fontWeight: 'bold' }}>
                          {subTitle}
                    </Text>
                    :
                    <Text style={{color:'#808080'}}>      
                        {!! value ? value?.name : title}      
                    </Text>     
                }
                    <View>
                        {showOption ? 
                        <Image
                            style={{ width: 30, height: 23 }}
                            source={require('../../images/search.png')} />
                            :
                            <Image source={require('../../images/rightArrow.png')} />
                        }
                    </View>
                </TouchableOpacity> 
            </View>
            {!! showOption && (<View style={styles.text}>
                {data.map((val, i) => {
                    return (
                        <TouchableOpacity 
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(true);
                          }}
                        onFocus={onFocus}                        
                            onPress={()=> onSelectedItem(val)}                           
                            key={String(i)}>
                            <Text style={{ margin: 7, color: 'black' }}>{val.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
     )}
        </View>
    )
}
export default  DropDown
const styles = StyleSheet.create({

    DropDown: {
       backgroundColor:'white',
       marginLeft:20,
       marginRight:20,
        padding: 7,
        fontSize: 15,
        paddingLeft:20,
        height: 40,
        borderRadius: 7,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderColor:'#B7B7B7',
        
    },
    text: {       
        borderWidth: 1,
        width: "90%",
        borderBottomEndRadius: 7,
        borderBottomStartRadius:7,
        alignSelf: "center",
        borderTopWidth: 0,
        borderColor: "grey",
        // position:'absolute'
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
})