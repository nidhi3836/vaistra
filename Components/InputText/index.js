import React from 'react'
import { TextInput, View } from 'react-native'
import styles from './style';

     
      const InputText = (props,{keyboardType, value,secureTextEntry,error,onFocus,autoCapitalize} ) => {
    return (
      <>
     
      <TextInput
      autoCapitalize={autoCapitalize}
      error = {error}
      onFocus = {onFocus}
     secureTextEntry={secureTextEntry}
     value={value}
     keyboardType={keyboardType}
      {...props}/>
          {/* <TextInput
          style={styles.textInput} {...props}/> */}
          </>
    );
  };

export default InputText
