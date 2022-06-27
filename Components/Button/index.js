import { Button } from 'react-native'
import React from 'react'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = (props) => {
    return (

          <TouchableOpacity
          style = {styles.btnWidth}
          {...props}/>
    );
  };
export default Button