import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-elements';

const errorMessage = (props) => {
    return (
        <View>
            <Text style={styles.errorMessage}>
                {props.errorMessage}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorMessage:{
        color:'red',
        fontSize: 16,
        marginLeft:35
    }
})

export default errorMessage;