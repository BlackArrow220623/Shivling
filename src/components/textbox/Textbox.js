import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Color from '../../utilities/constant/color/Color';
import AntDesign from "react-native-vector-icons/AntDesign";

const textbox = (props) => {
    const [value,setValue] = useState('');
    const handleChange =(val)=>{
        props.onchangeTextBox(val);
        setValue(val)
    }
    useEffect(()=>{
        setValue(props.value)
    },[props.value])
    return (
        <View>
            <TextInput
                style={styles.textBox}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                value={value}
                onChangeText={(text)=>handleChange(text)}
                editable={props.editable}
            />
            <AntDesign name={props.iconName} size={30} style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        borderWidth: 1,
        width: 380,
        height: 65,
        marginBottom: 10,
        borderRadius: 12,
        backgroundColor: Color.inputBackgroundColor,
        paddingLeft: 30,
        marginLeft:'auto',
        marginRight:'auto',
        fontSize:17
    },icon:{
        position: 'absolute',
        left: 350,
        top:20
    }
})

export default textbox;