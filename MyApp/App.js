import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './src/views/LandingPage';
import FacultyView from './src/views/FacultyView';
import ContactView from './src/views/ContactView';
import QuizView from './src/views/QuizView';

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
          options={({ route }) => ({ 
            title: route.params?.faculty?.name || "Faculty Courses" 
          })}
        />
        <Stack.Screen 
          name="ContactView" 
          component={ContactView}
          options={{ title: "Contact Us" }}
        />
        <Stack.Screen 
          name="QuizView" 
          component={QuizView}
          options={{ title: "Take a Quiz" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}