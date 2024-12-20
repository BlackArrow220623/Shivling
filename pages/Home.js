import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import Btn from './Btn';
import { Button } from '@react-navigation/elements';
import { Blue, darkBlue } from './Constants';


function Home(props) {
  return (
    <View style={{ backgroundColor:'#7FC7EB', paddingBottom:'100%'}} >
      <Text style={{color:'white', fontSize: 50, fontWeight: 700, textAlign:'center',  paddingTop:180, paddingBottom: 30, backgroundColor: '#7FC7EB'}}>
        SHIVLING
        </Text>

        <Text style={{textAlign:'center' , alignItems:'center', fontSize:50, paddingBottom:70}}>
          Logo
        </Text>



       <Text>
       <Btn bgColor={Blue} textColor='white' btnLable='Sign In' Press={() => props.navigation.navigate('SignIn')}></Btn>
       <Btn bgColor='white' textColor={Blue} btnLable='Sign Up'  Press={() => props.navigation.navigate('SignUp')}  ></Btn>
       </Text>




      
    </View>

  );
}



export default Home;
