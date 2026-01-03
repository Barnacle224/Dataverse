import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from '../components/Card';

export default function About() {
  return (
    <View style={styles.container}>
      <Card
        title="About Me"
        description="Hi! I'm a passionate full stack developer with a love for building beautiful and functional applications. I enjoy learning new technologies and solving complex problems."
      />

      <Card
        title="My Journey"
        description="I started my coding journey during college, where I discovered my passion for web development. Since then, I've worked on various projects and continuously improved my skills in both frontend and backend technologies."
      />

      <Card
        title="What I Do"
      >
        <Text style={styles.bulletPoint}>
          • Build responsive web applications using modern frameworks
        </Text>
        <Text style={styles.bulletPoint}>
          • Create intuitive user interfaces with attention to detail
        </Text>
        <Text style={styles.bulletPoint}>
          • Develop backend services and APIs
        </Text>
        <Text style={styles.bulletPoint}>
          • Optimize performance and ensure code quality
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#555',
    lineHeight: 24,
    marginVertical: 4,
  },
});
