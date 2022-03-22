import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ArrowLeft } from '@assets';
import { Input,Button } from '@components';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation()
  return (
    // <View style={styles.container}>
    //     {/* <ScrollView>
    //     //    scrollview membuat btn yang berada dibottom naik ke atas menggulung/menutupi form
    //     </ScrollView> */} 
    // </View>
    <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity 
                style={styles.header}
                onPress={() => navigation.pop()}>
                    <Image 
                        source={ArrowLeft}
                        style={styles.arrowIconStyle}
                    />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 30, color: '#000'}}>Join Now</Text>
                <Text style={{marginTop: 5}}>Enjoy the convenience of printing by joining us</Text>
            </View>
                <View style={styles.formInput}>
                    <Input
                        style={styles.inputText}
                        placeholder='Your Name'
                    />
                    <Input
                        style={styles.inputText}
                        placeholder='Type Your Email Here'
                    />
                    <Input
                        style={styles.inputText}
                        placeholder='Example 0812112321'
                    />
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        // height: '100%',
        // width: '100%'
        // backgroundColor: '#FFFA4D'
        flexGrow: 1, 
        justifyContent: 'space-between', 
        flexDirection: 'column' 
    },
    header: {
        // width: '96%',
        marginHorizontal: '5%',
        marginVertical: '2%',
        // height: '10%',
        alignItems: 'flex-start',
        // backgroundColor: "#2D31FA",
    },
    arrowIconStyle: {
        width: 24,
        height: 24,
    },
    textContainer: {
        // height: '11%', 
        // width: '88%', 
        // backgroundColor: '#F2C9E1',
        marginHorizontal: '5%',
        marginTop: '9%', 
    },
    formInput: {
        // width: '88%',
        marginTop: '8%',
        marginHorizontal: '5%',
        // backgroundColor: '#FFC600',
    },
    inputText: {
        // width: '96%',
        borderBottomWidth: 1,
        borderBottomColor: '#99A0A0',
        marginHorizontal: '2%',
        alignItems: 'center',
        marginVertical: '4%',
        // backgroundColor: '#FFFA4D',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 26
    },
    btnText: {
        color: '#000',
        fontWeight: 'bold',
    },
    button: {
        width: '88%',
        position: 'relative',
        // bottom:0,
        backgroundColor: "#F8AF86",
        paddingVertical: '4%',
        marginHorizontal: '5%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        elevation: 3,
    },
})