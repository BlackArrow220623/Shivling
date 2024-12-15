import React from 'react';
import { StyleSheet, Text , View} from 'react-native';

export default function App() {
    return (

      <View style={{backgroundColor:"#fff"}} >
        <Text style={styles.Text}>hii</Text>
      </View>
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

