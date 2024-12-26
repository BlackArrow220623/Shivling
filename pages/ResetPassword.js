import { View, Text } from 'react-native'
import React from 'react'
import Btn from './Btn'
import { Blue, darkBlue } from './Constants';
import Field from './Field';
import InPut from './InPut';


const ResetPassword = (props) => {
  return (
    <View style={{backgroundColor:'#7FC7EB', paddingBottom:250 }}>
      <Text style={{textAlign:'center', paddingTop:150 , fontSize:50,fontWeight:700,  color: 'white' }}>Enter Password</Text>
      
      <View style={{backgroundColor:'#7FC7EB', paddingBottom:70}}>
        
        <Text style={{textAlign:'center' , fontSize:15, fontWeight:600, color: 'white' }} >Reset Your New Password</Text>
      </View>


      <Text style={{paddingLeft:40, paddingBottom:20, }}>
      <InPut placeholder='New Password' secureTextEntry={true}  ></InPut>
      </Text>

      <Text style={{paddingLeft:40, paddingBottom:40, }}>
      <InPut placeholder='Confrim Password' secureTextEntry={true}  ></InPut>
      </Text>

        
        
        <Text style={{alignItems:'center', textAlign:'center',paddingBottom:100, backgroundColor:'#7FC7EB'}}>
          
        <Btn bgColor={Blue} textColor='white' btnLable='Reset' Press={() => {
          alert("Reset Your Password")
          props.navigation.navigate('SignIn')}}  ></Btn>
        </Text>

      
          


        
      
    </View>
  )
}

export default ResetPassword