import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = (props) => {
    return (
        <TouchableOpacity style={props.style}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    text: {color: "#FFF", fontWeight:'bold'},
});

export default Button;