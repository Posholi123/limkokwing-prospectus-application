import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // App.js styles
  container: {
    padding: 20,
  },
  campusImage: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  facultyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // Faculty.js styles
  facultyContainer: {
    width: '48%',
    marginBottom: 15,
  },
  facultyButton: {
    backgroundColor: '#4A90E2',
    height: 100,
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

  // CourseCard.js styles
  courseCard: {
    margin: 10,
    padding: 10,
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