import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({btnLable, bgColor, textColor,Press }) => {
    return (
        <TouchableOpacity 
        onPress={Press}
        
        style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 200 , borderRadius: 40}}>
            <Text style={{ color: textColor, fontSize:20, fontWeight: 'bold', padding:10 }}>{btnLable}</Text>

        </TouchableOpacity>
    )
}

export default Btn