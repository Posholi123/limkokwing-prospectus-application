import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style';

export default function QuizView() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How many faculties does Limkokwing University have?",
      options: ["3", "5", "7", "10"],
      correct: 1
    },
    {
      id: 2,
      question: "Which faculty offers Software Engineering?",
      options: ["Business", "Design", "ICT", "Architecture"],
      correct: 2
    },
    {
      id: 3,
      question: "Where is the main campus located?",
      options: ["Maseru", "Johannesburg", "Cape Town", "Gaborone"],
      correct: 0
    }
  ];

  const handleSelectAnswer = (questionId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <ScrollView style={style.container}>
      <Text style={style.sectionHeading}>Test Your Knowledge</Text>
      
      {!showResults ? (
        <>
          {questions.map((q) => (
            <View key={q.id} style={style.quizCard}>
              <Text style={style.quizQuestion}>{q.question}</Text>
              {q.options.map((option, optIndex) => (
                <TouchableOpacity
                  key={optIndex}
                  style={[
                    style.quizOption,
                    selectedAnswers[q.id] === optIndex && style.selectedOption
                  ]}
                  onPress={() => handleSelectAnswer(q.id, optIndex)}
                >
                  <Text style={style.quizOptionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
          
          <TouchableOpacity 
            style={style.submitButton}
            onPress={handleSubmit}
          >
            <Text style={style.submitButtonText}>Submit Answers</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={style.resultCard}>
          <Text style={style.resultScore}>
            Your Score: {calculateScore()}/{questions.length}
          </Text>
          <Text style={style.resultMessage}>
            {calculateScore() === questions.length 
              ? "Perfect! You know your university well!" 
              : "Good try! Take the quiz again to improve your score."}
          </Text>
          <TouchableOpacity 
            style={style.resetButton}
            onPress={resetQuiz}
          >
            <Text style={style.resetButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}