import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@components'

export default function Onboard(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                source={props.image}
                style={styles.imageSlider}
                resizeMode='stretch'
            />
        </View>
        <View style={styles.textContainer}>
                <Text style={styles.text1}>{props.text1}</Text>
                <Text style={styles.text2}>{props.text2}</Text>
            </View>
            <Button
                style={styles.Button}
                text={props.btnText}
        />    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
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
    contentContainer : {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'space-between',
    },
    imageSlider: {
        width: '100%',
        height: '100%'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
        width: '100%',
    },
    text2: {
        // width: '80%',
        marginTop: '1%',
        paddingLeft: 3,
        // backgroundColor: '#FFC600',
    },
    textContainer: {
        height: '19%', 
        // width: '88%',
        // flex: 1,
        // backgroundColor: '#F2C9E1',
        marginHorizontal: '5%',
        marginTop: '6%',
        // width: '100%', 
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
        bottom: 0,
    },
})