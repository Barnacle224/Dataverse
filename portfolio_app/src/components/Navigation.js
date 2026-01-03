import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function Navigation({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.navButton,
            activeTab === item.id && styles.activeButton,
          ]}
          onPress={() => setActiveTab(item.id)}
        >
          <Text
            style={[
              styles.navText,
              activeTab === item.id && styles.activeText,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#34495e',
    borderTopWidth: 1,
    borderTopColor: '#2c3e50',
  },
  navButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeButton: {
    borderBottomColor: '#3498db',
  },
  navText: {
    fontSize: 12,
    color: '#95a5a6',
    fontWeight: '600',
  },
  activeText: {
    color: '#3498db',
  },
});
