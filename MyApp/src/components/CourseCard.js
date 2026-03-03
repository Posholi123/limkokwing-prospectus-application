import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { Video } from 'expo-av'; 
import style from '../styles/style';

export default function CourseCard({ course }) {
  const [rating, setRating] = useState(0);
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef(null);

  const handleRate = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  const openVideo = () => {
    setVideoVisible(true);
  };

  const closeVideo = async () => {
    if (videoRef.current) {
      await videoRef.current.pauseAsync();
    }
    setVideoVisible(false);
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
        onPress={openVideo}
      >
        <Text style={style.videoButtonText}>
          ▶ Watch Video Preview
        </Text>
      </TouchableOpacity>
      
      {/* Fullscreen Video Modal */}
      <Modal
        visible={videoVisible}
        animationType="slide"
        onRequestClose={closeVideo}
      >
        <View style={style.fullscreenVideoContainer}>
          <Video
          
            ref={videoRef}
            source={course.videoUrl}
            style={style.fullscreenVideo}
            useNativeControls={true}
            resizeMode="contain"
            shouldPlay={true}
            isLooping={false}
          />
          
          {/* Close Button */}
          <TouchableOpacity 
            style={style.closeVideoButton}
            onPress={closeVideo}
          >
            <Text style={style.closeVideoButtonText}>✕ Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
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