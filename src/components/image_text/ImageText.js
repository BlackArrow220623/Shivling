import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Color from '../../utilities/constant/color/Color';

const image = (props) => {
    return (
        <View style={styles.productDetails}>
            <Text style={styles.productName}>
                {props.productName}
            </Text>
            <Text style={styles.shopName}>
                {props.shopName}
            </Text>
            <Text style={styles.price}>
                {props.price}
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    productDetails: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    price: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '700',
    }, shopName: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 12,
        fontWeight: '400',
        color: Color.serchInputText
    }, productName: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        fontWeight: '700'
    },
})

export default image;