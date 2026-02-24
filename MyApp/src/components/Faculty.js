import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CourseCard from './CourseCard';
import style from '../styles/style';

export default function Faculty({ faculty }) {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <View style={style.facultyContainer}>
      <TouchableOpacity 
        onPress={() => setShowCourses(!showCourses)}
        style={style.facultyButton}
      >
        <Text style={style.facultyButtonText}>
          {faculty.name}
        </Text>
      </TouchableOpacity>
      
      {showCourses && (
        <View style={style.coursesContainer}>
          {faculty.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      )}
    </View>
  );
}