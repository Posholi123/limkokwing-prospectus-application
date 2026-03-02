import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av'; // or import Video from 'react-native-video'
import style from '../styles/style';

export default function CourseCard({ course }) {
  const [rating, setRating] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handleRate = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
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
      
      {/* Video Preview Section */}
      <TouchableOpacity 
        style={style.videoContainer}
        onPress={() => setShowVideo(!showVideo)}
      >
        <Text style={style.videoHeader}>
          {showVideo ? '▶ Hide Video Preview' : '▶ Show Video Preview'}
        </Text>
      </TouchableOpacity>
      
      {/* Video Player (shown when toggled) */}
      {showVideo && (
        <Video
          source={course.videoUrl}
          style={style.videoPlayer}
          useNativeControls
          resizeMode="contain"
          isLooping
          shouldPlay={false}
        />
      )}
      
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