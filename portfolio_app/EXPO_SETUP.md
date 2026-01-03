# Expo Setup Guide

This portfolio app has been converted to use Expo for easier development and deployment.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

## Installation & Setup

### 1. Install Dependencies

```bash
cd portfolio_app
npm install
```

### 2. Start the Development Server

```bash
npm start
```

This will open the Expo CLI where you can choose to run on:
- **Android**: Press `a`
- **iOS**: Press `i`
- **Web**: Press `w`

### 3. Using Expo Go App (Easiest)

1. Download the [Expo Go](https://expo.dev/client) app on your phone
2. Scan the QR code displayed in the terminal
3. Your app will load on your device

## Project Structure

```
portfolio_app/
├── App.js                          # Main app component
├── index.js                        # Expo entry point
├── app.json                        # Expo configuration
├── babel.config.js                 # Babel configuration for Expo
├── package.json                    # Dependencies
├── src/
│   ├── components/
│   │   ├── HeroSection.js
│   │   ├── AboutSection.js
│   │   ├── ProjectsSection.js
│   │   ├── ProjectCard.js
│   │   └── ContactSection.js
│   └── theme/
│       ├── colors.js
│       ├── spacing.js
│       ├── typography.js
│       └── shadows.js
├── assets/                         # Placeholder for icons/splash
└── README.md
```

## Key Expo Features

### StatusBar
The app uses `expo-status-bar` for proper status bar handling:
```javascript
import { StatusBar } from 'expo-status-bar';
<StatusBar barStyle="light-content" />
```

### Vector Icons
All icons use `@expo/vector-icons` (Feather icon set) which works seamlessly with Expo.

### Platform Support
- ✅ iOS (via Expo Go or native build)
- ✅ Android (via Expo Go or native build)
- ✅ Web (via Expo web)

## Development Commands

```bash
# Start Expo development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web

# Eject from Expo (advanced, not recommended)
npm run eject
```

## Building for Production

### Using Expo Cloud Build

```bash
# Create an Expo account at https://expo.dev
expo login

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

### Using Expo Go (Recommended for Testing)

The Expo Go app allows you to test your app on real devices without building:
1. Keep the development server running (`npm start`)
2. Scan the QR code with your phone
3. Your app loads instantly

## Common Issues & Solutions

### Port Already in Use
If port 19000 is in use:
```bash
npm start -- --port 19001
```

### Clear Cache
```bash
npm start -- --clear
```

### Reinstall Dependencies
```bash
rm -rf node_modules
npm install
```

## Customization

### Change App Name
Edit `app.json`:
```json
{
  "expo": {
    "name": "My App Name",
    "slug": "my-app-name"
  }
}
```

### Add App Icons
1. Create icons and splash images
2. Place them in `assets/` directory
3. Update paths in `app.json`

### Add Custom Fonts
```javascript
import * as Font from 'expo-font';

useEffect(() => {
  Font.loadAsync({
    'custom-font': require('./assets/fonts/custom-font.ttf'),
  });
}, []);
```

## Deployment

### Deploy to Expo Hosting
```bash
eas submit --platform ios
eas submit --platform android
```

### Deploy to App Stores
See [Expo Deployment Docs](https://docs.expo.dev/distribution/overview/)

## Troubleshooting

For detailed troubleshooting, visit [Expo Docs](https://docs.expo.dev/)

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Feather Icons](https://feathericons.com/)
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
