import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, spacingPresets } from '../theme/spacing';
import { typography, typographyPresets } from '../theme/typography';
import { borderRadius } from '../theme/shadows';

export default function HeroSection() {
  return (
    <View style={styles.hero}>
      <View style={styles.heroIcon}>
        <Feather name="code" size={48} color={colors.primary} />
      </View>
      <Text style={styles.heroName}>John Doe</Text>
      <Text style={styles.heroRole}>Full Stack Developer</Text>
      <Text style={styles.heroDescription}>
        Building beautiful and functional digital experiences
      </Text>
      <TouchableOpacity style={styles.heroButton}>
        <Feather name="arrow-down" size={18} color={colors.cardBackground} />
        <Text style={styles.heroButtonText}>View My Work</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.sectionBg,
    ...spacingPresets.heroPadding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroIcon: {
    marginBottom: spacing.lg,
  },
  heroName: {
    ...typographyPresets.heroName,
    color: colors.lightText1,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  heroRole: {
    ...typographyPresets.heroRole,
    color: colors.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  heroDescription: {
    fontSize: typography.fontSize.base,
    color: colors.lightText2,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.xl,
  },
  heroButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xxxl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    marginTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  heroButtonText: {
    fontSize: typography.fontSize.lg,
    color: colors.cardBackground,
    fontWeight: typography.fontWeight.bold,
    textAlign: 'center',
  },
});
