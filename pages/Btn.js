import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = (btnLable, bgColor, textColor) => {
    return (
        <TouchableOpacity style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 250 }}>
            <Text style={{ color: textColor, fontSize: 30, fontWeight: 'bold' }}>{btnLable}</Text>

        </TouchableOpacity>
    )
}

export default Btn