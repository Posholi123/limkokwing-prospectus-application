import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style';

export default function QuizBox() {
  const handleQuizPress = () => {
    alert('Take a small quiz feature coming soon!');
  };

  return (
    <TouchableOpacity 
      onPress={handleQuizPress}
      style={style.quizBox}
    >
      <Text style={style.quizBoxText}>
        Take a Small Quiz
      </Text>
    </TouchableOpacity>
  );
}