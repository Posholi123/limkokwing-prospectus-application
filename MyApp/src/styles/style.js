import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // App.js / LandingPage styles
  container: {
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  campusImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
  },
  descriptionContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#dfeaf5',
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

  // Faculty grid - single column centered
  facultyGrid: {
    flexDirection: 'column',
    alignItems: 'center',       
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },

  // Faculty button styles
  facultyContainer: {
    width: '90%',               
    marginBottom: 15,
    alignItems: 'center',
    borderColor:'#4A90E2',  
  },
  facultyButton: {
    backgroundColor: '#02162e',
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

  // Two buttons container (Quiz and Contact)
  twoButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 20,
    gap: 15,
  },
  twoButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    flex: 1,
    maxWidth: 160,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quizButton: {
    backgroundColor: '#1E40AF',
  },
  contactButton: {
    backgroundColor: '#2ff079',
  },
  twoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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

  // CourseCard styles
  courseCard: {
    width: '95%',
    marginBottom: 25,
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

  // Video button styles
  videoButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  videoButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },

  // Fullscreen video styles
  fullscreenVideoContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  closeVideoButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 999,
  },
  closeVideoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Rating section styles
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

  // Quiz view styles
  quizCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  quizQuestion: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 15,
  },
  quizOption: {
    backgroundColor: '#F1F5F9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#4A90E2',
  },
  quizOptionText: {
    fontSize: 16,
    color: '#334155',
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  resultScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 15,
  },
  resultMessage: {
    fontSize: 18,
    color: '#334155',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  resetButton: {
    backgroundColor: '#2ff079',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Contact view styles
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contactSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactDetailItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 15,
  },
  contactDetailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  contactDetailText: {
    fontSize: 16,
    color: '#0F172A',
    fontWeight: '500',
  },
  contactDetailLink: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  hoursCard: {
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  hoursTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 10,
    textAlign: 'center',
  },
  hoursText: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 5,
    textAlign: 'center',
  },
});