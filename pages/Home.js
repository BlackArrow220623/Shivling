import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Btn from './Btn';
import { Button } from '@react-navigation/elements';
import { Blue, darkBlue } from './Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';



function Home(props) {
  return (
    <View style={{ backgroundColor: '#7FC7EB', paddingBottom: '100%' }} >
      <Text style={{ color: 'white', fontSize: 50, fontWeight: 700, textAlign: 'center', paddingTop: 180, paddingBottom: 30, backgroundColor: '#7FC7EB' }}>
        SHIVLING
      </Text>

      <Text style={{ textAlign: 'center', alignItems: 'center', fontSize: 50, paddingBottom: 70 }}>
        Logo
      </Text>

<View style={{alignItems:'center',weight:'100%'}}>
  <View style={{paddingBottom:'5%'}}>
      <Btn bgColor={Blue} textColor='white' btnLable='Sign In' Press={() => props.navigation.navigate('SignIn')}/>
  </View>
  <View>
      <Btn bgColor='white' textColor={Blue} btnLable='Sign Up' Press={() => props.navigation.navigate('SignUp')}/>
  </View>
</View>
    </View>

    // <View style={{flex:3, backgroundColor: '#7FC7EB'}}>
    //   <Text style={{color:'#fff', fontSize:45,textAlign:'center',paddingTop:'25%' }}>SHIVLING</Text>
    //   <Text style={{color:'#fff', fontSize:45,textAlign:'center',paddingTop:'5%' }}>LOGO</Text>
    //   <View style={{paddingStart:'5%',paddingEnd:'5%'}}>
    //       <TouchableOpacity style={{backgroundColor:'#ffff',padding:'2%' }} onPress={() => props.navigation.navigate('SignUp')}><Text style={{fontSize:20}}>Sunny</Text></TouchableOpacity>
    //   </View>
    // </View>

  );
}



export default Home;
