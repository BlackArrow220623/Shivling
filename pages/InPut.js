import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Blue, darkBlue } from './Constants';


const InPut = props => {
  return (
    <TextInput
    {...props}
    style={{borderRadius: 100, color:Blue , paddingLeft:20, width:'85%', backgroundColor:'white',}}
    placeholderTextColor={Blue} >

    </TextInput>
  )
}

export default InPut;