import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { faculties } from './src/data/faculties';
import Faculty from './src/components/Faculty';
import QuizBox from './src/components/QuizBox';
import style from './src/styles/style';

export default function App() {
  // Split faculties into two columns (3 in first column, 2 in second)
  const firstColumnFaculties = faculties.slice(0, 3);
  const secondColumnFaculties = faculties.slice(3, 5);

  return (
    <ScrollView style={style.container}>
      {/* Campus Image */}
      <Image 
        source={require('./assets/campus.jpg')}
        style={style.campusImage}
        resizeMode="cover"
      />
      
      {/* University Description */}
      <View style={style.descriptionContainer}>
        <Text style={style.descriptionText}>
          Limkokwing University of Creative Technology is Lesotho's most award-winning university, 
          offering innovative programmes in design, business, communication, architecture, and ICT. 
          With over 30,000 creative minds from 150+ countries across 3 continents, we provide a 
          truly global education experience.
        </Text>
      </View>

      {/* First Separator */}
      <View style={style.separator} />

      {/* Our Faculties Heading */}
      <Text style={style.sectionHeading}>Our Faculties</Text>

      {/* Faculty Grid - Two Columns */}
      <View style={style.facultyGrid}>
        {/* First Column - 3 Faculties */}
        <View style={{ width: '48%' }}>
          {firstColumnFaculties.map((faculty) => (
            <Faculty key={faculty.id} faculty={faculty} />
          ))}
        </View>

        {/* Second Column - 2 Faculties */}
        <View style={{ width: '48%' }}>
          {secondColumnFaculties.map((faculty) => (
            <Faculty key={faculty.id} faculty={faculty} />
          ))}
        </View>
      </View>

      {/* Second Separator */}
      <View style={style.separator} />

      {/* Quiz Box - Center Aligned */}
      <View style={style.quizContainer}>
        <QuizBox />
      </View>

      {/* Third Separator */}
      <View style={style.separator} />

      {/* Contact Information */}
      <View style={style.contactContainer}>
        <Text style={style.contactTitle}>Contact Us</Text>
        <Text style={style.contactInfoBold}>Limkokwing University of Creative Technology</Text>
        <Text style={style.contactInfo}>Maseru, Lesotho</Text>
        <Text style={style.contactInfo}>Phone: +266 2231 5767</Text>
        <Text style={style.contactInfo}>Toll Free: 80022066 or 80022088</Text>
        <Text style={style.contactInfo}>Email: info@limkokwing.ac.ls</Text>
        <Text style={style.contactInfo}>Website: www.limkokwing.ac.ls</Text>
      </View>
    </ScrollView>
  );
}