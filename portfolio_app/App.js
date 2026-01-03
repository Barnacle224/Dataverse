import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function App() {
  // ==================== HERO SECTION ====================
  const HeroSection = () => (
    <View style={styles.hero}>
      <Text style={styles.heroName}>John Doe</Text>
      <Text style={styles.heroRole}>Full Stack Developer</Text>
      <Text style={styles.heroDescription}>
        Building beautiful and functional digital experiences
      </Text>
      <TouchableOpacity style={styles.heroButton}>
        <Text style={styles.heroButtonText}>View My Work</Text>
      </TouchableOpacity>
    </View>
  );

  // ==================== ABOUT SECTION ====================
  const AboutSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>About Me</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Background</Text>
        <Text style={styles.cardText}>
          I'm a passionate developer currently pursuing my Computer Science degree. 
          With a strong foundation in full stack development, I'm eager to solve 
          real-world problems and create meaningful digital experiences. I thrive 
          in collaborative environments and am committed to continuous learning.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>My Interests</Text>
        <Text style={styles.bulletPoint}>💡 Web Development & UI/UX Design</Text>
        <Text style={styles.bulletPoint}>📱 Mobile App Development</Text>
        <Text style={styles.bulletPoint}>🔧 Open Source Contributions</Text>
        <Text style={styles.bulletPoint}>🚀 Emerging Technologies</Text>
        <Text style={styles.bulletPoint}>🎓 Teaching & Mentoring Others</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Core Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Frontend</Text>
            <View style={styles.techGrid}>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>React</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>JavaScript</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>CSS/HTML</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>React Native</Text>
              </View>
            </View>
          </View>

          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Backend</Text>
            <View style={styles.techGrid}>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Node.js</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Express</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Python</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>APIs/REST</Text>
              </View>
            </View>
          </View>

          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Database & Tools</Text>
            <View style={styles.techGrid}>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>MongoDB</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>PostgreSQL</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Git</Text>
              </View>
              <View style={styles.techBadge}>
                <Text style={styles.techText}>Firebase</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Focus</Text>
        <Text style={styles.cardText}>
          Deepening my expertise in full stack development while exploring cloud 
          technologies and scalable system design. I'm looking for opportunities 
          to collaborate on meaningful projects and contribute to the tech community.
        </Text>
      </View>
    </View>
  );

  // ==================== PROJECTS SECTION ====================
  const ProjectCard = ({ title, description, tech }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{description}</Text>
      <View style={styles.techStackContainer}>
        <Text style={styles.techStackLabel}>Tech Stack:</Text>
        <Text style={styles.techStackText}>{tech}</Text>
      </View>
    </View>
  );

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product catalog, shopping cart, secure checkout, and admin dashboard for inventory management.',
      tech: 'React, Node.js, MongoDB, Stripe',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative productivity application allowing teams to create, assign, and track tasks with real-time updates and notifications.',
      tech: 'React Native, Firebase, Redux',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A comprehensive weather application with real-time data, location-based forecasts, interactive charts, and weather alerts.',
      tech: 'React, OpenWeather API, Chart.js',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, user authentication, comments, and social sharing capabilities.',
      tech: 'Next.js, Prisma, PostgreSQL',
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'A real-time messaging application with user authentication, message history, and typing indicators for seamless communication.',
      tech: 'Node.js, Socket.io, MongoDB, React',
    },
    {
      id: 6,
      title: 'Expense Tracker',
      description: 'A personal finance tool for tracking expenses, categorizing spending, and visualizing financial insights with charts.',
      tech: 'React, Express, SQLite, Chart.js',
    },
  ];

  const ProjectsSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Featured Projects</Text>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </View>
  );

  // ==================== CONTACT SECTION ====================
  const ContactLink = ({ label, value, url }) => (
    <TouchableOpacity
      style={styles.contactCard}
      onPress={() => {
        Linking.openURL(url).catch((err) =>
          console.error('Failed to open URL:', err)
        );
      }}
    >
      <Text style={styles.contactLabel}>{label}</Text>
      <Text style={styles.contactValue}>{value}</Text>
    </TouchableOpacity>
  );

  const ContactSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Get In Touch</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of the channels below!
        </Text>
      </View>

      <ContactLink
        label="Email"
        value="your.email@example.com"
        url="mailto:your.email@example.com"
      />

      <ContactLink
        label="GitHub"
        value="github.com/yourprofile"
        url="https://github.com"
      />

      <ContactLink
        label="LinkedIn"
        value="linkedin.com/in/yourprofile"
        url="https://linkedin.com"
      />

      <ContactLink
        label="Twitter"
        value="@yourhandle"
        url="https://twitter.com"
      />

      <View style={styles.card}>
        <Text style={styles.cardText}>
          I typically respond to messages within 24 hours. Looking forward to
          connecting with you!
        </Text>
      </View>
    </View>
  );

  // ==================== FOOTER ====================
  const Footer = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2025 My Portfolio. All rights reserved.
      </Text>
      <Text style={styles.footerSubtext}>Built with React Native</Text>
    </View>
  );

  // ==================== MAIN RENDER ====================
  return (
    <SafeAreaView style={styles.container}>
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

// ==================== STYLES ====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },

  // Hero Section
  hero: {
    backgroundColor: '#2c3e50',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroRole: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  heroDescription: {
    fontSize: 14,
    color: '#bdc3c7',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  heroButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 12,
  },
  heroButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },

  // Section Styling
  section: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
    marginTop: 8,
  },

  // Card Styling
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },

  // Bullet Points
  bulletPoint: {
    fontSize: 14,
    color: '#555',
    lineHeight: 24,
    marginVertical: 4,
    fontWeight: '500',
  },

  // Tech Stack
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  techBadge: {
    backgroundColor: '#e8f4f8',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#3498db',
  },
  techText: {
    fontSize: 12,
    color: '#2980b9',
    fontWeight: '600',
  },

  // Skills Container
  skillsContainer: {
    marginTop: 12,
  },
  skillCategory: {
    marginBottom: 16,
  },
  skillCategoryTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Tech Stack Text
  techStackText: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginTop: 12,
  },

  // Tech Stack Container
  techStackContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    paddingTop: 12,
  },
  techStackLabel: {
    fontSize: 11,
    color: '#7f8c8d',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  techStackText: {
    fontSize: 13,
    color: '#2980b9',
    fontWeight: '600',
  },

  // Contact Cards
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  contactValue: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '600',
  },

  // Footer
  footer: {
    backgroundColor: '#2c3e50',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#34495e',
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#bdc3c7',
    fontWeight: '600',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#7f8c8d',
  },
});
