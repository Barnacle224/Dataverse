import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, spacingPresets } from '../theme/spacing';
import { typography, typographyPresets } from '../theme/typography';
import { shadows, borderRadius } from '../theme/shadows';

export default function AboutSection() {
  const SectionHeader = ({ icon, title }) => (
    <View style={styles.sectionHeaderContainer}>
      <Feather name={icon} size={28} color={colors.primary} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.section}>
      <SectionHeader icon="user" title="About Me" />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Background</Text>
        <Text style={styles.cardText}>
          I'm a passionate developer currently pursuing my Computer Science degree. 
          With a strong foundation in full stack development, I'm eager to solve 
          real-world problems and create meaningful digital experiences. I thrive 
          in collaborative environments and am committed to continuous learning.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>My Interests</Text>
        <View style={styles.interestItem}>
          <Feather name="zap" size={16} color={colors.primary} />
          <Text style={styles.interestText}>Web Development & UI/UX Design</Text>
        </View>
        <View style={styles.interestItem}>
          <Feather name="smartphone" size={16} color={colors.primary} />
          <Text style={styles.interestText}>Mobile App Development</Text>
        </View>
        <View style={styles.interestItem}>
          <Feather name="git-branch" size={16} color={colors.primary} />
          <Text style={styles.interestText}>Open Source Contributions</Text>
        </View>
        <View style={styles.interestItem}>
          <Feather name="trending-up" size={16} color={colors.primary} />
          <Text style={styles.interestText}>Emerging Technologies</Text>
        </View>
        <View style={styles.interestItem}>
          <Feather name="book" size={16} color={colors.primary} />
          <Text style={styles.interestText}>Teaching & Mentoring Others</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Core Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Frontend</Text>
            <View style={styles.techGrid}>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>React</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>JavaScript</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>CSS/HTML</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>React Native</Text>
              </View>
            </View>
          </View>

          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Backend</Text>
            <View style={styles.techGrid}>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Node.js</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Express</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Python</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>APIs/REST</Text>
              </View>
            </View>
          </View>

          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Database & Tools</Text>
            <View style={styles.techGrid}>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>MongoDB</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>PostgreSQL</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Git</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Firebase</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Focus</Text>
        <Text style={styles.cardText}>
          Deepening my expertise in full stack development while exploring cloud 
          technologies and scalable system design. I'm looking for opportunities 
          to collaborate on meaningful projects and contribute to the tech community.
        </Text>
      </View>
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
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    ...spacingPresets.cardPadding,
    marginBottom: spacing.md,
    ...shadows.card,
  },
  cardTitle: {
    ...typographyPresets.cardTitle,
    color: colors.darkText,
    marginBottom: spacing.sm,
  },
  cardText: {
    ...typographyPresets.bodyText,
    color: colors.bodyText,
  },
  interestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xs,
  },
  interestText: {
    fontSize: typography.fontSize.base,
    color: colors.bodyText,
    lineHeight: 24,
    marginLeft: spacing.md,
    fontWeight: typography.fontWeight.medium,
  },
  skillsContainer: {
    marginTop: spacing.md,
  },
  skillCategory: {
    marginBottom: spacing.lg,
  },
  skillCategoryTitle: {
    ...typographyPresets.label,
    color: colors.darkText,
    marginBottom: spacing.sm,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  techBadge: {
    backgroundColor: colors.accentLight,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  techText: {
    ...typographyPresets.badgeText,
    color: colors.primaryDark,
  },
});
