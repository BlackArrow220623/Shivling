

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
import TaskPage from './pages/TaskPage';
import MainPage from './pages/MainPage';
import Present from './pages/Present';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';



const stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='WelcomeScreen'>
        <stack.Screen name='HomeScreen' options={{headerShown: false}} component={HomeScreen}/>
        <stack.Screen name='WelcomeScreen' options={{headerShown: false}} component={WelcomeScreen}/>
        <stack.Screen name='LoginScreen' options={{headerShown: false}} component={LoginScreen}/>
        <stack.Screen name='SignUpScreen' options={{headerShown: false}} component={SignUpScreen}/>

        <stack.Screen name='Home'  component={Home}/>
        <stack.Screen name='SignIn' component={SignIn}/>
        <stack.Screen name='SignUp' component={SignUp}/>
        <stack.Screen name='FirstPage' component={FirstPage}/>
        <stack.Screen name='ForgotPasswd' component={ForgotPasswd}/>
        <stack.Screen name='ResetPassword' component={ResetPassword}/>
        <stack.Screen name='TaskPage' component={TaskPage} />
        <stack.Screen name='MainPage' component={MainPage}/>
        <stack.Screen name="Present" component={Present} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;