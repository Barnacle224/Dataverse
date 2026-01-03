import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ProjectCard from './ProjectCard';
import { colors } from '../theme/colors';
import { spacing, spacingPresets } from '../theme/spacing';
import { typography, typographyPresets } from '../theme/typography';

export default function ProjectsSection() {
  const SectionHeader = ({ icon, title }) => (
    <View style={styles.sectionHeaderContainer}>
      <Feather name={icon} size={28} color={colors.primary} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product catalog, shopping cart, secure checkout, and admin dashboard for inventory management.',
      tech: 'React, Node.js, MongoDB, Stripe',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative productivity application allowing teams to create, assign, and track tasks with real-time updates and notifications.',
      tech: 'React Native, Firebase, Redux',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A comprehensive weather application with real-time data, location-based forecasts, interactive charts, and weather alerts.',
      tech: 'React, OpenWeather API, Chart.js',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, user authentication, comments, and social sharing capabilities.',
      tech: 'Next.js, Prisma, PostgreSQL',
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'A real-time messaging application with user authentication, message history, and typing indicators for seamless communication.',
      tech: 'Node.js, Socket.io, MongoDB, React',
    },
    {
      id: 6,
      title: 'Expense Tracker',
      description: 'A personal finance tool for tracking expenses, categorizing spending, and visualizing financial insights with charts.',
      tech: 'React, Express, SQLite, Chart.js',
    },
  ];

  return (
    <View style={styles.section}>
      <SectionHeader icon="briefcase" title="Featured Projects" />
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    ...spacingPresets.sectionPadding,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    marginTop: spacing.sm,
  },
  sectionTitle: {
    ...typographyPresets.sectionTitle,
    color: colors.darkText,
    marginLeft: spacing.md,
  },
});
