import { View, Text, ScrollView, Image, Dimensions, StyleSheet, PixelRatio, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header'
import images, { background } from '../../Components/images'
import { heightToDp } from '../../variable'
import UseOrientation from '../UseOrientation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ripple from 'react-native-material-ripple'

export default function Home({ navigation }) {

  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;
  console.log('UseOrientation', UseOrientation.height, UseOrientation.width)
  const [screenWidths, setScreenWidths] = useState('')
  const [screenHeight, setScreenHeight] = useState('')
  const [orientations, setOrientations] = useState(true)
  useEffect(() => {
    Dimensions.addEventListener('change', newDimensions => {
      let screenWidth = newDimensions.window.width;
      let screenHeight = newDimensions.window.height;
      setScreenWidths(newDimensions.window.width);
      setScreenHeight(newDimensions.window.height);
      setOrientations(screenWidth < screenHeight ? 'portrait' : 'landscape');
    });
  }, [orientations]);
  const inputs = Array(3).fill('');
  return (

    <View style={{ flex: 1, height: '100%', backgroundColor: '#fff', }}>
      <Header
        image={images.Group355}
        onPress={() => navigation.navigate('DrawerContent')}
        image1={images.Vaistralogo}
        image2={images.notification}
        onPress3={() => navigation.navigate('Notification')}
      />
      <ScrollView style={{ flex: 1, }}>
        <SafeAreaView style={{}}>
          <ScrollView
            style={{
              height: orientations != 'landscape' ? heightToDp('35%')
                : heightToDp('50%'),

              backgroundColor: '#d5d5d5'
            }}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}

            onScroll={(event) => {
              setSliderPage(event);
            }}
          >
            <View style={{
              width,
              height,
              backgroundColor: "#fff"
            }}>


              <Image

                source={images.Group3702}
                style={[styles.imageStyle, {
                  width: orientations != 'landscape' ? UseOrientation.width : UseOrientation.width * 2,
                  height: orientations != 'landscape' ? PixelRatio.getPixelSizeForLayoutSize(100) : PixelRatio.getPixelSizeForLayoutSize(160),
                  resizeMode: orientations != 'landscape' ? 'contain' : 'cover',
                }]} />


            </View>
            <View style={{
              width,
              height,
              backgroundColor: "#fff"
            }}>


              <Image
                source={images.Group3701} style={[styles.imageStyle, {
                  width: orientations != 'landscape' ? UseOrientation.width : UseOrientation.width * 2,
                  height: orientations != 'landscape' ? PixelRatio.getPixelSizeForLayoutSize(100) : PixelRatio.getPixelSizeForLayoutSize(160),
                  resizeMode: orientations != 'landscape' ? 'contain' : 'cover',
                }]} />
            </View>
            <View style={{
              width, height,
              backgroundColor: "#fff"
            }}>
              <Image
                source={images.Group3700} style={[styles.imageStyle, {
                  width: orientations != 'landscape' ? UseOrientation.width : UseOrientation.width * 2,
                  height: orientations != 'landscape' ? PixelRatio.getPixelSizeForLayoutSize(100) : PixelRatio.getPixelSizeForLayoutSize(160),
                  resizeMode: orientations != 'landscape' ? 'contain' : 'cover',
                }]} />


            </View>
          </ScrollView>
          <View style={styles.paginationWrapper}>
            {Array.from(Array(3).keys()).map((key, index) => (
              <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
            ))}
          </View>
        </SafeAreaView>
        <View style={{ marginBottom: 20, }}>

          <View style={{ flex: 0.99, backgroundColor: '#fff', flexDirection: 'column', }}>
            <View style={{
              flex: 0.47, backgroundColor: '#FFF', margin: 15,
              justifyContent: 'space-between', flexDirection: 'row',
            }}>
              <Ripple style={{
                borderWidth: 1, flex: 0.45,
                borderColor: '#000', borderRadius: 7, padding: 7, borderColor: '#b7b7b7',
              }}
                onPress={() => navigation.navigate('YourProduct')}
              >
                <View >
                  <Text >Total Products
                  </Text>
                  <Text style={{ fontSize: 17 }}>30</Text>

                </View>
              </Ripple>
              <Ripple
                onPress={() => navigation.navigate('TopTab')}
                style={{
                  borderWidth: 1, flex: 0.45,
                  borderColor: '#000', borderRadius: 7, padding: 10, borderColor: '#b7b7b7'
                }}>
                <View >
                  <Text >Total Orders

                  </Text>
                  <Text style={{ fontSize: 17 }}>10</Text>
                </View>
              </Ripple>
            </View>

            <View style={{
              flex: 0.47, backgroundColor: '#FFF', margin: 15,
              justifyContent: 'space-between', flexDirection: 'row',
            }}>
              <Ripple style={{
                borderWidth: 1, flex: 0.45,
                borderColor: '#000', borderRadius: 7, padding: 10, borderColor: '#b7b7b7'
              }}>

                <Text >Last Week Products

                </Text>
                <Text style={{ fontSize: 17 }}>5</Text>

              </Ripple>

              <Ripple
                onPress={() => navigation.navigate('Analytics')}
                style={{
                  borderWidth: 1, flex: 0.45,
                  borderColor: '#000', borderRadius: 7, padding: 10, borderColor: '#b7b7b7'
                }}>
                <Text >Total Revenue

                </Text>
                <Text style={{ fontSize: 17 }}>&#8377; 1000.00</Text>
              </Ripple>
            </View>

          </View>

          <View style={{ flex: 0.18, backgroundColor: '#fff', }}>
            <Text style={{ fontSize: 19, color: "#000", marginLeft: 15, fontWeight: '500' }}>Best Selling Products</Text>
          </View>

          <TouchableOpacity style={{
            backgroundColor: '#fff',
            marginBottom: 12,
            height: heightToDp('38%')
          }}
            onPress={() => navigation.navigate('Product')}
          >
            <ScrollView
              horizontal={true}
            >

              {inputs.map((inp, index) => {
                return (

                  <View style={{ flexDirection: 'row', }}>
                    <View style={{
                      flex: 0.2,
                      borderWidth: 1, width: 185, margin: 15, borderColor: '#b7b7b7', borderRadius: 5,
                    }}>
                      <View style={{ flex: 0.15, backgroundColor: "#fff", }}>

                        <View style={{
                          alignSelf: 'flex-end', width: 60, margin: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderTopEndRadius: 8,
                          borderBottomLeftRadius: 8,
                          backgroundColor: '#f6f6f6',
                        }}>
                          <Text style={{ color: '#000', fontWeight: '500', fontSize: 8, }}>Cloth</Text>
                        </View>
                      </View>
                      < View style={{
                        flex: 0.6, margin: 5,
                        backgroundColor: "#fff",
                      }}>

                        <View style={{
                          justifyContent: 'center', alignItems: 'center',
                        }}>
                          <Image
                            resizeMode='contain'
                            style={{
                              height: UseOrientation.height / 4.8,
                              width: orientations != 'landscape' ? UseOrientation.width : UseOrientation.width,
                            }}
                            source={images.Group431}
                          />
                        </View>
                      </View>
                      <View style={{ backgroundColor: "#fff", margin: 18, flex: 0.15, }}>
                        <Text style={{ fontSize: 13, fontWeight: '700', color: '#000' }}>TimeWear Watch </Text>
                        <Text style={{ fontSize: 11, fontWeight: '500', color: '#b7b7b7' }}>Analog Number Dial {'\n'}Leather strap watch</Text>
                        <View style={{ flexDirection: 'row' }}>

                          <Text style={{
                            textDecorationLine: 'line-through',
                            fontSize: 12, fontWeight: '500', color: '#707070'
                          }}>&#8377;250.00</Text>
                          <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 5, color: '#000' }}>&#8377;225.00</Text>
                          <Text style={{ fontSize: 9, fontWeight: '500', color: 'green' }}>10% Off</Text>
                        </View>
                      </View>

                    </View>

                    <View style={{
                      flex: 0.2,
                      borderWidth: 1, width: 185, margin: 15, borderColor: '#b7b7b7', borderRadius: 5,
                    }}>
                      <View style={{ flex: 0.15, backgroundColor: "#fff", }}>

                        <View style={{
                          alignSelf: 'flex-end', width: 60, margin: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderTopEndRadius: 8,
                          borderBottomLeftRadius: 8,
                          backgroundColor: '#f6f6f6',
                        }}>
                          <Text style={{ color: '#000', fontWeight: '500', fontSize: 8, }}>Cloth</Text>
                        </View>
                      </View>
                      < View style={{
                        flex: 0.6, margin: 5,
                        backgroundColor: "#fff",
                      }}>

                        <View style={{
                          justifyContent: 'center', alignItems: 'center',
                        }}>
                          <Image
                            resizeMode='contain'
                            style={{
                              height: UseOrientation.height / 4.5,
                              width: orientations != 'landscape' ? UseOrientation.width : UseOrientation.width,
                            }}
                            source={images.tshirt}
                          />
                        </View>
                      </View>
                      <View style={{ backgroundColor: "#fff", margin: 18, flex: 0.15, }}>
                        <Text style={{ fontSize: 13, fontWeight: '700', color: '#000' }}>Kook n Keech ... </Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#b7b7b7' }}>Men Printed Sweat{'\n'}T-Shirt</Text>
                        <View style={{ flexDirection: 'row' }}>

                          <Text style={{
                            textDecorationLine: 'line-through',
                            fontSize: 12, fontWeight: '500', color: '#707070'
                          }}>&#8377;250.00</Text>
                          <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 5, color: '#000' }}>&#8377;225.00</Text>
                          <Text style={{ fontSize: 9, fontWeight: '500', color: 'green' }}>10% Off</Text>
                        </View>
                      </View>

                    </View>


                  </View>
                )
              })}
            </ScrollView>
          </TouchableOpacity>

          <View style={{ marginLeft: 15, backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 19, color: "#000", marginLeft: 10, fontWeight: '500' }}>Latest Product</Text>
          </View>

          {inputs.map((inp, index) => {
            return (
              <>
                <View style={{
                  backgroundColor: '#fff', marginTop: 5, borderWidth: 1,
                  marginHorizontal: 20, borderColor: '#d5d5d5',
                  borderRadius: 6, marginBottom: 5

                }}>
                  <View key={index.toString()}
                    // onChangeText={(text)=>handleChangeText(text, index)}
                    //  value={view[index]}
                    style={{
                      padding: 10,
                      backgroundColor: "#f6f6f6",
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontWeight: "500" }}>Vishakha Mehta</Text>
                      <Text style={{ fontSize: 11 }}>
                        Order ID : 23456</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 11, fontWeight: "500", color: '#b7b7b7' }}>Vagheshwari Plot, opp Vikas colony,</Text>
                      <Text style={{ fontSize: 11, fontWeight: "500" }}>Total : 200.00</Text>
                    </View>

                    <Text style={{ fontSize: 11, fontWeight: "500", color: '#b7b7b7' }}>Ahmedabad, Gujarat : 360001</Text>
                    <Text>24 jun, 20:00</Text>
                  </View>
                  <View style={{ height: heightToDp('10%'), flexDirection: 'row' }}>
                    <View style={{
                      flex: 0.25, alignItems: 'center',
                    }}>

                      <Image
                        resizeMode='cover'
                        source={images.man}
                        style={{ height: 60, width: 60, margin: 5 }}
                      />
                    </View>
                    <View style={{ flex: 0.75, backgroundColor: '#fff' }}>
                      <View style={{ flex: 0.333, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontWeight: '500' }}>Kook N Keech Marvel</Text>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>{'Order Id' + ': 123456'} </Text>
                      </View>
                      <View style={{ flex: 0.333, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>Men Printed SweatShirt</Text>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>Price : &#8377; 400.00 </Text>
                      </View>
                      <View style={{ flex: 0.2, flexDirection: 'row', }}>
                        <View style={{
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderColor: '#d5d5d5', borderRadius: 4,
                        }}>
                          <Text style={{
                            fontSize: 10,
                          }}>Size : 30</Text>
                        </View>
                        <View style={{
                          marginRight: 50,
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderColor: '#d5d5d5', borderRadius: 4,
                        }}>
                          <Text style={{
                            fontSize: 10,
                          }}>Qty : 1</Text>

                        </View>
                        <View style={{
                          marginLeft: orientations != 'landscape' ? "5%" : "55%",
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderRadius: 4, backgroundColor: '#ED4343',
                        }}>
                          <Text style={{
                            fontSize: 10, fontWeight: '500', color: '#fff'
                          }}>Up Coming</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={{ height: heightToDp('10%'), flexDirection: 'row' }}>
                    <View style={{
                      flex: 0.25, alignItems: 'center',
                    }}>

                      <Image
                        resizeMode='cover'
                        source={images.man}
                        style={{ height: 60, width: 60, margin: 5 }}
                      />
                    </View>
                    <View style={{ flex: 0.75, backgroundColor: '#fff' }}>
                      <View style={{ flex: 0.333, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontWeight: '500' }}>Kook N Keech Marvel</Text>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>{'Order Id' + ': 123456'} </Text>
                      </View>
                      <View style={{ flex: 0.333, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>Men Printed SweatShirt</Text>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>Price : &#8377; 400.00 </Text>
                      </View>
                      <View style={{ flex: 0.2, flexDirection: 'row', }}>
                        <View style={{
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderColor: '#d5d5d5', borderRadius: 4,
                        }}>
                          <Text style={{
                            fontSize: 10,
                          }}>Size : 30</Text>
                        </View>
                        <View style={{
                          marginRight: 50,
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderColor: '#d5d5d5', borderRadius: 4,
                        }}>
                          <Text style={{
                            fontSize: 10,
                          }}>Qty : 1</Text>

                        </View>
                        <View style={{
                          marginLeft: orientations != 'landscape' ? "5%" : "55%",
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderRadius: 4, backgroundColor: '#f3710f',
                        }}>
                          <Text style={{
                            fontSize: 10, fontWeight: '500', color: '#fff'
                          }}>Padding</Text>


                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={{ height: heightToDp('10%'), flexDirection: 'row' }}>
                    <View style={{
                      flex: 0.25, alignItems: 'center',
                    }}>

                      <Image
                        resizeMode='cover'
                        source={images.man}
                        style={{ height: 60, width: 60, margin: 5 }}
                      />
                    </View>
                    <View style={{ flex: 0.75, backgroundColor: '#fff' }}>
                      <View style={{ flex: 0.333, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontWeight: '500' }}>Kook N Keech Marvel</Text>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>{'Order Id' + ': 123456'} </Text>
                      </View>
                      <View style={{ flex: 0.333, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>Men Printed SweatShirt</Text>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>Price : &#8377; 400.00 </Text>
                      </View>
                      <View style={{ flex: 0.2, flexDirection: 'row', }}>
                        <View style={{
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderColor: '#d5d5d5', borderRadius: 4,
                        }}>
                          <Text style={{
                            fontSize: 10,
                          }}>Size : 30</Text>
                        </View>
                        <View style={{
                          marginRight: 50,
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderColor: '#d5d5d5', borderRadius: 4,
                        }}>
                          <Text style={{
                            fontSize: 10,
                          }}>Qty : 1</Text>

                        </View>
                        <View style={{
                          marginLeft: orientations != 'landscape' ? "5%" : "55%",
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 70,
                          borderRadius: 4, backgroundColor: '#1164c2',
                        }}>
                          <Text style={{
                            fontSize: 10, fontWeight: '500', color: '#fff'
                          }}>Shipping</Text>


                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            )
          })}
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    // height: 
    // PixelRatio.getPixelSizeForLayoutSize(170),

    //   marginBottom : "90%"
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#fff',
    height: 30,
  },
  paginationDots: {
    height: 12,
    width: 19,
    // top :30,
    borderRadius: 10 / 2,
    backgroundColor: '#ED4343',
    marginLeft: 30,

  },
});