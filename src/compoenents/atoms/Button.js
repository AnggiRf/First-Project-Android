import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const Button = (props) => {
    return (
        // <View style = {{bottom: 0,width: '92%', marginHorizontal: '4%', marginVertical: '10%'}}>
        //     <TouchableOpacity style={props.style}>
        //         <Text style={styles.text}>{props.text}</Text>
        //     </TouchableOpacity>
        // </View> 
        <TouchableOpacity style={props.style}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    text: {color: "#000", fontWeight:'bold',},
});

export default Button;