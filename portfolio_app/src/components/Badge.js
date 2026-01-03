import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Badge({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8f4f8',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    color: '#2980b9',
    fontWeight: '600',
  },
});
