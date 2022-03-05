import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Header, Input, Picker, Button} from "@components";
import { UserProfile } from "@assets";

const Profile = () => {
    return (
        <View style = {{flex : 1, flexDirection: 'row', flexWrap: 'wrap'}}>
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
                
                <Button 
                        style = {styles.button}
                        text = "Save"
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    //style
    header: {
        backgroundColor: '#FFF',
        width: '96%',
        margin: '2%',
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
        width: '96%',
        margin: '2%',
        alignItems:"center",
        // backgroundColor: '#E900FF',
    },
    containerInput: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '2%',
        marginBottom: '2%',
        // backgroundColor: '#FFC600',
    },
    textInput: {
        width: '100%',
        marginTop: '4%',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: "#F8AF86",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 3,
    },
})

export default Profile