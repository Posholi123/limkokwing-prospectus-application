import React from 'react';
import { ScrollView } from 'react-native';
import { faculties } from './data/faculties';
import Faculty from './components/Faculty';

export default function App() {
  return (
    <ScrollView style={{ padding: 20 }}>

      {faculties.map((faculty) => (
        <Faculty key={faculty.id} faculty={faculty} />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
