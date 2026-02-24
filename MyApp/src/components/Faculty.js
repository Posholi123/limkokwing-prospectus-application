import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CourseCard from './CourseCard';
import style from '../styles/style';

export default function Faculty({ faculty, navigation }) {

  return (
    <View style={style.facultyContainer}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("FacultyView", { faculty })}
        style={style.facultyButton}
      >
        <Text style={style.facultyButtonText}>
          {faculty.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}