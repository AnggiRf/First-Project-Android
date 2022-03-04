import React from "react";
import { StyleSheet, Text, View} from "react-native"

const Header = (props) =>{
    return(
        <View>
            {/* <StatusBar barStyle="light-content" backgroundColor="crimson"/> */}
            <View style={props.styleHeader}>
                <Text style={props.fontHeader}>{props.text}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({});

export default Header