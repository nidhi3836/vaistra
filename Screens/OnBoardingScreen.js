import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import images from '../Components/images'
import UseOrientation from './UseOrientation';
import { widthToDp } from '../variable';
import Ripple from 'react-native-material-ripple';

export default function OnBoardingScreen({navigation}) {
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
        ref?.current.scrollToOffset({offset});
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
            next : "Next"
        }
    ];
    const Slide = ({ item }) => {
        return (
            <View style={{backgroundColor:'#fff',alignItems: 'center', justifyContent: 'center',}}>
               <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    marginHorizontal: 20,backgroundColor :"#fff"
                }}>
                    <Image source={item.image}
                        style={{
                            height: "50%",
                            width: 350,
                            resizeMode: 'contain'
                        }}
                    />
                    <View>
                        <Text style={styles.title1}>{item.title}</Text>
                    </View>
                    <Text style={{
                        textAlign: 'center',
                         fontSize: 16, fontWeight: '700',
                        color: '#707070'
                    }}>{item.subtitle}</Text>
                    <View style={{ justifyContent: 'space-between',top: "18%", }}>

                        <View style={{
                            width: 370, top: 70, 
                            backgroundColor: '#fff',
                            flexDirection: 'row',
                        }}>
                            {slides.map((_, index) => (
                                <View key={index} style={[styles.indicator, currentIn == index && { backgroundColor: '#A52021', width: 65 }]} />
                            ))}
                        </View>
        <View style={{ alignSelf: 'flex-end', top: 40,marginRight :20  }}>
                        <Ripple 
                            onPress={goNext}
                        >
                          <Text style={{
                          color: '#A52021',
                          fontSize: 22,
                          fontWeight: '700'}}>{item.skip}</Text>               

                        </Ripple>

                        <Ripple style={{  alignSelf: 'flex-end',bottom : 35}}
                            onPress={()=>navigation.navigate('Login')}
                        >
                          <Text style={{
                          color: '#A52021',
                          fontSize: 22,
                          fontWeight: '700'}}>{item.next}</Text>
                        </Ripple>
                        </View>
                    </View>
                </View>
                <View>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#d5d6d6" }}>
            <FlatList
                ref={ref}
                data={slides}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ height: "100%" }}
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
        height: 20,
        width: 20,
        backgroundColor: '#C4BFBF',
        borderRadius: 10,
        margin: 5
    }
})