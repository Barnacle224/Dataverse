# Portfolio App

A simple, beginner-friendly React Native portfolio application built with functional components.

## Features

- **About Section**: Introduction and personal journey
- **Projects Showcase**: Display of featured projects with descriptions
- **Skills Display**: Organized skill categories with badge components
- **Contact Information**: Easy access to contact details and social links
- **Clean Navigation**: Bottom tab navigation for easy section switching
- **Responsive Design**: Works seamlessly on both Android and iOS devices

## Project Structure

```
portfolio_app/
├── src/
│   ├── components/
│   │   ├── Header.js       # App header with title and subtitle
│   │   ├── Navigation.js   # Bottom navigation tabs
│   │   ├── Card.js         # Reusable card component
│   │   └── Badge.js        # Skill badge component
│   └── screens/
│       ├── About.js        # About section screen
│       ├── Projects.js     # Projects showcase screen
│       ├── Skills.js       # Skills display screen
│       └── Contact.js      # Contact information screen
├── App.js                  # Main app component
├── index.js                # Entry point
├── package.json            # Project dependencies
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native CLI

### Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. For Android:
   ```bash
   npm run android
   ```

5. For iOS:
   ```bash
   npm run ios
   ```

## Components Overview

### Header
- Displays the app title and subtitle
- Styled with a professional dark theme

### Navigation
- Bottom tab navigation component
- Active state styling for current section
- Easy to add new tabs

### Card
- Reusable container component
- Supports title, subtitle, and description
- Consistent styling and shadows

### Badge
- Used for displaying skills and tags
- Customizable text and styling

## Customization

To personalize this portfolio:

1. **Update Header Info**: Edit `src/components/Header.js`
2. **Add Your Projects**: Modify `src/screens/Projects.js`
3. **Update Skills**: Edit `src/screens/Skills.js`
4. **Add Contact Links**: Update `src/screens/Contact.js`
5. **Change Colors**: Modify the `colors` in individual component styles

## Styling

The app uses React Native's `StyleSheet` for all styling. Colors are organized as follows:

- **Primary Dark**: `#2c3e50`
- **Secondary Dark**: `#34495e`
- **Accent Blue**: `#3498db`
- **Light Background**: `#ecf0f1`

## Learning Resources

- [React Native Documentation](https://reactnative.dev/)
- [Functional Components Guide](https://reactnative.dev/docs/intro-react-native)
- [StyleSheet API](https://reactnative.dev/docs/stylesheet)

## Tips for Beginners

1. **Functional Components**: All components use React hooks and functional syntax
2. **State Management**: `useState` hook is used for managing active tabs
3. **Navigation**: Simple component-based navigation without external libraries
4. **Code Organization**: Components are modular and reusable
5. **Comments**: Code is clean and self-explanatory

## Next Steps

To expand this app:

1. Add a real backend/API
2. Integrate a database
3. Add animations with React Native Animated API
4. Implement dark mode
5. Add more detailed project pages

## License

This project is open source and available under the ISC License.
