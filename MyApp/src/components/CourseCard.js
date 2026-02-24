import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function CourseCard({ course }) {

  const [rating, setRating] = useState(0);

  const handleRate = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1 }}>
      <Text>{course.name}</Text>
      <Text>{course.description}</Text>
      <Text>Rating: {rating}</Text>
      <Button title="Rate" onPress={handleRate} />
    </View>
  );
}