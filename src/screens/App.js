import React, { useState } from "react"
import { 
    Image, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Switch, 
    View, 
    ScrollView
} from "react-native"
import { Header, Button, Input } from "@components";
import { UserProfile} from "@assets";
// import Header from "@components";

const App = () => {
    const [compSwitch, setSwitch] = useState({
        value: true,
    });
    //set text button
    // const [btn, setBtn] = useState([]);
    const [textInput, setTextInput] = useState('');
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Header 
                    styleHeader = {styles.header}
                    fontHeader = {styles.fontHeader}
                    text = "Header"
                />
                <TouchableOpacity style={{justifyContent: "center", alignItems: "center"}}>
                    <Image source={UserProfile} style={styles.image} resizeMode="contain"/>
                </TouchableOpacity>
                <Button 
                    style = {styles.button}
                    text = {textInput}
                />
                <Input 
                    style = {styles.inputPosition} 
                    placeholder = "Type here!"
                    // onChangeText = {(value) => setTextInput(value)}
                    onSubmitEditing={(value) => setTextInput(value.nativeEvent.text)}     
                />
                {/* <Text>Tes: {textInput}</Text> */}
                <View 
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                    <Switch
                        value={compSwitch.value}
                        onValueChange={() => setSwitch({value: !compSwitch.value})}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width:300, 
        height:300
    },
    button: {
        backgroundColor: "#2D31FA",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 3, 
    },
    inputPosition: {
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginTop: 20,
    },
    header: {
        backgroundColor: 'crimson',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    fontHeader: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default App