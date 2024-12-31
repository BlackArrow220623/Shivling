import { View, Text,Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskPage from './TaskPage';
import MainPage from './MainPage';
import Present from './Present';





const Tab = createBottomTabNavigator();


const FirstPage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'MainPage') {
            return (
              <Image
              source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-interface-essential-2/64/home-menu-ui-user-interface-2-512.png' }} // Replace with your logo path
                style={{
                  width: 30,
                  height: 30,
                  
                }}
              />
            );
          } else if (route.name === 'TaskPage') {
            return (
              <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8621/8621978.png' }} // Replace with your logo path
                style={{
                  width: 30,
                  height: 30,
                  
                }}
              />
            );
          } else if (route.name === 'Present') {
            return (
              <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/056/184/large_2x/people-icon-sign-symbol-design-free-png.png' }} // Replace with your logo path
                style={{
                  width: 30,
                  height: 30,
                  
                }}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="Present" component={Present} />
      <Tab.Screen name="TaskPage" component={TaskPage} />
      
    </Tab.Navigator>

  )
}

export default FirstPage