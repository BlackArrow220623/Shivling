import { View, Text } from 'react-native'
import React from 'react'
import Btn from './Btn'
import { Blue, darkBlue } from './Constants';
import Field from './Field';
import InPut from './InPut';




const SignIn = (props) => {
  return (
    <View style={{backgroundColor:'#7FC7EB', paddingBottom:100 }}>
      <Text style={{textAlign:'center', paddingTop:100 , fontSize:50,fontWeight:700,  color: 'white' }}>Sign In</Text>
      
      <View style={{backgroundColor:'#7FC7EB', paddingBottom:70}}>
        <Text style={{textAlign:'center' , fontSize:30, paddingTop:30,fontWeight:700, color: '#269' }} >Welcome Back</Text>
        <Text style={{textAlign:'center' , fontSize:15, fontWeight:600, color: 'white' }} >Sign In to Your Account</Text>
      </View>
      <Text style={{paddingLeft:40, paddingBottom:30, }}>
      <InPut placeholder='User Name' keyboardType={'Text'} ></InPut>
      </Text>

      <Text style={{paddingLeft:40, paddingBottom:20, }}>
      <InPut placeholder='Password' secureTextEntry={true}  ></InPut>
      </Text>


        <Text style={{textAlign:'right', paddingBottom:30 , paddingRight:20}}>
        <Field linktextColor='white' linkLable='Forget Password ?' Tap={() => props.navigation.navigate('ForgotPasswd')}></Field>
        </Text>

        


        
        <Text style={{alignItems:'center', textAlign:'center',paddingBottom:50, backgroundColor:'#7FC7EB'}}>
          
        <Btn bgColor={Blue} textColor='white' btnLable='Sign In' Press={() => props.navigation.navigate('FirstPage')} ></Btn>
        </Text>

      
          <Text style={{ fontSize:13, fontWeight:700, color:'white', textAlign:'center', paddingTop:30}}>Don't have Account ? </Text>


          <Text style={{textAlign:'center', paddingRight:5, paddingBottom:50, backgroundColor:'#7FC7EB',}}>
        <Field linktextColor='white' linkLable='Sign Up' Tap={() => props.navigation.navigate('SignUp')}></Field>
        </Text>
      
    </View>
  )
}

export default SignIn