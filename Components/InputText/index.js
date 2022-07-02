import React from 'react'
import { TextInput } from 'react-native'
import styles from './style';

const InputText = (props,{keyboardType, value} ) => {
    return (
      <>
      <TextInput
    //  value={value}
     keyboardType={keyboardType}
      {...props}/>
          {/* <TextInput
          style={styles.textInput} {...props}/> */}
          </>
    );
  };

export default InputText
