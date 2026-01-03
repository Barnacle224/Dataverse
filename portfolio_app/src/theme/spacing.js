/**
 * Spacing Scale
 * Consistent spacing values for margins, padding, and gaps
 * 
 * Using a 4pt base unit for flexibility:
 * xs: 4pt, sm: 8pt, md: 12pt, lg: 16pt, xl: 20pt, xxl: 24pt, etc.
 */
export const spacing = {
  xs: 4,      // Minimal spacing
  sm: 8,      // Small elements
  md: 12,     // Default/medium spacing
  lg: 16,     // Large spacing
  xl: 20,     // Extra large spacing
  xxl: 24,    // 2xl spacing
  xxxl: 32,   // 3xl spacing
  huge: 60,   // Large sections (hero padding)
};

/**
 * Spacing Presets for Common Patterns
 */
export const spacingPresets = {
  // Section padding
  sectionPadding: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  
  // Card padding
  cardPadding: {
    padding: spacing.lg,
  },
  
  // Compact card padding
  compactCardPadding: {
    padding: spacing.md,
  },
  
  // Hero section padding
  heroPadding: {
    paddingVertical: spacing.huge,
    paddingHorizontal: spacing.lg,
  },
};
