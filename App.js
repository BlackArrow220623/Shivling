import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function App() {
    return (
      <Text style={{height:"100%",alignItems:"center"}}>
        <Text style={styles.Text}>RACHANA</Text>
      </Text>
    );
}

const styles = StyleSheet.create({
  Text:{
    fontSize:25,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"
  }
});

