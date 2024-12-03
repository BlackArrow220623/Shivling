import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Color from '../../utilities/constant/color/Color';
import AntDesign from "react-native-vector-icons/AntDesign";

const ProdImage=(props)=> {
    return (
        <View>
            <View style={styles.imageView}>
                <Image
                    source={props.image}
                    style={styles.image}
                />
                <AntDesign name='heart' size={30} style={[styles.heartIcon, props.itemSelected == true ? { color: "red" }
                    : { backgroundColor: Color.inputBackgroundColor }]} onPress={()=>props.heartIcon(props.id)} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    image: {
        height: 140,
        width: 140,
        marginLeft: 'auto',
        marginRight: 'auto',
    }, imageView: {
        height: 150,
        width: 210,
    },
    image: {
        height: 140,
        width: 140,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    heartIcon: {
        position: 'absolute',
        left: 160,
        top: 10,
    }
})

export default ProdImage;