import React, { useState,useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Color from '../../utilities/constant/color/Color';
import Label from '../../utilities/constant/label/Label';


const DropdownComponent = (props) => {
    const [value, setValue] = useState(null);

    const dropdown = (val) => {
        props.dropdownValue(val);
        setValue(val);
    };
    useEffect(()=>{
        setValue(props.value)
    },[props.value])
    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={props.data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={Label.placeholderDropdown}
            value={value}
            onChange={item => dropdown(item)}
            iconStyle={{ 
                width: 28, 
                height: 28,
                marginRight:10
            }}
        />
    );
};

const styles = StyleSheet.create({
    dropdown: {
        borderWidth: 1,
        width: 380,
        height: 65,
        marginBottom: 10,
        borderRadius: 12,
        backgroundColor: Color.inputBackgroundColor,
        paddingLeft: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 17
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
});

export default DropdownComponent;