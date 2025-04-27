import { View, Text, Image } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/Entypo';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
              <FontAwesome name="home" size={25} color="#00000" />
            );
          } else if (route.name === 'TaskPage') {
            return (
              <Material name="book" size={25} color="#00000" />
            );
          } else if (route.name === 'Present') {
            return (
              <FontAwesome5 name="user" size={25} color="#00000" />
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