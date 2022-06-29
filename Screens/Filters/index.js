import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import {Dropdown} from 'react-native-element-dropdown'
import UseOrientation from '../UseOrientation'
import images from '../../Components/images'
import Header from '../../Components/Header'

export default function Filters() {
    const [state, setState] = useState ('')
    const data = [
        { label: 'Item 1', value: '1', name : 'nidhi' },
        { label: 'Item 2', value: '2', name : 'nidhi' },
        { label: 'Item 3', value: '3', name : 'nidhi' },
       
      ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(true);
    
  const [visible, setVisible] = useState(false);
    return (   
    <View>
        <Header />
        <Text>Drop Down Here</Text>

<View style={{height:UseOrientation.height}}>
<Dropdown
        
        style={[styles.InputText,{width:UseOrientation.width /1.1, }]}
         //  placeholderStyle={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
         inputSearchStyle={styles.inputSearchStyle}         
        iconStyle={styles.iconStyle}   
        icon = {images.search}        
       data={data}
       search
       maxHeight={200}
       labelField="value"
       valueField="value"      
       placeholder={!isFocus ? 'Sort by revelance' : 'Sort by revelance'}
       searchPlaceholder="Search..."
       value={value}
       onFocus={() => setIsFocus(false)}
       // onBlur={() => setIsFocus(false)}
       onChange={item => {
         setValue(item.value);
         setIsFocus(true);
       
     }}
      
       ></Dropdown>
</View>
        
    </View> 
  )
}

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor : '#d5d5d5',
        // height: 20,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        //  width:UseOrientation.width,
         
      },
      icon: {
        marginRight: 50,
      },
      label: {
        // position: 'absolute',
        // backgroundColor: 'white',
        left: 22,
        top: 5,
         zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 12,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 25,
        height: 25,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      InputText: {   
        marginTop: 20,
         borderWidth: 1,
         borderRadius: 8,
        //  height: 40,
         width:"90%",
         paddingLeft: 20,
         borderColor: "#B7B7B7",
         alignSelf: "center",
         backgroundColor : '#d5d5d5',
         position : 'absolute'
       },
})