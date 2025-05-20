<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const developerId = computed(() => Number(route.params.id))

// Sample developer data
// In a real application, this would come from an API
const developers = ref([
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Frontend Developer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Passionate frontend developer with 8 years of experience specializing in Vue.js and React. Alex leads our frontend team and has a keen eye for creating exceptional user experiences. Prior to joining ProjectHQ, Alex worked at several tech startups and contributed to open source projects.",
    skills: ["Vue.js", "React", "TypeScript", "CSS", "UI/UX", "Performance Optimization", "Accessibility"],
    experience: [
      {
        company: "TechCorp Inc.",
        role: "Senior Frontend Developer",
        period: "2019-2022",
        description: "Led frontend development for multiple enterprise applications."
      },
      {
        company: "WebSolutions Ltd.",
        role: "Frontend Developer",
        period: "2016-2019",
        description: "Developed responsive web applications and improved site performance."
      }
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Led frontend development for a major e-commerce platform with over 1 million monthly users.",
        technologies: ["Vue.js", "Vuex", "SCSS"]
      },
      {
        name: "Banking Dashboard",
        description: "Built a responsive dashboard for a financial institution with real-time data visualization.",
        technologies: ["React", "D3.js", "Material UI"]
      },
      {
        name: "Mobile Food Delivery App",
        description: "Developed the user interface for a popular food delivery application.",
        technologies: ["React Native", "Redux", "Firebase"]
      }
    ],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    },
    portfolio: "https://example.com"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Senior Backend Developer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Backend specialist with expertise in Node.js, Python, and cloud infrastructure. Sarah is passionate about building scalable, efficient backend systems and has extensive experience with database optimization and API design. She enjoys mentoring junior developers and contributing to the tech community.",
    skills: ["Node.js", "Python", "AWS", "Docker", "MongoDB", "PostgreSQL", "Microservices", "API Design"],
    experience: [
      {
        company: "CloudTech Systems",
        role: "Backend Engineer",
        period: "2018-2022",
        description: "Designed and implemented scalable microservices architecture."
      },
      {
        company: "DataFlow Inc.",
        role: "Software Engineer",
        period: "2015-2018",
        description: "Developed data processing pipelines and backend services."
      }
    ],
    projects: [
      {
        name: "Scalable Payment Processing System",
        description: "Engineered a high-volume payment processing system handling 10,000+ transactions per minute.",
        technologies: ["Node.js", "Redis", "Kafka", "PostgreSQL"]
      },
      {
        name: "Content Management API",
        description: "Designed and built a flexible API for a content management system used by major publishers.",
        technologies: ["Python", "Django", "MongoDB", "Docker"]
      },
      {
        name: "Cloud Deployment Pipeline",
        description: "Created an automated deployment pipeline for microservices architecture.",
        technologies: ["AWS", "Terraform", "Jenkins", "Kubernetes"]
      }
    ],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    portfolio: "https://example.com"
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Creative designer with a passion for crafting beautiful and intuitive user experiences. Miguel combines aesthetic sensibility with a deep understanding of user behavior to create designs that are both visually appealing and highly functional. His background in psychology gives him unique insights into user needs and behaviors.",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design Systems", "Motion Design", "Usability Testing"],
    experience: [
      {
        company: "DesignWorks Studio",
        role: "Senior UI/UX Designer",
        period: "2019-2022",
        description: "Created design systems and user interfaces for enterprise clients."
      },
      {
        company: "CreativeSolutions",
        role: "UI Designer",
        period: "2017-2019",
        description: "Designed mobile interfaces and conducted user testing."
      }
    ],
    projects: [
      {
        name: "Healthcare Patient Portal",
        description: "Redesigned a patient portal improving user satisfaction scores by 45%.",
        technologies: ["Figma", "User Research", "Prototyping"]
      },
      {
        name: "Financial App Design System",
        description: "Created a comprehensive design system for a suite of financial applications.",
        technologies: ["Sketch", "InVision", "Design Tokens"]
      },
      {
        name: "E-learning Platform UX",
        description: "Designed the user experience for an online learning platform with accessibility as a core focus.",
        technologies: ["Adobe XD", "User Testing", "Accessibility Standards"]
      }
    ],
    socialLinks: {
      dribbble: "https://dribbble.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    },
    portfolio: "https://example.com"
  },
  {
    id: 4,
    name: "Jenna Williams",
    role: "Full Stack Developer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Full stack developer who loves building scalable applications and learning new technologies. Jenna has a background in both frontend and backend development and enjoys working across the entire technology stack. She's particularly interested in performance optimization and creating seamless user experiences.",
    skills: ["JavaScript", "Ruby on Rails", "Vue.js", "PostgreSQL", "Redis", "GraphQL", "Jest", "Cypress"],
    experience: [
      {
        company: "TechStars Inc.",
        role: "Full Stack Developer",
        period: "2020-2022",
        description: "Built and maintained full stack applications for various clients."
      },
      {
        company: "WebCraft Agency",
        role: "Junior Developer",
        period: "2018-2020",
        description: "Developed custom websites and applications using modern frameworks."
      }
    ],
    projects: [
      {
        name: "Real Estate Management Platform",
        description: "Developed a full-stack application for property management and tenant communications.",
        technologies: ["Ruby on Rails", "Vue.js", "PostgreSQL"]
      },
      {
        name: "Event Scheduling System",
        description: "Created a scheduling platform with real-time updates and calendar integrations.",
        technologies: ["JavaScript", "Node.js", "Socket.io", "MongoDB"]
      },
      {
        name: "E-commerce Inventory Management",
        description: "Built an inventory management system integrated with multiple sales channels.",
        technologies: ["Ruby on Rails", "GraphQL", "Redis"]
      }
    ],
    socialLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    portfolio: "https://example.com"
  },
  {
    id: 5,
    name: "David Lee",
    role: "DevOps Engineer",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Infrastructure specialist focused on automation, CI/CD pipelines, and cloud solutions. David excels at building and maintaining robust, scalable infrastructure that supports development teams. He's passionate about automation and continuously improving deployment processes.",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD", "Linux", "Docker", "Security", "Monitoring"],
    experience: [
      {
        company: "CloudOps Solutions",
        role: "DevOps Engineer",
        period: "2019-2022",
        description: "Managed cloud infrastructure and implemented CI/CD pipelines."
      },
      {
        company: "InfraTech Services",
        role: "System Administrator",
        period: "2017-2019",
        description: "Maintained server infrastructure and automated deployment processes."
      }
    ],
    projects: [
      {
        name: "Kubernetes Migration",
        description: "Led the migration of legacy applications to a Kubernetes-based infrastructure, reducing deployment time by 70%.",
        technologies: ["Kubernetes", "Docker", "Helm"]
      },
      {
        name: "Automated Infrastructure",
        description: "Implemented infrastructure as code for entire cloud platform, enabling consistent deployments.",
        technologies: ["Terraform", "AWS", "GitLab CI"]
      },
      {
        name: "Monitoring System",
        description: "Built a comprehensive monitoring and alerting system for distributed applications.",
        technologies: ["Prometheus", "Grafana", "ELK Stack"]
      }
    ],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    portfolio: "https://example.com"
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Mobile Developer",
    image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "iOS and Android developer with a focus on creating seamless mobile experiences. Emma has a passion for crafting high-performance mobile applications with intuitive interfaces. She keeps up with the latest mobile development trends and best practices.",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "Mobile UX", "Firebase", "CI/CD for Mobile", "App Store Optimization"],
    experience: [
      {
        company: "MobileApps Inc.",
        role: "Senior Mobile Developer",
        period: "2020-2022",
        description: "Developed native applications for iOS and Android platforms."
      },
      {
        company: "AppWorks Studio",
        role: "Mobile Developer",
        period: "2018-2020",
        description: "Built cross-platform mobile applications using React Native."
      }
    ],
    projects: [
      {
        name: "Health Tracking App",
        description: "Developed a popular health and fitness tracking application with over 500,000 downloads.",
        technologies: ["Swift", "HealthKit", "CoreData"]
      },
      {
        name: "Augmented Reality Shopping",
        description: "Created an AR shopping experience for a major retail chain.",
        technologies: ["ARKit", "Swift", "SceneKit"]
      },
      {
        name: "Cross-platform Messaging App",
        description: "Built a messaging application with end-to-end encryption for both iOS and Android.",
        technologies: ["React Native", "Firebase", "Realm"]
      }
    ],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    portfolio: "https://example.com"
  }
])

