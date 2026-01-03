import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Linking from 'expo-linking';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, spacingPresets } from '../theme/spacing';
import { typography, typographyPresets } from '../theme/typography';
import { shadows, borderRadius } from '../theme/shadows';

export default function ContactSection() {
  const SectionHeader = ({ icon, title }) => (
    <View style={styles.sectionHeaderContainer}>
      <Feather name={icon} size={28} color={colors.primary} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const ContactLink = ({ icon, label, value, url }) => (
    <TouchableOpacity
      style={styles.contactCard}
      onPress={() => {
        Linking.openURL(url).catch((err) =>
          console.error('Failed to open URL:', err)
        );
      }}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Feather name={icon} size={24} color={colors.primary} />
      </View>
      <View style={styles.contactContent}>
        <Text style={styles.contactLabel}>{label}</Text>
        <Text style={styles.contactValue}>{value}</Text>
      </View>
      <Feather name="arrow-right" size={18} color={colors.primary} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.section}>
      <SectionHeader icon="mail" title="Get In Touch" />

      <View style={styles.card}>
        <Text style={styles.cardText}>
          I'm open to new opportunities and interesting projects. Feel free to 
          reach out through any of the channels below. I typically respond within 24 hours.
        </Text>
      </View>

      <ContactLink
        icon="mail"
        label="Email"
        value="john.doe@example.com"
        url="mailto:john.doe@example.com"
      />

      <ContactLink
        icon="linkedin"
        label="LinkedIn"
        value="linkedin.com/in/johndoe"
        url="https://linkedin.com"
      />

      <ContactLink
        icon="github"
        label="GitHub"
        value="github.com/johndoe"
        url="https://github.com"
      />

      <View style={styles.card}>
        <View style={styles.finalMessageContainer}>
          <Feather name="heart" size={20} color={colors.primary} />
          <View style={styles.finalMessageText}>
            <Text style={styles.cardTitle}>Let's Connect</Text>
            <Text style={styles.cardText}>
              Whether you have a project in mind, want to collaborate, or just want to say 
              hello, I'd love to hear from you. Don't hesitate to reach out!
            </Text>
          </View>
        </View>
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
    marginBottom: spacing.xs,
  },
  cardText: {
    ...typographyPresets.bodyText,
    color: colors.bodyText,
  },
  contactCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    ...spacingPresets.cardPadding,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    ...shadows.card,
  },
  iconContainer: {
    marginRight: spacing.lg,
    justifyContent: 'center',
  },
  contactContent: {
    flex: 1,
  },
  contactLabel: {
    ...typographyPresets.label,
    color: colors.lightText,
    marginBottom: spacing.xs,
  },
  contactValue: {
    fontSize: typography.fontSize.base,
    color: colors.darkText,
    fontWeight: typography.fontWeight.semibold,
  },
  finalMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  finalMessageText: {
    flex: 1,
    marginLeft: spacing.md,
  },
});
