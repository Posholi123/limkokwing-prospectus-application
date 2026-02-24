import React from 'react';
import { ScrollView } from 'react-native';
import { faculties } from './src/data/faculties';
import Faculty from './src/components/Faculty';

export default function App() {
  return (
    <ScrollView style={{ padding: 20 }}>

      {faculties.map((faculty) => (
        <Faculty key={faculty.id} faculty={faculty} />
      ))}

    </ScrollView>
  );
}