const developer = computed(() => {
  return developers.value.find(dev => dev.id === developerId.value)
})

// Handle invalid developer ID
onMounted(() => {
  if (!developer.value) {
    router.push('/team')
  }
})

// Animation on scroll effect
onMounted(() => {
  if (developer.value) {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-section')
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight * 0.8
        
        if (isVisible) {
          setTimeout(() => {
            el.classList.add('is-visible')
          }, index * 100) // Staggered animation
        }
      })
    }
    
    animateOnScroll()
    window.addEventListener('scroll', animateOnScroll)
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll)
    }
  }
})
</script>

<template>
  <div v-if="developer" class="developer-profile">
    <!-- Profile Hero -->
    <section class="profile-hero">
      <div class="container">
        <div class="profile-header">
          <div class="profile-image">
            <img :src="developer.image" :alt="developer.name">
          </div>
          
          <div class="profile-intro">
            <h1>{{ developer.name }}</h1>
            <div class="profile-role">{{ developer.role }}</div>
            
            <div class="profile-social">
              <a 
                v-for="(url, platform) in developer.socialLinks" 
                :key="platform" 
                :href="url" 
                target="_blank"
                :aria-label="platform"
                class="social-link"
              >
                <template v-if="platform === 'github'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </template>
                <template v-else-if="platform === 'linkedin'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </template>
                <template v-else-if="platform === 'twitter'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </template>
                <template v-else-if="platform === 'dribbble'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                  </svg>
                </template>
                <template v-else>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </template>
              </a>
              
              <a v-if="developer.portfolio" :href="developer.portfolio" target="_blank" class="portfolio-btn">
                View Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Bio Section -->
    <section class="profile-section bio-section animate-section">
      <div class="container">
        <div class="section-content">
          <div class="section-heading">
            <h2>About {{ developer.name.split(' ')[0] }}</h2>
          </div>
          
          <div class="bio-content">
            <p>{{ developer.bio }}</p>
            
            <div class="skills-container">
              <h3>Skills &amp; Expertise</h3>
              <div class="skills-list">
                <span v-for="skill in developer.skills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Experience Section -->
    <section class="profile-section experience-section animate-section">
      <div class="container">
        <div class="section-content">
          <div class="section-heading">
            <h2>Work Experience</h2>
          </div>
          
          <div class="experience-timeline">
            <div v-for="(job, index) in developer.experience" :key="index" class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>{{ job.role }}</h3>
                <div class="timeline-company">{{ job.company }} • {{ job.period }}</div>
                <p>{{ job.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Projects Section -->
    <section class="profile-section projects-section animate-section">
      <div class="container">
        <div class="section-content">
          <div class="section-heading">
            <h2>Notable Projects</h2>
          </div>
          
          <div class="projects-grid">
            <div v-for="(project, index) in developer.projects" :key="index" class="project-item">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="profile-section contact-section animate-section">
      <div class="container">
        <div class="contact-content">
          <h2>Interested in working with {{ developer.name.split(' ')[0] }}?</h2>
          <p>Get in touch to discuss your project requirements or potential collaborations.</p>
          <div class="contact-cta">
            <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
            <a v-if="developer.portfolio" :href="developer.portfolio" target="_blank" class="btn btn-ghost">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Navigation -->
    <section class="team-navigation">
      <div class="container">
        <router-link to="/team" class="back-to-team">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Team
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
// Profile Hero
.profile-hero {
  padding-top: calc(var(--navbar-height) + var(--spacing-8));
  padding-bottom: var(--spacing-12);
  background-color: var(--color-primary);
  color: var(--color-white);
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--color-white);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--shadow-lg);
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: var(--spacing-8);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.profile-intro {
  flex: 1;
  
  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: var(--spacing-2);
  }
  
  .profile-role {
    font-size: var(--font-size-xl);
    color: var(--color-accent);
    margin-bottom: var(--spacing-4);
    font-weight: var(--font-weight-medium);
  }
}

