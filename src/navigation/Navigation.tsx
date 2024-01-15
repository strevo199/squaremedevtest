import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/intro/IntroScreen';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/intro/WelcomeScreen';
import SignupScreenOne from '../screens/auth/SignupScreenOne';
import SignupScreenTwo from '../screens/auth/SignupScreenTwo';
import SuccessFull from '../screens/success/SuccessFull';
import CreatePin from '../screens/success/CreatPin';
import CreatePinTwo from '../screens/success/CreatPinTwo';
import {MainTab} from './Tab';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationDuration: 100,
        }}>

        <Stack.Screen component={IntroScreen} name="IntroScreen" />
        <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
        <Stack.Screen component={SignupScreenOne} name="SignupScreenOne" />
        <Stack.Screen component={SignupScreenTwo} name="SignupScreenTwo" />
        <Stack.Screen component={SuccessFull} name="SuccessFull" />
        <Stack.Screen component={CreatePinTwo} name="CreatePinTwo" />
        <Stack.Screen component={CreatePin} name="CreatePin" />
        <Stack.Screen component={MainTab} name="HomeScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
