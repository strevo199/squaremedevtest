import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/intro/IntroScreen';
import {NavigationContainer} from '@react-navigation/native';
import ScreenOne from '../screens/main/ScreenOne';
import {MainTab} from './Tab';
import MapScreen from '../screens/main/MapScreen';

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
        <Stack.Screen component={MainTab} name="HomeScreen" />
        <Stack.Screen component={ScreenOne} name="ScreenOne" />
        <Stack.Screen component={MapScreen} name="MapScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
