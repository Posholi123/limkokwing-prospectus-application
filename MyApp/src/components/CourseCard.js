import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import style from '../styles/style';

export default function CourseCard({ course }) {
  const [rating, setRating] = useState(0);

  const handleRate = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  return (
    <View style={style.courseCard}>
      <Text style={style.courseName}>{course.name}</Text>
      <Text style={style.courseDescription}>{course.description}</Text>
      <Text style={style.ratingText}>Rating: {rating}</Text>
      <Button title="Rate" onPress={handleRate} />
    </View>
  );
}