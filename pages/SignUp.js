import { View, Text } from 'react-native'
import React from 'react'
import Btn from './Btn'
import { Blue, darkBlue } from './Constants';
import Field from './Field';
import InPut from './InPut';


const SignUp = (props) => {
  return (
    <View style={{ backgroundColor: '#7FC7EB', paddingBottom: 100 }}>
      <Text style={{ textAlign: 'center', paddingTop: 100, fontSize: 50, fontWeight: 700, color: 'white' }}>Sign Up</Text>

      <View style={{ backgroundColor: '#7FC7EB', paddingBottom: 40 }}>
        <Text style={{ textAlign: 'center', fontSize: 30, paddingTop: 30, fontWeight: 700, color: '#269' }} >Hello Welcome</Text>
        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 600, color: 'white' }} >Create Your Account</Text>
      </View>

      <Text style={{ paddingLeft: 40, paddingBottom: 25, }}>
        <InPut placeholder='Full Name' keyboardType={'text'} ></InPut>
      </Text>

      <Text style={{ paddingLeft: 40, paddingBottom: 25, }}>
        <InPut placeholder='Email' keyboardType={'email-address'} ></InPut>
      </Text>

      <Text style={{ paddingLeft: 40, paddingBottom: 25, }}>
        <InPut placeholder='Mobile' keyboardType={'text'} ></InPut>
      </Text>

      <Text style={{ paddingLeft: 40, paddingBottom: 25, }}>
        <InPut placeholder='Password' secureTextEntry={true}  ></InPut>
      </Text>

      <Text style={{ paddingLeft: 40, paddingBottom: 40, }}>
        <InPut placeholder='Confirm Password' secureTextEntry={true}  ></InPut>
      </Text>

      <Text style={{alignItems:'center', textAlign:'center',paddingBottom:20, backgroundColor:'#7FC7EB'}}>
          
        <Btn bgColor={Blue} textColor='white' btnLable='Sign UP' Press={() => {
          alert("Account Created")
          props.navigation.navigate('SignIn')}} ></Btn>
        </Text>

        <Text style={{ fontSize:13, fontWeight:700, color:'white', textAlign:'center', paddingTop:30}}>Already have Account ? </Text>

        <Text style={{textAlign:'center', paddingRight:5, paddingBottom:50, backgroundColor:'#7FC7EB',}}>
        <Field linktextColor='white' linkLable='Sign In' Tap={() => props.navigation.navigate('SignIn')}></Field>
        </Text>


    </View>
  )
}

export default SignUp
