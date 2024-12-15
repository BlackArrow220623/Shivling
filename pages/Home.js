import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Home() {
  return (
    <view style={style.viewStyle}>
        <text style={style.headingStyle}>React Navigation</text>
        <text style={style.textStyle}>This Is Home Screen</text>
    </view>
  );
}

const style = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flex: 1,
    },

    textStyle: {
        fontSize: 28,
        color: 'black',
    },
    headingStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
});

export default Home;
