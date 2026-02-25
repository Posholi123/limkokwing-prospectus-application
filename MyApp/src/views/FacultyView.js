import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CourseCard from '../components/CourseCard';
import style from '../styles/style';

export default function FacultyView({ route }) {
  const { faculty } = route.params;

  return (
    <ScrollView 
      style={style.container}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <Text style={style.facultyHeader}>
        {faculty.name}
      </Text>

      <View style={style.coursesContainer}>
        {faculty.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </View>
    </ScrollView>
  );
}