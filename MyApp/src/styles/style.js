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

  // Faculty grid - single column centered
  facultyGrid: {
    flexDirection: 'column',
    alignItems: 'center',       
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },

  // Quiz box styles
  quizContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
  },
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

  // Contact section styles
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

  // Faculty button styles
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

  // CourseCard styles (consolidated)
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

  // Video button styles (replacing videoContainer)
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

  // Video player styles
  videoPlayerContainer: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  videoPlayer: {
    width: '100%',
    height: '100%',
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
});