import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // App.js styles
  container: {
    padding: 20,
    borderBlockColor: "#4c5c74",
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
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
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
    flexDirection: 'column',
    alignItems: 'center',       
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
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
    width: '90%',               
    marginBottom: 15,
    alignItems: 'center',
  },
  facultyButton: {
    backgroundColor: '#4A90E2',
    height: 100,
    width: '100%',             
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

// FacultyView.js specific styles
facultyHeader: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#1E40AF',
  textAlign: 'center',
  marginVertical: 20,
  paddingBottom: 10,
  borderBottomWidth: 2,
  borderBottomColor: '#FF6B6B',
  width: '100%',
},

coursesContainer: {
  alignItems: 'center',
  width: '100%',
},

// Updated CourseCard styles
courseCard: {
  width: '95%',
  marginBottom: 20,
  padding: 15,
  borderWidth: 1,
  borderColor: '#E2E8F0',
  borderRadius: 10,
  backgroundColor: '#FFFFFF',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
  alignSelf: 'center',
},

courseImage: {
  width: '100%',
  height: 150,
  borderRadius: 8,
  marginBottom: 10,
},

courseName: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#0F172A',
  marginBottom: 5,
  textAlign: 'center',
},

courseDescription: {
  fontSize: 14,
  color: '#475569',
  marginBottom: 10,
  textAlign: 'center',
  lineHeight: 20,
},

videoContainer: {
  marginVertical: 10,
  padding: 12,
  backgroundColor: '#F1F5F9',
  borderRadius: 8,
  width: '100%',
  alignSelf: 'center',
},

videoHeader: {
  color: '#2563EB',
  fontSize: 14,
  fontWeight: '600',
  marginBottom: 5,
  textAlign: 'left',
  width: '100%',
},

videoLink: {
  color: '#1E40AF',
  fontSize: 13,
  width: '100%',
  flexShrink: 1,
  flexWrap: 'wrap',
  textAlign: 'left',
  paddingHorizontal: 5,
  paddingVertical: 3,
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#CBD5E1',
  overflow: 'hidden',
},

ratingContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 10,
  paddingTop: 10,
  borderTopWidth: 1,
  borderTopColor: '#E2E8F0',
  width: '100%',
},

ratingButton: {
  backgroundColor: '#2563EB',
  paddingVertical: 8,
  paddingHorizontal: 15,
  borderRadius: 5,
  minWidth: 80,
  alignItems: 'center',
},

ratingButtonText: {
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: 14,
},

ratingText: {
  fontSize: 16,
  color: '#0F172A',
  fontWeight: '500',
  flexShrink: 1,
  marginRight: 10,
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