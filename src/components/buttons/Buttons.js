import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Color from '../../utilities/constant/color/Color';

const buttons = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[styles.button,{backgroundColor: props.buttonBackgroundcolor}]}>
                    {props.buttonName}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        color: Color.plainWhite,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:150,
        padding:10
    }
})

export default buttons;