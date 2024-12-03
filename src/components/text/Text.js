import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Color from '../../utilities/constant/color/Color';
import { Text } from 'react-native-elements';

const text = (props) => {
    const [marginBottom,setMarginBottom] =useState(0);
    const [marginLeft,setMarginLeft] =useState(0);
    useEffect(()=>{
        setMarginBottom(props.marginBottom)
        setMarginLeft(props.marginLeft)
    },[props.marginBottom,props.marginLeft]);
    return (
        <View>
            <Text style={[styles.label,{marginBottom:props.marginBottom,marginLeft:props.marginLeft}]}>
                {props.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label:{
        padding: 10,
        fontWeight: '700',
        fontSize: 17,
    }
})

export default text;