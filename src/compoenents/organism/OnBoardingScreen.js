import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
import { SliderOnboard1, SliderOnboard2, SliderOnboard3 } from '@assets'
import { Onboard } from '@components'

export default function OnBoardingScreen() {
    const navigation = useNavigation()
    const swiperRef = useRef(null)
    const onEndBtn = () => {
        navigation.navigate({
            name: 'Login'
        })
      }
    const items = [
        //array of object
        {
            image: SliderOnboard1,
            text1: "Print your needs anywhere",
            text2: "Order your printing needed in one hand and make your life easier.",
            btnText: "Join Now"
        },
        {
            image: SliderOnboard2,
            text1: "Easy find your printing location",
            text2: "Easily find all the nearest printing locations and make your life easier.",
            btnText: "Join Now"
        },
        {
            image: SliderOnboard3,
            text1: "Manage all your order",
            text2: "Monitor all your orders very easily just with one hand.",
            btnText: "Join Now"
        },
    ]

  return (
    <View style={styles.container}>
        <Swiper 
            style={styles.wrapper} 
            showsButtons={false}
            ref={swiperRef}
            // paginationStyle={{
            //     bottom: 70
            // }}
            loop={false}
            >
                {/* dynamic component */}
            {items.map((item, index) => (
                <View key={index} style={styles.slide}>
                    <Onboard
                        image={item.image}
                        text1={item.text1}
                        text2={item.text2}
                        btnText={item.btnText}
                    />
                    <View style={styles.btnWrapper}>
                        <TouchableOpacity>
                            <Text style={styles.textSkipStyle} onPress={() => onEndBtn()}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textNextStyle} onPress={() => index == items.length-1 ? navigation.navigate({name: 'Login'}) : swiperRef.current.scrollBy(1, true)}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
                {/* static component */}
            {/* <View style={styles.slide}>
                <Onboard1/>
                <View  style={styles.btnWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.textSkipStyle} onPress={() => onEndBtn()}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textNextStyle} onPress={() => swiperRef.current.scrollBy(1, true)}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.slide}>
                <Onboard2/>
                <View  style={styles.btnWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.textSkipStyle} onPress={() => onEndBtn()}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textNextStyle} onPress={() => swiperRef.current.scrollBy(1, true)}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.slide}>
                <Onboard3/>
                <View  style={styles.btnWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.textSkipStyle} onPress={() => onEndBtn()}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textNextStyle} onPress={() => navigation.navigate({name: 'Login'})}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  btnWrapper: {
    // backgroundColor: '#E04DB0', 
    flexDirection: 'row', 
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    bottom: 23,
    marginHorizontal: '4%',
},
textNextStyle: {
    color: '#332FD0',
    fontWeight: 'bold',
},
textSkipStyle: {
    color: '#000',
    fontWeight: 'bold',
},
})