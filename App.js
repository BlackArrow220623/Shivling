

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import FirstPage from './pages/FirstPage';
import ForgotPasswd from './pages/ForgotPasswd';
import ResetPassword from './pages/ResetPassword';

const stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='SignIn' component={SignIn}/>
        <stack.Screen name='SignUp' component={SignUp}/>
        <stack.Screen name='FirstPage' component={FirstPage}/>
        <stack.Screen name='ForgotPasswd' component={ForgotPasswd}/>
        <stack.Screen name='ResetPassword' component={ResetPassword}/>

      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;