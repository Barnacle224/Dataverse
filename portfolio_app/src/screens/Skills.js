import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'React Native', 'JavaScript', 'CSS', 'HTML'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'SQL'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'GitHub', 'VS Code'],
    },
  ];

  return (
    <View style={styles.container}>
      {skillCategories.map((category, index) => (
        <Card key={index} title={category.category}>
          <View style={styles.badgesContainer}>
            {category.skills.map((skill, skillIndex) => (
              <Badge key={skillIndex} text={skill} />
            ))}
          </View>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
});
