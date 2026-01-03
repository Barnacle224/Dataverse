import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Portfolio</Text>
      <Text style={styles.subtitle}>Full Stack Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#95a5a6',
  },
});
