import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from '../components/Card';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      tech: 'React, Node.js, MongoDB, Stripe',
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'A productivity tool that helps teams collaborate and manage their tasks efficiently.',
      tech: 'React Native, Firebase, Redux',
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      description: 'A real-time weather application with location-based forecasts and detailed analytics.',
      tech: 'React, OpenWeather API, Chart.js',
    },
    {
      id: 4,
      name: 'Blog Platform',
      description: 'A modern blogging platform with markdown support and social features.',
      tech: 'Next.js, Prisma, PostgreSQL',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Featured Projects</Text>
      {projects.map((project) => (
        <Card key={project.id} title={project.name}>
          <Text style={styles.projectDescription}>{project.description}</Text>
          <Text style={styles.techStack}>Tech: {project.tech}</Text>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginHorizontal: 16,
    marginBottom: 12,
    marginTop: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
  techStack: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginTop: 8,
  },
});
