import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av'; 
import style from '../styles/style';

export default function CourseCard({ course }) {
  const [rating, setRating] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleRate = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  const toggleVideo = async () => {
    if (showVideo) {
      // Pause video when hiding
      if (videoRef.current) {
        await videoRef.current.pauseAsync();
      }
      setShowVideo(false);
    } else {
      setShowVideo(true);
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
      
      {/* Video Preview Button */}
      <TouchableOpacity 
        style={style.videoButton}
        onPress={toggleVideo}
      >
        <Text style={style.videoButtonText}>
          {showVideo ? '▶ Hide Video Preview' : '▶ Show Video Preview'}
        </Text>
      </TouchableOpacity>
      
      {/* Video Player (shown when toggled) */}
      {showVideo && (
        <View style={style.videoPlayerContainer}>
          <Video
            ref={videoRef}
            source={course.videoUrl}
            style={style.videoPlayer}
            useNativeControls={true}
            resizeMode="contain"
            isLooping={false}
            shouldPlay={true}
          />
        </View>
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