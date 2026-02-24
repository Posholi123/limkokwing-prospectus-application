import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './src/views/LandingPage';
import FacultyView from './src/views/FacultyView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage}
          options={{ title: "Limkokwing Prospectus" }}
        />
        <Stack.Screen 
          name="FacultyView" 
          component={FacultyView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}