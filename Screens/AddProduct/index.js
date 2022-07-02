import { View, Text , Image, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import DropDown from '../../Components/DropDown'
import images from '../../Components/images'
import Header from '../../Components/Header'
import LinearGradient from 'react-native-linear-gradient'



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
let product2 = [
  {
      id: 1,
      name: 'Bath & Body'
  },
  {
      id: 2,
      name: 'Hair Care'
  },
  {
      id: 3,
      name: 'MakeUp'
  },
  {
      id: 4,
      name: "Men's Grooming"
  },
  {
      id: 5,
      name: 'Skin Care'
  },
]
let product3 = [
  {
      id: 1,
      name: 'Product1'
  },
  {
      id: 2,
      name: 'Product2'
  },
  {
      id: 3,
      name: 'Product3'
  },
]
  const AddProduct=({navigation}) =>{
  const [selectedItem, setSelectedItem] = useState(null)
  const [productData, setProduct2] = useState(null)
  const [productItem, setProductItem] = useState(null)
  const OnSelect = (item) => {
      setSelectedItem(item)
  }
  const Product = (item) => {
      setProduct2(item)
  }
  const OnSelectedItems = (item) => {
      setProductItem(item)
  }
  
  return (
      <View style={{flex:1,}}>
<Header
        image={images.Group355}
        image2={images.notification}
        onPress={()=>navigation.navigate('Home')}
        onPress2={()=>navigation.navigate('YourProduct')} /> 

      <ScrollView style={{flex:1,backgroundColor:'white',}}>
          <Text style={styles.ViewStyle}>
              Add a new Product
          </Text>
          <View style={{marginTop:20}}>
          <DropDown
                style={{position:'absolute'}}
              title={'select Category *'}
              subTitle={'Search Selected Brand'}
              value={selectedItem}
              data={product}
              onSelect={OnSelect}
          />
          </View>
          <View style={{marginTop:20}}>
          <DropDown
              title={'select sub Category *'}
              subTitle={'Search Selected Brand'}
              value={productData}
              data={product2}
              onSelect={Product}
          />
           </View>
           <View style={{marginTop:20}}>
          <DropDown
              title={'Product Type *'}
              subTitle={'Search Product Brand'}
              value={productItem}
              data={product3}
              onSelect={OnSelectedItems}
          />
           </View>
          <View style={styles.LabelStyle} >
              <Text style={styles.Text}>
                  Please Select a Brand to start selling in this vertical
              </Text>

<View style={{marginTop:20}}>
              <LinearGradient
                    style={{ borderRadius: 5 }}
                    colors={['#ED4343', '#A52021']} >
              <TouchableOpacity style={styles.TouchableOpacity} 
              onPress={()=>navigation.navigate('SelectBrand')}
              >
                  <Text style={styles.btn}> Select Brand</Text>
                      <Image source={images.left}
                          style={{ height: 20, width: 10, position:'absolute',right:80, 
                          transform : [{rotate : '180deg'}]
                          }} />                    
              </TouchableOpacity>
              </LinearGradient>
              </View>
          </View>
      </ScrollView> 
      </View>
  )
}

export default AddProduct