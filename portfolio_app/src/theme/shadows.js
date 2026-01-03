/**
 * Shadow Definitions
 * Consistent elevation system for cards and components
 */
export const shadows = {
  // Subtle shadow for cards
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Larger shadow for elevated content
  elevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
};

/**
 * Border Radius System
 */
export const borderRadius = {
  sm: 4,      // Subtle curves
  md: 6,      // Buttons
  lg: 12,     // Cards
  full: 20,   // Pill/badge shape
};
