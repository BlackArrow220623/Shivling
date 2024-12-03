import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Color from '../../utilities/constant/color/Color';
import Feather from "react-native-vector-icons/Feather";

const buttonsWithIcons = (props) => {
    return (
        <TouchableOpacity style={styles.cartButton} onPress={() => props.addToCart(props.price,props.productName,props.image)}>
            <Feather name='shopping-cart' style={styles.cartIcon} size={30} color={Color.plainWhite} />
            <Text style={styles.cartText}>
                ADD TO CART
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cartButton: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 180,
        backgroundColor: Color.buttonColor,
        padding: 20,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        elevation: 10,
        borderBottomColor: '#0D5EF985',
    }, cartText: {
        color: Color.plainWhite,
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 15
    }, cartIcon: {
        marginRight: 20
    }
})

export default buttonsWithIcons;