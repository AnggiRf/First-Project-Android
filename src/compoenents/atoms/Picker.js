import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const Picker = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Pria', value: 'pria'},
        {label: 'Wanita', value: 'wanita'}
  ]);
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder = {props.placeholder}
            style = {{ marginTop: 20, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}}
        />
    )
}

export default Picker