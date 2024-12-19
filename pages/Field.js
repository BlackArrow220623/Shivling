import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Field = ({linkLable, linktextColor, Tap }) => {
  return (
    <TouchableOpacity 
            onPress={Tap}
            
            >
                <Text style={{ color: linktextColor, fontSize: 15, fontWeight: 'bold', }}>{linkLable}</Text>
    
            </TouchableOpacity>

  )
}

export default Field