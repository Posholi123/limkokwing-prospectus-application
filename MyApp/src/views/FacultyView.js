import React from 'react';
import { ScrollView, Text } from 'react-native';
import CourseCard from '../components/CourseCard';
import style from '../styles/style';

export default function FacultyView({ route }) {

  const { faculty } = route.params;

  return (
    <ScrollView style={style.container}>
      <Text style={style.sectionHeading}>
        {faculty.name}
      </Text>

      {faculty.courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </ScrollView>
  );
}