.profile-social {
  display: flex;
  gap: var(--spacing-3);
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--color-white);
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--color-accent);
      transform: translateY(-3px);
    }
  }
  
  .portfolio-btn {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-accent);
    color: var(--color-gray-900);
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-medium);
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--color-accent-light);
      transform: translateY(-3px);
    }
  }
}

// Profile Sections
.profile-section {
  padding: var(--spacing-12) 0;
  
  &:nth-child(even) {
    background-color: var(--color-gray-50);
  }
}

.section-content {
  max-width: 900px;
  margin: 0 auto;
}

.section-heading {
  margin-bottom: var(--spacing-8);
  position: relative;
  display: inline-block;
  
  h2 {
    font-size: var(--font-size-2xl);
    margin-bottom: 0;
    display: inline-block;
    
    &::after {
      content: '';
      display: block;
      width: 40%;
      height: 3px;
      background-color: var(--color-primary);
      margin-top: var(--spacing-2);
    }
  }
}

// Bio Section
.bio-content {
  p {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-loose);
    color: var(--color-gray-700);
    margin-bottom: var(--spacing-6);
  }
}

.skills-container {
  h3 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-4);
    color: var(--color-gray-800);
  }
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.skill-tag {
  display: inline-block;
  padding: var(--spacing-2) var(--spacing-3);
  background-color: var(--color-primary-light);
  color: var(--color-gray-900);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

// Experience Timeline
.experience-timeline {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: var(--color-gray-200);
    
    @media (min-width: 640px) {
      left: 16px;
    }
  }
}

