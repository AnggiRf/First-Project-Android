import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { UserIcon } from '../../../assets/icons'
import { UserIcon } from '@assets'

export default function HeaderHome() {
  return (
    <View style={styles.container}>
        <View style={styles.leftContent}>
            {/* picker location */}
            <Text>Select Location</Text>
            <Text style={styles.textContent}>Gedangan, Sidoarjo</Text>
        </View>
        <TouchableOpacity style={styles.rightContent}>
            <Image
                source={UserIcon}
                style={styles.icon}
                resizeMode= 'contain'
            />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '2.5%',
        marginHorizontal: '2%',
        marginTop: '2%',
        // alignItems: 'center',
        // backgroundColor: '#F2FA5A',
    },
    icon: {
        width: 40, 
        height: 40
    },
    textContent1: isPadding => ({
        color: '#000', 
        fontWeight: 'bold',
        paddingTop: isPadding ? 'paddingTop: 8' : 'paddingTop: 0'
    }),
    textContent: {
        color: '#000', 
        fontWeight: 'bold',
        paddingTop: 4,
    },
    leftContent: {
        // padding: 0,
    },
    rightContent: {
        // padding: 0,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    btnIcon: {
        backgroundColor: '#FFF',
        borderRadius: 16, 
        padding: 12
    }
})