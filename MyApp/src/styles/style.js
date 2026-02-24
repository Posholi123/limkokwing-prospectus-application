import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // App.js styles
  container: {
    padding: 20,
  },
  campusImage: {
    width: '100%',
    height:400,
    marginBottom: 10,
    borderRadius: 10,
  },
  descriptionContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    lineHeight: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#4A90E2',
    marginVertical: 15,
    width: '100%',
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  facultyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  quizContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
  },
  contactContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginTop: 10,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  contactInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactInfoBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 5,
    textAlign: 'center',
  },

  // Faculty.js styles
  facultyContainer: {
    width: '48%',
    marginBottom: 15,
  },
  facultyButton: {
    backgroundColor: '#4A90E2',
    height: 100,
    width:250,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  facultyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  coursesContainer: {
    marginTop: 10,
  },

  // QuizBox.js styles
  quizBox: {
    backgroundColor: '#2ff079',
    width: '80%',
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quizBoxText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // CourseCard.js styles
  courseCard: {
    padding: 10,
    width:250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
    marginBottom: 5,
  },

  
});