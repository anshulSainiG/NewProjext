/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Onboarding from '../screen/onboarding';
import Second from '../screen/second_screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import First from '../screen/first_Screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Sign_InTab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Sign_InTab.Navigator>
        <Sign_InTab.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <AntDesign name="home" color="#000000" size={20} />
            ),
          }}
        />
        <Sign_InTab.Screen
          name="First"
          component={First}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <AntDesign name="search1" color="#000000" size={20} />
            ),
          }}
        />
        <Sign_InTab.Screen
          name="Second"
          component={Second}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <AntDesign name="save" color="#000000" size={20} />
            ),
          }}
        />
      </Sign_InTab.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
