import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import DropDown from '../../Components/DropDown'
import { TouchableOpacity } from 'react-native-gesture-handler'
import InputText from '../../Components/InputText'
import styles from './styles'
import UseOrientation from '../UseOrientation'
import { heightToDp } from '../../variable'
import Header from '../../Components/Header'
import images from '../../Components/images'

export default function SelectBrand({navigation})
 {
  let product = [
    {
        id: 1,
        name: 'item1'
    },
    {
        id: 2,
        name: 'item2'
    },
    {
        id: 3,
        name: 'item3'
    },
]
const [select, setSelect] = useState(false)
const [selectedItem, setSelectedItem] = useState(null)
const OnSelect = (item) => {
  setSelectedItem(item)
}
  return (
    <>
    <Header 
    image={images.left}
    onPress={()=>navigation.navigate('AppStack')}
    />
    <ScrollView style={{flex:1,backgroundColor:'gray',
   }}>
    <View style={{backgroundColor:'white', height:heightToDp('95%')}}>
{select ?
      <View>
       <Text style={styles.label}>Add Another 
       brand you want</Text>
       <InputText
                 placeholder='Enter Brand name'
                 style={styles.InputText}/>

      <TouchableOpacity style={styles.Touchable} 
       onPress={() => setSelect(!select)}>
                    <Text style={styles.AddBrandText}>Add Brand</Text>    

     </TouchableOpacity>      
      </View>
      
      :

      <View>
      <Text style={styles.label}>Select the Band you want to sell or add new Brand</Text>
      <DropDown 
        title={'Select Brand *'}
        subTitle={'Search Brand'}
         value={selectedItem}
         data={product}
         onSelect={OnSelect}
      />
     <View>
      <TouchableOpacity style={styles.Touchable} 
                onPress={()=>navigation.navigate('BlurBackground')}
                >
                    <Text style={styles.btn}>Next</Text>            
     </TouchableOpacity>    
                </View>
               </View>
}
      <View style={{margin:20,}}>
      <TouchableOpacity onPress={() => setSelect(!select)}>
            <Text style={styles.addBrand}>Add New Brand</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Select one of recently used before from {'\n'}Below</Text>
       
       <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>Lenovo</Text>
        <Text style={[styles.text,{width:50}]}>MI</Text>
        <Text style={[styles.text,{width:70}]}>Apple</Text>
        <Text style={[styles.text,{width:60}]}>HM</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:5,}}>
        <Text style={[styles.text,{width:70}]}>LG</Text>
        <Text style={[styles.text,{width:90}]}>Apple</Text>
        
        </View>
       
        </View>
        
    </View>
    </ScrollView>
    </>
  )

}
