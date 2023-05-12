import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { Main, Profile, SquarCircle } from '../screens';

const Stack = createNativeStackNavigator<StackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SquarCircle" component={SquarCircle} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

export type StackParamList = {
  Main: undefined;
  Profile: undefined;
  SquarCircle: undefined
};

export type StackScreenProps<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;