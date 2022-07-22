import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import images from '../Components/images'
import UseOrientation from './UseOrientation';
import { heightToDp, widthToDp } from '../variable';
import Ripple from 'react-native-material-ripple';

export default function OnBoardingScreen({ navigation }) {
    // const [height, width] = Dimensions.get('window')
    const ref = useRef(null);
    const [currentIn, setCurrent] = useState(0);

    const UpdateCurrentSlide = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / UseOrientation.width);
        setCurrent(currentIndex)
    }
    const goNext = () => {

        const nextSlideIndex = currentIn + 1;
        const offset = nextSlideIndex * UseOrientation.width;
        ref?.current.scrollToOffset({ offset });
        setCurrent(nextSlideIndex);
    }
    const slides = [
        {

            id: 1,
            image: require = (images.Group785),
            title: 'Create your Online Store',
            subtitle:
                "Become a seller on CleverTop and \n reach  out to million of B2B buyers.",
            skip: "SKIP"
        },
        {
            id: 2,
            image: require = (images.Group3682),
            title: 'Grow Your Business',
            subtitle:
                ' Expand your business by distributing \n your good online',
            skip: "SKIP"
        },
        {
            id: 3,
            image: require = (images.Group787),
            title: 'Manage from everywhere',
            subtitle: ' Multiplying Your earning and use our \n suites of shipping payments, \n marketing, and other services',
            next: "Next"
        }
    ];
    const Slide = ({ item }) => {
        return (
            <View >
                <View style={{ flex: 1,flexDirection : 'column', backgroundColor: '#fff',  justifyContent: 'center',margin : 40,}}>
                    <View style={{
                        flex: 0.99, backgroundColor: '#fff',
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: "#fff", 
                    }}>
                        <Image source={item.image}
                            style={{
                                marginLeft: 30,
                                height: "50%",
                                width: 300,
                                resizeMode: 'contain'
                            }}
                        />
                        <View style={{ flex: 0.2 }}>
                            <Text style={styles.title1}>{item.title}</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 16, fontWeight: '700',
                                color: '#707070'
                            }}>{item.subtitle}</Text>
                        </View>

                        <View style={{  top: "35%",  flex : 0.1, flexDirection : 'row',
                    justifyContent : 'center',alignItems :'center', top : 100
                    }}>

                            <View style={{
                                flex : 0.5,
                               justifyContent : 'center',
                               alignItems : 'center',
                            //    width: 380, top: 70,
                                backgroundColor: '#fff',
                                flexDirection: 'row',
                            }}>
                                {slides.map((_, index) => (
                                    <View                                   
                                    key={index} style={[styles.indicator, currentIn == index && { backgroundColor: '#A52021', width: 75,    }]} />
                                ))}
                            
                            
                                <View style={{ flex : 1, justifyContent : 'center', }}
                                   
                                >
                                    <TouchableOpacity>
                                    <Text 
                                     onPress={goNext}
                                    style={{
                                        top : 20,
                                        alignSelf: 'flex-end',
                                        color: '#A52021',
                                        fontSize: 22,
                                        fontWeight: '700'
                                    }}>{item.skip}</Text>
                                    </TouchableOpacity>
                                   

                          
                                     <TouchableOpacity style={{ alignSelf: 'flex-end',  }}
                                    onPress={() => navigation.navigate('Login')} >
                                     <Text style={{bottom : 10,
                                    alignSelf: 'flex-end',
                                        color: '#A52021',
                                        fontSize: 22,
                                        fontWeight: '700'
                                    }}>{item.next}</Text>
                                </TouchableOpacity>


                                </View>

                                
                            </View>
                            
                        </View>
                    </View>
                    <View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <FlatList
                ref={ref}
                data={slides}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ height: '100%'}}
                renderItem={({ item }) => <Slide item={item} />}
                onMomentumScrollEnd={UpdateCurrentSlide}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title1: {
        color: "#A52021",
        fontSize: 28,
        fontWeight: '600'
    },
    indicator: {
        height: 15,
        width: 15,
        backgroundColor: '#C4BFBF',
        borderRadius: 10,
        margin: 5, 
      
    }
})