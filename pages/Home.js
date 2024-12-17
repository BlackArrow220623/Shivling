import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import Btn from './Btn';
import { Button } from '@react-navigation/elements';
import { Blue } from './Constants';


function Home() {
  return (
    <View style={{ backgroundColor:'#fff',}} >
      <Text style={{color:'#269', fontSize: 40, fontWeight: 700, textAlign:'center',  padding:80, backgroundColor: '#fff'}}>
        SHIVLING
        </Text>

      
       <Text style={{display:'flex', padding:20, alignItems:'center', textAlign:'center', }}>
       <Button style={{width:150}}>SignIn</Button>
       <Button style={{width:150}}>SignUp</Button>
       </Text>




      
    </View>

  );
}



export default Home;
