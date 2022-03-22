import React, { useEffect, useState } from "react"
import { 
    Image, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Switch, 
    View, 
    ScrollView,
    FlatList,
    Alert,
    ToastAndroid,
    BackHandler,
    PermissionsAndroid,
    Dimensions
} from "react-native"
import { Header, Button, Input } from "@components";
import { UserProfile} from "@assets";
// import Header from "@components";


const App = () => {
    const requestCameraPermission = async() => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                   title: "Izinkan Akses",
                   message: "Izinkan aplikasi mengakses kamera",
                   buttonNeutral: 'Nanti',
                   buttonNegative: 'Cancel',
                   buttonPositive: 'Ok' 
                }
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Izin diberikan');
            }else{
                console.log('Izin ditolak');
            }
        } catch (error) {
            console.log(error);
        }
    }

    //versi 1 backhandler
    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //         {
    //           text: "Cancel",
    //           onPress: () => null,
    //           style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //       ]);
    //       return true;
    //     };
    
    //     const backHandler = BackHandler.addEventListener(
    //       "hardwareBackPress",
    //       backAction
    //     );

           //clean event listener  
    //     return () => backHandler.remove();
    // }, []);

    //versi 2
        const backAction = () => {
          Alert.alert("msg","Apakah anda yakin untuk keluar aplikasi?", [
            {
              text: "Tidak",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Ya", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        }

        useEffect(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction)

            return () => 
                BackHandler.removeEventListener("hardwareBackPress", backAction)
        }, [])

    const [compSwitch, setSwitch] = useState({
        value: true,
    });
    const [datas, setDatas] = useState({
        data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        makanan: [
            {
                'id' : 1,
                'nama' : 'sosis',
                'harga' : '100000'
            },
            {
                'id' : 2,
                'nama' : 'bakso',
                'harga' : '200000'
            },
            {
                'id' : 3,
                'nama' : 'rendang',
                'harga' : '300000'
            },
        ]
    });
    //set text button
    // const [btn, setBtn] = useState([]);
    const [textInput, setTextInput] = useState('');

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <Header 
                    styleHeader = {styles.header}
                    fontHeader = {styles.fontHeader}
                    text = "Header"
                />
                <TouchableOpacity 
                    style={{justifyContent: "center", alignItems: "center"}}
                    onPress={() => 
                    //     Alert.alert('msg', 'Ini Gambar', [
                    //     {text: 'Cancel',
                    //       onPress: () => console.log('cancel ditekan'),
                    //       style: 'cancel'  
                    //     },
                    //     {text: 'Ok',
                    //     onPress: () => console.log('Ok ditekan'),
                    //     style: 'cancel'  
                    //   },
                    // ])
                    requestCameraPermission()
                    }>
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
                {/* <View 
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                    <Switch
                        value={compSwitch.value}
                        onValueChange={() => setSwitch({value: !compSwitch.value})}
                    />
                </View> */}

                {/* flatlist */}
                
            </ScrollView>
            <View style={{height: '20%'}}>
                    <FlatList
                        data={datas.makanan}
                        renderItem={({item,index}) => (
                            <TouchableOpacity 
                                style={styles.inputPosition}
                                onPress={() => 
                                    ToastAndroid.show(item.nama + ' di klik', ToastAndroid.SHORT)//LONG, SHORT
                                }>
                                <Text>{item.nama}</Text>
                                <Text>{item.harga}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => item.id}
                    />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width:200, 
        height:200
    },
    button: {
        backgroundColor: "#2D31FA",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 10,
        elevation: 3, 
    },
    inputPosition: {
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginTop: 10,
        borderWidth: 1,
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