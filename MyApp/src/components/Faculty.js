import React from 'react';
import { View, Text } from 'react-native';
import CourseCard from './CourseCard';

export default function Faculty({ faculty }) {

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20 }}>{faculty.name}</Text>

      {faculty.courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}

    </View>
  );
}