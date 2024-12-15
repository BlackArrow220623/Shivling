import React from 'react';
import { StyleSheet, Text , View} from 'react-native';
import Home from './pages/Home';

export default function App() {
    return (
      <Home></Home>
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

