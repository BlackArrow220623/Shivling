import { View, Text } from 'react-native'
import React from 'react'
import Btn from './Btn'
import { Blue, darkBlue } from './Constants';
import Field from './Field';


const SignIn = (props) => {
  return (
    <View style={{backgroundColor:'#7FC7EB'}}>
      <Text style={{textAlign:'center', paddingTop:100 , fontSize:50,fontWeight:700,  color: 'white' }}>Sign In</Text>
      
      <View>
        <Text style={{textAlign:'center' , fontSize:30, paddingTop:30,fontWeight:700, color: '#269' }} >Welcome Back</Text>
        <Text style={{textAlign:'center' , fontSize:15, fontWeight:400, color: 'black' }} >Sign In to Your Account</Text>
      </View>
      <View>
        <Text style={{fontWeight: '500'}}>User Id</Text>
        <Text style={{fontWeight: '500'}}>Password</Text>
      </View>


        {/* <Text style={{textAlign:'right' , paddingRight:30, paddingBottom: 20}}> 
          <Field linktextColor='black' linkLable='Forget Password ?' Tap={() => props.navigation.navigate('ForgotPasswd')} ></Field>
        </Text> */}

        <Text style={{textAlign:'right' , paddingRight:30, paddingBottom: 20}} >
          Forget Password ?
        </Text>
        


      
        <Text style={{alignItems:'center', textAlign:'center'}}>
        <Btn bgColor={Blue} textColor='white' btnLable='Sign In' Press={() => props.navigation.navigate('FirstPage')} ></Btn>
        </Text>
      
    </View>
  )
}

export default SignIn