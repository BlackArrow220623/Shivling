import React from 'react';
import { StyleSheet, Text , View} from 'react-native';

export default function App() {
    return (
<<<<<<< Updated upstream
      <Text style={{height:"100%",alignItems:"center"}}>
        <Text style={styles.Text}>RACHANA</Text>
      </Text>
=======
      <View style={{backgroundColor:"#fff"}} >
        <Text style={styles.Text}>ShivLing</Text>
      </View>
>>>>>>> Stashed changes
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

