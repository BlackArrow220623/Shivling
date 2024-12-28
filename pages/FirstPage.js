import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskPage from './TaskPage';
import MainPage from './MainPage';





const Tab = createBottomTabNavigator();


const FirstPage = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="TaskPage" component={TaskPage} />
      
    </Tab.Navigator>

  )
}

export default FirstPage