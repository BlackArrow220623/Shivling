import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Home() {
  return (
    <View style={{backgroundColor:"#fff"}} >
            <Text style={styles.Text}>This is Home Screen</Text> 
            
          </View>
  );
}

const styles = StyleSheet.create({
    Text:{
      fontSize:25,
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center",
      textAlign: 'center'
    }
  });

export default Home;
