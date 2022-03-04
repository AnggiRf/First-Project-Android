import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Header, Input, Picker} from "@components";
import { UserProfile } from "@assets";

const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header 
                    styleHeader = {styles.header}
                    fontHeader = {styles.fontHeader}
                    text = "My Profile"
                />
                <View style = {styles.containerImage}>
                    <Image source = {UserProfile} style = {styles.image} resizeMode = "contain" />
                    <Text style={{color: '#00B4D8',fontWeight: 'bold',fontSize: 18,  paddingHorizontal: 20}}>Change Photo</Text>
                </View>
                <View style = {styles.containerInput}>
                    <Input
                        style = { styles.textInput }
                        placeholder = "Full Name"
                    />
                    {/* <Input
                        style = { styles.textInput }
                        placeholder = "Gender"
                    /> */}
                    <Picker 
                        placeholder = "Gender"
                    />
                    <Input
                        style = { styles.textInput }
                        placeholder = "Email"
                    />
                    <Input
                        style = { styles.textInput }
                        placeholder = "Date of Birth"
                    />
                    <Input
                        style = { styles.textInput }
                        placeholder = "Phone Number"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    //style
    header: {
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        // backgroundColor: "#2D31FA",
    },
    fontHeader: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
        width: 100,
        height: 100,
    },
    containerImage: {
        flexDirection: "row", 
        paddingHorizontal: 20, 
        paddingVertical: 20,
        alignItems:"center",
    },
    containerInput: {
        paddingHorizontal: 20, 
    },
    textInput: {
        marginTop: 20,
        borderBottomWidth: 1,
    },
})

export default Profile