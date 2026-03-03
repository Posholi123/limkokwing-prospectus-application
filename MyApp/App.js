import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './src/views/BottomTabNavigator';
import FacultyView from './src/views/FacultyView';
import style from './src/styles/style';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainTabs" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="FacultyView" 
          component={FacultyView}
          options={({ route }) => ({ 
            title: route.params?.faculty?.name || "Faculty Courses",
            headerStyle: style.headerStyle,
            headerTitleStyle: style.headerTitleStyle,
            headerTintColor: '#ffffff',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}