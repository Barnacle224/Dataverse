import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2025 My Portfolio. All rights reserved.
      </Text>
      <Text style={styles.footerSubtext}>Built with React Native & Expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.sectionBg,
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.darkBorder,
    marginTop: spacing.xxxl,
  },
  footerText: {
    fontSize: typography.fontSize.base,
    color: colors.lightText2,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: spacing.xs,
  },
  footerSubtext: {
    fontSize: typography.fontSize.sm,
    color: colors.lightText,
  },
});
