/**
 * Typography System
 * Defines font sizes and weights for consistent text hierarchy
 * 
 * Font Size Scale (in points):
 * - sm: 12pt (captions, labels)
 * - base: 14pt (body text)
 * - lg: 16pt (larger body, buttons)
 * - xl: 18pt (card titles)
 * - xxl: 26pt (section titles)
 * - huge: 32pt (hero name)
 */
export const typography = {
  // Font Sizes
  fontSize: {
    xs: 11,     // Captions, labels
    sm: 12,     // Small text, badges
    base: 14,   // Body text
    lg: 16,     // Large body, buttons
    xl: 18,     // Card titles
    xxl: 26,    // Section titles
    huge: 32,   // Hero name
  },
  
  // Font Weights
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

/**
 * Typography Presets for Common Patterns
 */
export const typographyPresets = {
  // Hero Name
  heroName: {
    fontSize: typography.fontSize.huge,
    fontWeight: typography.fontWeight.bold,
  },
  
  // Hero Role / Subtitle
  heroRole: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
  },
  
  // Section Title
  sectionTitle: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
  },
  
  // Card Title
  cardTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
  },
  
  // Body Text
  bodyText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.regular,
    lineHeight: 22,
  },
  
  // Label (uppercase)
  label: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  // Badge Text
  badgeText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
};
