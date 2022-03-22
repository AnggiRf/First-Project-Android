import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SliderOnboard1 } from '@assets'
import { Button } from '@components'

export default function Onboard1() {
  return (
    <ScrollView contentContainerStyle={styles.containers}>
        <View style={styles.imageContainer}>
            <Image
                source={SliderOnboard1}
                style={styles.imageSlider}
                resizeMode='stretch'
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>Print your needs anywhere</Text>
            <Text style={styles.text2}>Order your printing needed in one hand and make your life easier.</Text>
        </View>
        <Button
            style={styles.Button}
            text='Join Now'
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    containers: {
        // flex: 1,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        // height: '100%',
        // width: '100%'
        // backgroundColor: '#FFFA4D',
        flexGrow: 1, 
        // justifyContent: 'space-between', 
        flexDirection: 'column', 
    },
    imageContainer: {
        // height: '10%',
        alignItems: 'flex-start',
        // backgroundColor: '#E04DB0',
        // width: '100%',
        height: '55%'
        // alignContent: 'flex-start'
    },
    imageSlider: {
        width: '100%',
        height: '100%'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000'
    },
    text2: {
        width: '80%',
        marginTop: '1%',
        paddingLeft: 3,
    },
    textContainer: {
        // height: '11%', 
        // width: '88%', 
        // backgroundColor: '#F2C9E1',
        marginHorizontal: '5%',
        marginTop: '6%', 
    },
    Button: {
        backgroundColor: "#F8AF86",
        width: '96%',
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        elevation: 3,
        marginHorizontal: '2%',
        marginTop: '6%',
    },
})