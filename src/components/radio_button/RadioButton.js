import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Color from '../../utilities/constant/color/Color';

const radioButton = ({ options, selectedValue, onSelect }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => onSelect(option.value)}
                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}
                >
                    <View
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: option.value === selectedValue ? Color.blue : Color.gray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 8,
                        }}
                    >
                        {option.value === selectedValue && (
                            <View
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: 6,
                                    backgroundColor: 'blue',
                                }}
                            />
                        )}
                    </View>
                    <Text style={{ fontSize: 17 }}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default radioButton;
