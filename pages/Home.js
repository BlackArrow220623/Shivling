import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Home() {
  return (
    <View style={{backgroundColor:"#fff"}} >
            <Text style={styles.Text}>ShivLing</Text>
            
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

export default Home;