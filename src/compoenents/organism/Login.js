import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LoginIcon, GoogleIcon, AppleIcon } from '@assets';
import { Input, Button } from '@components';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        {/* height 30% */}
        <View style={{height: '30%', width: '100%', backgroundColor: '#FFC600'}}>
            <Image 
                source={LoginIcon} 
                style={styles.iconLogin} 
                resizeMode='contain'
            />
        </View>
        {/* height 13% */}
        <View style={styles.textLoginContainer}>
            <Text style={styles.textLogin1}>Login Now</Text>
            <Text style={styles.textLogin2}>Login now and print all your needs wthout worying about anything.</Text>
        </View>
        {/* height ?% */}
        <Input
            style={styles.inputText}
            placeholder='Phone Number'
        />
        <Button
            style={styles.Button}
            text='Login'
        />
        <View style={{marginTop: '4%', width: '100%', alignItems: 'center'}}>
            <Text>Or Login With</Text>
        </View>
        <TouchableOpacity style={styles.containerOptionLogin}>
            <Image source={GoogleIcon} style={styles.iconGoogle} resizeMode='contain'/>
            <Text> Login With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerOptionLogin}>
            <Image source={AppleIcon} style={styles.iconApple} resizeMode='contain'/>
            <Text> Login With Apple</Text>
        </TouchableOpacity>
        <View style={styles.signUpTextContainer}>
            <Text>i'm new,</Text>
            <Text 
            // onPress={() => Linking.openURL('wwww.google.com')}
            onPress={() => navigation.navigate('Register')}  
            style={{color: '#5902EC', fontWeight: 'bold'}}> Sign me up
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '100%',
    },
    iconLogin: {
        // alignItems: 'flex-start',
        width: '100%',
        height: '100%',
    },
    textLoginContainer: {
        height: '13%', 
        width: '96%', 
        // backgroundColor: '#F2C9E1',
        marginHorizontal: '2%',
        marginTop: '2%', 
    },
    textLogin1: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    textLogin2: {
        width: '80%',
        marginTop: '1%',
        paddingLeft: 3,
    },
    inputText: {
        width: '96%',
        marginTop: '4%',
        borderBottomWidth: 1,
        borderBottomColor: '#99A0A0',
        marginHorizontal: '2%',
        alignItems: 'center',
        // backgroundColor: '#FFFA4D',
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
    containerOptionLogin: {
        borderWidth: 1, 
        borderRadius: 40, 
        paddingVertical: 10, 
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent:'center',
        marginHorizontal: '2%',
        marginTop: '4%',
        width: '96%',
    },
    iconGoogle: {
        height: 29,
        width: 30,
    },
    iconApple: {
        height: 29,
        width: 30,
    },
    signUpTextContainer: {
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent:'center',
        marginHorizontal: '2%',
        marginTop: '4%',
        width: '96%',
    }
})