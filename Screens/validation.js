import { Pressable, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../Components/Header'
import { heightToDp } from '../variable'
import UseOrientation from './UseOrientation'
import AppStack from './AppStack'
import { Value } from 'react-native-reanimated'

export class validation extends Component {
    constructor(props){
        super(props)
        this.state={
          emailPhone: "", 
          validated : false,         
          // pass: "",
          // mail : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                }
    }
    
    Done = () => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.emailPhone) === true){
          alert( 'valid');
      }
      else{
          alert();
      }
    }

  render() {
    return (
      <View>
        <Header />
        <View style={{height : UseOrientation.height, justifyContent : 'center',backgroundColor : '#d5d5d5',}}>
                <View style={{flex : 0.1, backgroundColor : '#fff', margin : 20, justifyContent : 'center' }}>
                    <TextInput 
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={this.state.emailPhone}
                    style ={{flex : 0.7,margin : 5}}
                    placeholder = "Email"
                    onChangeText={(value)=> this.setState({ emailPhone: value })}
                    />
                </View>
                <View style={{flex : 0.09, backgroundColor : '#fff', margin : 20}}>
                <TextInput 
                    style ={{flex : 0.7,  margin : 5}}
                    placeholder = "Password"
                    // onChangeText={(value)=>this.setState({ pass: value })}
                    
                    />
                </View>

                <TouchableOpacity
                onPress={this.Done.bind(this)}
                style={{flex : 0.07, backgroundColor : '#ddd', margin : 20,
                justifyContent : 'center', alignItems  : 'center'
                }}>
                    <Text>Next</Text>
             </TouchableOpacity>

             <Text>Email : {this.state.emailPhone}</Text>
             <Text>Password : {this.state.pass}</Text>

        </View>
      </View>
    )
  }
}

export default validation