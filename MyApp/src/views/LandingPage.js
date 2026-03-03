import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { faculties } from '../data/faculties';
import Faculty from '../components/Faculty';
import style from '../styles/style';

export default function LandingPage({ navigation }) {

  return (
    <ScrollView style={style.container}>
      
      {/* Campus Image */}
      <Image 
        source={require('../../assets/images/campus.png')}
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

      {/* Faculty Grid - Single Column */}
      <View style={style.facultyGrid}>
        {faculties.map((faculty) => (
          <Faculty 
            key={faculty.id} 
            faculty={faculty}
            navigation={navigation}
          />
        ))}
      </View>

      {/* Bottom padding */}
      <View style={{ height: 20 }} />

    </ScrollView>
  );
}