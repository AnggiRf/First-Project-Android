/* eslint-disable prettier/prettier */
import React from "react";
import { TextInput, StyleSheet} from "react-native";

const Input = (props) => {
    return (
        <TextInput 
            style={props.style}
            placeholder = {props.placeholder}
            // onChangeText = {props.onChangeText}
            onSubmitEditing = {props.onSubmitEditing}
        />
    );
};

const styles = StyleSheet.create({
    input: {borderWidth: 1},
});

export default Input;
