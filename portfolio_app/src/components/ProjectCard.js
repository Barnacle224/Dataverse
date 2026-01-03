import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../theme/colors';
import { spacing, spacingPresets } from '../theme/spacing';
import { typography, typographyPresets } from '../theme/typography';
import { shadows, borderRadius } from '../theme/shadows';

export default function ProjectCard({ title, description, tech }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{description}</Text>
      <View style={styles.techStackContainer}>
        <Text style={styles.techStackLabel}>Tech Stack:</Text>
        <Text style={styles.techStackText}>{tech}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  techStackContainer: {
    marginTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.md,
  },
  techStackLabel: {
    ...typographyPresets.label,
    color: colors.lightText,
    marginBottom: spacing.xs,
  },
  techStackText: {
    fontSize: typography.fontSize.sm,
    color: colors.primaryDark,
    fontWeight: typography.fontWeight.semibold,
  },
});