.timeline-item {
  position: relative;
  padding-left: var(--spacing-8);
  margin-bottom: var(--spacing-8);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 640px) {
    padding-left: var(--spacing-12);
  }
}

.timeline-marker {
  position: absolute;
  left: -4px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 2px solid var(--color-white);
  
  @media (min-width: 640px) {
    left: 12px;
  }
}

.timeline-content {
  h3 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-1);
    color: var(--color-gray-900);
  }
  
  .timeline-company {
    font-size: var(--font-size-base);
    color: var(--color-primary);
    margin-bottom: var(--spacing-3);
    font-weight: var(--font-weight-medium);
  }
  
  p {
    color: var(--color-gray-700);
  }
}

// Projects Section
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-item {
  background-color: var(--color-white);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  h3 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-3);
    color: var(--color-gray-900);
  }
  
  p {
    color: var(--color-gray-700);
    margin-bottom: var(--spacing-4);
  }
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.tech-tag {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-2);
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

// Contact Section
.contact-section {
  background-color: var(--color-secondary);
  color: var(--color-white);
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-4);
  }
  
  p {
    margin-bottom: var(--spacing-6);
    opacity: 0.9;
  }
}

.contact-cta {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  
  .btn-ghost {
    background-color: transparent;
    border: 2px solid var(--color-white);
    color: var(--color-white);
    
    &:hover {
      background-color: var(--color-white);
      color: var(--color-secondary);
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
}

// Team Navigation
.team-navigation {
  padding: var(--spacing-6) 0;
  background-color: var(--color-gray-100);
}

.back-to-team {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--color-gray-700);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--color-primary);
  }
}

// Animation
.animate-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>