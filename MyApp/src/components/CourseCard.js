import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import style from '../styles/style';

export default function CourseCard({ course }) {
  const [rating, setRating] = useState(0);

  const handleRate = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  const openVideoLink = () => {
    Linking.openURL(course.videoUrl);
  };

  return (
    <View style={style.courseCard}>
      {/* Course Image */}
      <Image 
        source={course.image}
        style={style.courseImage}
        resizeMode="cover"
      />
      
      {/* Course Details */}
      <Text style={style.courseName}>{course.name}</Text>
      <Text style={style.courseDescription}>{course.description}</Text>
      
      {/* Video Preview Section - Clickable */}
      <TouchableOpacity 
        style={style.videoContainer}
        onPress={openVideoLink}
      >
        <Text style={style.videoHeader}>▶ Watch Course Preview</Text>
        <Text 
          style={style.videoLink}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Tap to open video link
        </Text>
      </TouchableOpacity>
      
      {/* Rating Section */}
      <View style={style.ratingContainer}>
        <Text style={style.ratingText}>Rating: {rating}/6</Text>
        <TouchableOpacity 
          style={style.ratingButton}
          onPress={handleRate}
        >
          <Text style={style.ratingButtonText}>Rate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}