import { View, Text } from 'react-native'
import React from 'react'
import Btn from './Btn'
import { Blue, darkBlue } from './Constants';
import Field from './Field';
import InPut from './InPut';

const ForgotPasswd = (props) => {
  return (
    <View style={{ backgroundColor: '#7FC7EB', paddingBottom: 190 }}>
      <Text style={{ textAlign: 'center', paddingTop: 150, fontSize: 50, fontWeight: 700, color: 'white' }}>Reset Password</Text>

      <View style={{ backgroundColor: '#7FC7EB', paddingBottom: 20 }}>

        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 600, color: 'white', paddingTop: 70 }} >Enter Your Below Details</Text>
      </View>
      <Text style={{ paddingLeft: 40, paddingBottom: 30, }}>
        <InPut placeholder='Mobile' keyboardType={'number'} ></InPut>
      </Text>

      <Text style={{ alignItems: 'center', textAlign: 'center', paddingBottom: 40, backgroundColor: '#7FC7EB' }}>

        <Btn bgColor={Blue} textColor='white' btnLable='Send OTP'  ></Btn>
      </Text>

      <Text style={{ paddingLeft: 40, paddingBottom: 30, }}>
        <InPut placeholder='Enter OTP' secureTextEntry={true}  ></InPut>
      </Text>




      <Text style={{ alignItems: 'center', textAlign: 'center', paddingBottom: 50, backgroundColor: '#7FC7EB' }}>

        <Btn bgColor={Blue} textColor='white' btnLable='Reset Password' Press={() => props.navigation.navigate('ResetPassword')} ></Btn>
      </Text>







    </View>
  )
}

export default ForgotPasswd