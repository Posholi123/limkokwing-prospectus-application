import React from 'react';
import { ScrollView, View, Text, Linking, TouchableOpacity } from 'react-native';
import style from '../styles/style';

export default function ContactView() {
  
  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleWebsite = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={style.container}>
      <Text style={style.sectionHeading}>Contact Us</Text>
      
      <View style={style.contactCard}>
        <Text style={style.contactTitle}>Limkokwing University</Text>
        <Text style={style.contactSubtitle}>of Creative Technology</Text>
        
        <View style={style.contactDetailItem}>
          <Text style={style.contactDetailLabel}> Address</Text>
          <Text style={style.contactDetailText}>Maseru, Lesotho</Text>
        </View>

        <TouchableOpacity 
          style={style.contactDetailItem}
          onPress={() => handleCall('+26622315767')}
        >
          <Text style={style.contactDetailLabel}> Phone</Text>
          <Text style={style.contactDetailLink}>+266 2231 5767</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={style.contactDetailItem}
          onPress={() => handleCall('80022066')}
        >
          <Text style={style.contactDetailLabel}>Toll Free</Text>
          <Text style={style.contactDetailLink}>80022066 or 80022088</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={style.contactDetailItem}
          onPress={() => handleEmail('info@limkokwing.ac.ls')}
        >
          <Text style={style.contactDetailLabel}>Email</Text>
          <Text style={style.contactDetailLink}>info@limkokwing.ac.ls</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={style.contactDetailItem}
          onPress={() => handleWebsite('https://www.limkokwing.ac.ls')}
        >
          <Text style={style.contactDetailLabel}> Website</Text>
          <Text style={style.contactDetailLink}>www.limkokwing.ac.ls</Text>
        </TouchableOpacity>
      </View>

      <View style={style.mapPlaceholder}>
        <Text style={style.mapText}> Campus Location</Text>
        <Text style={style.mapSubtext}>Maseru, Lesotho</Text>
        <Text style={style.mapSubtext}>Open in Maps →</Text>
      </View>

      <View style={style.hoursCard}>
        <Text style={style.hoursTitle}>Office Hours</Text>
        <Text style={style.hoursText}>Monday - Friday: 8:00 AM - 5:00 PM</Text>
        <Text style={style.hoursText}>Saturday: 9:00 AM - 1:00 PM</Text>
        <Text style={style.hoursText}>Sunday: Closed</Text>
      </View>
    </ScrollView>
  );
}