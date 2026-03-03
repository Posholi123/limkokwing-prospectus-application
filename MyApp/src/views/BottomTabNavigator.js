import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LandingPage from './LandingPage';
import QuizView from './QuizView';
import ContactView from './ContactView';
import style from '../styles/style';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Quiz') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'call' : 'call-outline';
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },

        tabBarLabel: ({ color }) => {
          let label;

          if (route.name === 'Home') {
            label = 'HOME';
          } else if (route.name === 'Quiz') {
            label = 'QUIZ';
          } else if (route.name === 'Contact') {
            label = 'CONTACT';
          }

          return <Text style={style.tabLabel}>{label}</Text>;
        },

        tabBarActiveTintColor: '#070aa3',
        tabBarInactiveTintColor: '#070aa3',
        tabBarStyle: style.tabBarStyle,
        headerStyle: style.headerStyle,
        headerTitleStyle: style.headerTitleStyle,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={LandingPage} 
        options={{ title: "Limkokwing Prospectus" }}
      />
      <Tab.Screen 
        name="Quiz" 
        component={QuizView} 
        options={{ title: "Quiz" }}
      />
      <Tab.Screen 
        name="Contact" 
        component={ContactView} 
        options={{ title: "Contact" }}
      />
    </Tab.Navigator>
  );
}