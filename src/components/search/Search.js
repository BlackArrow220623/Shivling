import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet,TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import Color from '../../utilities/constant/color/Color';
import Feather from "react-native-vector-icons/Feather";

const search = (props) => {
    const filterData = (text) =>{
        props.filter(text)
    }
    return (
        <View style={styles.searchbar}>
            <Feather name='search' style={styles.serchIcon} size={30} />
            <TextInput
                style={styles.input}
                placeholder='Search..'
                onChangeText={(text)=>filterData(text)}
            />
            <Feather name='sliders' style={styles.searchFilter} size={30}
                onPress={() => { props.onPressFilter() }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchbar: {
        marginTop: 30,
    },
    serchIcon: {
        position: 'absolute',
        left: 60,
        top: 20,
        zIndex: 1
    },
    searchFilter: {
        position: 'absolute',
        zIndex: 1,
        left: 350,
        top: 20,
    },input: {
        height: 40,
        borderWidth: 1,
        width: 375,
        height: 68,
        paddingLeft: 80,
        fontSize: 20,
        borderRadius: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: Color.inputBackgroundColor,
        backgroundColor: Color.inputBackgroundColor,
    },
})

export default search;