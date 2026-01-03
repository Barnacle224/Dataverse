import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import Card from '../components/Card';

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      id: 2,
      label: 'GitHub',
      value: 'github.com/yourprofile',
      link: 'https://github.com',
    },
    {
      id: 3,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com',
    },
    {
      id: 4,
      label: 'Twitter',
      value: '@yourhandle',
      link: 'https://twitter.com',
    },
  ];

  const handlePress = (link) => {
    Linking.openURL(link).catch((err) =>
      console.error('Failed to open URL:', err)
    );
  };

  return (
    <View style={styles.container}>
      <Card
        title="Get In Touch"
        description="Feel free to reach out to me through any of these channels. I'd love to hear from you!"
      />

      {contactInfo.map((contact) => (
        <TouchableOpacity
          key={contact.id}
          onPress={() => handlePress(contact.link)}
          style={styles.contactCard}
        >
          <View style={styles.cardContent}>
            <Text style={styles.label}>{contact.label}</Text>
            <Text style={styles.value}>{contact.value}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Card>
        <Text style={styles.messageText}>
          I typically respond to messages within 24 hours. Looking forward to connecting with you!
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  value: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '600',
  },
  messageText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
