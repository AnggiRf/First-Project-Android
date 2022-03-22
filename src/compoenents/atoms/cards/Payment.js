import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PaymentIcon, PlusIcon } from '../../../assets/icons'
// import { PaymentIcon, PlusIcon} from '@assets'


export default function Payment() {
    // 
  return (
    <View style={styles.container}>
        <View style={styles.leftContent}>
            <Text style={styles.textContent}>Rp 15.000</Text>
            <TouchableOpacity>
                <Text style={styles.textContent}>Tap for Details</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.rightContentContainer}>
            <View style={styles.rightContent}>
                <TouchableOpacity style={styles.btnIcon}>
                    <Image
                        source={PaymentIcon}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.textContent}>Pay</Text>
            </View>
            <View style={styles.rightContent}>
                <TouchableOpacity style={styles.btnIcon}>
                    <Image
                        source={PlusIcon}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.textContent}>Topup</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "#00B8B1",
        paddingVertical: 9,
        // paddingHorizontal: 9,
        borderRadius: 16,
        marginHorizontal: '2%',
        marginTop: '6%',
        alignItems: 'center',
        // backgroundColor: '#F2FA5A',
    },
    rightContentContainer: {
        // flexWrap: 1,
        // justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: '#F2FA5A',
        // padding: 9,
    },
    icon: {
        width: 16, 
        height: 16
    },
    textContent1: isPadding => ({
        color: '#FFF', 
        fontWeight: 'bold',
        paddingTop: isPadding ? 'paddingTop: 8' : 'paddingTop: 0'
    }),
    textContent: {
        color: '#FFF', 
        fontWeight: 'bold',
        paddingTop: 8,
    },
    leftContent: {
        paddingLeft: 16, 
        paddingTop: 10, 
        paddingBottom: 7
    },
    rightContent: {
        paddingRight: 26, 
        paddingTop: 11,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    btnIcon: {
        backgroundColor: '#FFF',
        borderRadius: 16, 
        padding: 12
    }
})