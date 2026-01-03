import React, { useCallback } from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import ProjectsSection from './src/components/ProjectsSection';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';
import { colors } from './src/theme/colors';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync().catch(() => {
  // Error handling if splash screen fails
});

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        // Simulate any async operations (loading fonts, assets, etc.)
        // Add your async initialization code here
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (e) {
        console.error('Error loading app:', e);
      } finally {
        // Tell the splash screen to hide after we've done our initialization
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately as you become able to render
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Don't render anything while we're loading
  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
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

// ==================== STYLES ====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
});
