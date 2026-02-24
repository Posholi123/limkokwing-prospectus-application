import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { faculties } from './src/data/faculties';
import Faculty from './src/components/Faculty';
import style from './src/styles/style';

export default function App() {
  return (
    <ScrollView style={style.container}>
      {/* Campus Image */}
      <Image 
        source={require('./assets/campus.jpg')}
        style={style.campusImage}
        resizeMode="cover"
      />
      
      {/* Faculty Grid */}
      <View style={style.facultyGrid}>
        {faculties.map((faculty) => (
          <Faculty key={faculty.id} faculty={faculty} />
        ))}
      </View>
    </ScrollView>
  );
}