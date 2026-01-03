# Expo Configuration

## app.json

This file contains Expo-specific configuration for your app.

### Key Configuration Options

#### App Identity
- `name`: Display name of your app
- `slug`: URL-friendly identifier
- `version`: Semantic versioning

#### Platforms
- `ios`: iOS-specific settings (bundle identifier, version)
- `android`: Android-specific settings (package name)
- `web`: Web-specific settings (favicon)

#### Icons & Splash
- `icon`: App icon (1024x1024 minimum)
- `splash`: Splash screen displayed on app launch
- `adaptiveIcon`: Android adaptive icon

#### Permissions & Plugins
- `plugins`: Expo libraries to configure
- `permissions`: App permissions (handled by expo-permissions)

## babel.config.js

Configures Babel to work with Expo's Metro bundler.

Uses `babel-preset-expo` which includes:
- JSX transformation
- ES6+ syntax support
- React Native module resolution

## index.js

Entry point for the Expo app.

```javascript
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
```

This registers your App component as the root component that Expo will render.

## Expo Benefits

✅ **Zero Configuration** - Works out of the box
✅ **Instant Refresh** - Fast development feedback
✅ **Expo Go** - Test on real devices without building
✅ **Cross-Platform** - iOS, Android, Web from one codebase
✅ **Managed Services** - Push notifications, analytics, etc.
✅ **Cloud Builds** - EAS Build for native compilation

## Next Steps

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Download Expo Go app on your phone
4. Scan QR code to preview your app
