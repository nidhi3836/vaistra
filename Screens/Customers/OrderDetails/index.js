import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import images from '../../../Components/images'
import { heightToDp } from '../../../variable'
import UseOrientation from '../../UseOrientation'

export default function OrderDetails({navigation}) {

    const inputs = Array(5).fill('');
    const [day, setDay] = useState(null);

    useEffect(() => {
        let day = getDay();
        setDay(day);
    }, []);

    const getDay = () => {
        let today = new Date();
        // let dayName = (today. getVarDate());
        let date = (today.getDate());
        let day = (today.getDay()) + (today.getDay());
        let month = (today.getMonth());
        let year = (today.getFullYear());
        return date + "/" + month + "/" + year;
    }


    return (

        <View style={{ backgroundColor: '#fff' }}>
            <Header
                image={images.left}
                title={'Order Details'}
                onPress={()=>navigation.navigate('AppStack')}
            />

            <ScrollView
                style={{ backgroundColor: '#fff', }}
            >
                <View
                    style={{ height: UseOrientation.height * 2,
                        backgroundColor: '#fff',}}
                >

                    <View style={{ flex: 0.05, justifyContent: 'center', marginLeft: 20, top: 10, }}>

                        <Text style={{ fontSize: 19, fontWeight: '500', color: '#000' }}>View Order Details</Text>
                    </View>
                    <View style={{ flex: 0.14, backgroundColor: '#fff', margin: 20, borderColor: '#b7b7b7', borderRadius: 8, padding: 15, borderWidth: 1 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.6, }}>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Orders </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>
                                {'' + '26498113464 '}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.6, }}>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Orders Date </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>
                                {day}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.6, }}>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Total Product </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#444' }}>
                                {'2 Items'}
                            </Text>
                        </View>

                    </View>

                    <View style={{ flex: 0.04, justifyContent: 'center', marginLeft: 20, top: 5, }}>
                        <Text style={{ fontSize: 19, fontWeight: '500', color: '#000' }}>Customer Details</Text>
                    </View>
                    <View style={{ flex: 0.14, backgroundColor: '#fff', margin: 20, borderColor: '#b7b7b7', borderRadius: 8, padding: 15, borderWidth: 1 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.6, }}>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Buyer's Name </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>
                                {'' + 'Janvi Goel'}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.6, }}>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Email Address </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>
                                {'' + ' janvig@gmail.com'}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.6, }}>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Phone number </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#444' }}>
                                {'' + '9745612385'}
                            </Text>
                        </View>

                    </View>

                    <View style={{ flex: 0.04, justifyContent: 'center', marginLeft: 20, top: 5, }}>
                        <Text style={{ fontSize: 19, fontWeight: '500', color: '#000' }}>
                            Product Information</Text>
                    </View>

                    <View style={{
                        flex: 0.38, backgroundColor: '#d5d5d5', margin: 20,
                        borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 7
                    }}>
                        <View style={{
                            flex: 0.5, backgroundColor: '#fff',
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 0.5, justifyContent: 'center', alignItems: 'center',
                                marginLeft: 10,
                            }}>
                                <Image
                                    // resizeMode='cover'
                                    source={images.man} />
                            </View>
                            <View style={{ flex: 0.9, backgroundColor: '#fff', padding: 15 }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 14,
                                }}>Kook N Keech Marvel</Text>
                                <Text style={{
                                    color: '#a5a3a3',
                                    fontSize: 12,
                                }}>Men Printed Sweat Shirt</Text>
                                <Text style={{
                                    color: '#a5a3a3',
                                    fontSize: 12,
                                }}>{'Product ID' + ' : TsT114115'}</Text>
                                <View style={{ flexDirection: 'row', flex: 0.55 }}>
                                    <Text style={{
                                        color: '#707070',
                                        fontSize: 12,
                                    }}>&#8377; 600.99  </Text>
                                    <Text style={{
                                        textDecorationLine: 'line-through', color: '#a5a3a3',
                                        fontSize: 12,
                                    }}>&#8377;800.00</Text>
                                    <Text style={{
                                        color: 'red',
                                        fontSize: 9,
                                    }}>  20% OFF</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.38, }}>

                                   <View style={{
                                        flex: 0.3, borderWidth: 1, justifyContent: 'center', alignItems: 'center',
                                        borderRadius: 9, borderColor: '#d5d5d5'

                                    }}>
                                        <Text style={{ fontSize: 10 }}>Size : XL</Text>
                                    </View>
                                    <View style={{
                                        flex: 0.3, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 9, borderColor: '#d5d5d5'
                                    }}>
                                        <Text style={{ fontSize: 10 }}>QTY : 1</Text>
                                    </View>
                                </View>

                            </View>
                        </View>


                        <View style={{
                            flex: 0.5, backgroundColor: '#fff',
                            flexDirection: 'row', top: 2,
                        }}>
                            <View style={{
                                flex: 0.5,
                                 justifyContent: 'center', 
                                 alignItems: 'center',
                                 marginLeft: 10,
                            }}>
                                <Image
                                    resizeMode='contain'
                                    source={images.man} />
                            </View>
                            <View style={{ flex: 0.9, backgroundColor: '#fff', padding: 15 }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 14,
                                }}>Kook N Keech Marvel</Text>
                                <Text style={{
                                    color: '#a5a3a3',
                                    fontSize: 12,
                                }}>Men Printed Sweat Shirt</Text>
                                <Text style={{
                                    color: '#a5a3a3',
                                    fontSize: 12,
                                }}>{'Product ID' + ' : TsT114115'}</Text>
                                <View style={{ flexDirection: 'row', flex: 0.55 }}>
                                    <Text style={{
                                        color: '#707070',
                                        fontSize: 12,
                                    }}>&#8377; 600.99  </Text>
                                    <Text style={{
                                        textDecorationLine: 'line-through', color: '#a5a3a3',
                                        fontSize: 12,
                                    }}>&#8377;800.00</Text>
                                    <Text style={{
                                        color: 'red',
                                        fontSize: 9,
                                    }}>  20% OFF</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.38, }}>


                                    <View style={{
                                        flex: 0.3, borderWidth: 1, justifyContent: 'center', alignItems: 'center',
                                        borderRadius: 9, borderColor: '#d5d5d5'

                                    }}>
                                        <Text style={{ fontSize: 10 }}>Size : XL</Text>
                                    </View>
                                    <View style={{
                                        flex: 0.3, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 9, borderColor: '#d5d5d5'
                                    }}>
                                        <Text style={{ fontSize: 10 }}>QTY : 1
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 0.035, justifyContent: 'center', marginLeft: 20, }}>
                        <Text style={{ fontSize: 19, fontWeight: '500', color: '#000' }}>
                            Shipping Address</Text>
                    </View>

                    <View style={{ flex: 0.9, backgroundColor: '#fff' }}>
                        <View style={{ flex: 0.15, backgroundColor: '#fff', margin: 20, borderColor: '#b7b7b7', borderRadius: 8, padding: 12, 
                    borderWidth : 1
                    }}>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Vagheshwari Plot, Opp Mira Socity, Maninagar </Text>

                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Ahemadabad - 380008 </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>
                                Gujarat
                            </Text>
                            <Text style={{ color: '#444', fontWeight: '500' }}>{'Mobile' + ' : 9123456781'}</Text>


                        </View>
                        <View style={{ flex: 0.06, justifyContent: 'center', marginLeft: 20, }}>
                            <Text style={{ fontSize: 19, fontWeight: '500', color: '#000' }}>
                                Payment Method</Text>
                        </View>

                        <View style={{
                            flex: 0.09, backgroundColor: '#fff', margin: 20,
                            flexDirection: 'row', borderRadius: 8,
                            borderWidth : 1,borderColor: '#b7b7b7',
                        }}>
                            <View style={{
                                flex: 0.15,
                                justifyContent: 'center',
                                alignItems: 'center', 
                            }}>
                                <Image source={images.moneyBack} />
                            </View>
                            <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '500' }}>
                                 Cash On Delivery</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.05, justifyContent: 'center', marginLeft: 20, }}>
                            <Text style={{ fontSize: 19, fontWeight: '500', color: '#000' }}>
                                Price  Details(2 Items)</Text>
                        </View>
                        <View style={{ flex: 0.299, backgroundColor: '#fff', margin: 20, borderColor: '#b7b7b7', borderRadius: 8, borderWidth: 1, padding : 5}}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.2, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500' }}>Total MRP </Text>
                                <Text style={{ fontSize: 14, fontWeight: '500' }}>
                                   &#8377; 1600.00
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.2, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500' }}>Discount on MRP  </Text>
                                <Text style={{ fontSize: 14, fontWeight: '500', color :'#4fc648' }}>
                                &#8377; 400.00
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.2, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500' }}>Offer Discount </Text>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#226728' }}>
                                &#8377; 200.00
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.2, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500' }}>Tax </Text>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#444' }}>
                                &#8377; 20.00
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.2, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500' }}>Delivery Charge </Text>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#444' }}>
                                &#8377; 99.99 FREE
                                </Text>
                            </View>

                <View style={{ height : 2, backgroundColor : '#f6f6f6'}}></View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', flex: 0.2, top : 5}}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#444' }}>Total Amount </Text>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#444' }}>
                                &#8377; 1200.00
                                </Text>
                            </View>

                        </View>

                    </View>

                </View>
            </ScrollView>
        </View>


    )
}