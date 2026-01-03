import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import ProjectsSection from './src/components/ProjectsSection';
import ContactSection from './src/components/ContactSection';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { typography, typographyPresets } from './src/theme/typography';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2025 My Portfolio. All rights reserved.
      </Text>
      <Text style={styles.footerSubtext}>Built with React Native</Text>
    </View>
  );
}

// ==================== STYLES ====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },

  // Footer
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
