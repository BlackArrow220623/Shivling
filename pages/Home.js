import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import Btn from './Btn';
import { Button } from '@react-navigation/elements';
import { Blue, darkBlue } from './Constants';


function Home(props) {
  return (
    <View style={{ backgroundColor:'#7FC7EB',}} >
      <Text style={{color:'white', fontSize: 50, fontWeight: 700, textAlign:'center',  padding:80, backgroundColor: '#7FC7EB'}}>
        SHIVLING
        </Text>

      
       {/* <Text style={{display:'flex', padding:40, alignItems:'center', textAlign:'center', }}>
       <Button style={{width:150,}}>SignIn</Button>
       <Button style={{width:150}}>SignUp</Button>
       </Text> */}

       <Text>
       <Btn bgColor={Blue} textColor='white' btnLable='SignIn' Press={() => props.navigation.navigate('SignIn')}></Btn>
       <Btn bgColor='white' textColor={Blue} btnLable='SignUp'  Press={() => props.navigation.navigate('SignUp')}  ></Btn>
       </Text>




      
    </View>

  );
}



export default Home;
