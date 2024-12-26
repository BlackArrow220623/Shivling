import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Field = ({ linkLable, linktextColor, Tap }) => {
  return (
    <TouchableOpacity
      onPress={Tap}

    >
      <Text style={{ color: linktextColor, fontSize: 15, fontWeight: 'bold', paddingTop:10 }}>{linkLable}</Text>

    </TouchableOpacity>

  )
}

export default Field