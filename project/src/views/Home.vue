<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

// Sample featured projects
const featuredProjects = ref([
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with product management and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: ["Vue", "Node.js", "MongoDB", "Stripe"],
    url: "https://example.com/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application for teams with real-time updates.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Redux"],
    url: "https://example.com/taskapp"
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    description: "An analytics dashboard for healthcare providers to monitor patient data.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Data Visualization",
    technologies: ["D3.js", "Python", "PostgreSQL"],
    url: "https://example.com/healthcare"
  }
])

// Stats
const stats = ref([
  { value: '50+', label: 'Projects Completed' },
  { value: '25+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Team Members' }
])

// Services
const services = ref([
  {
    title: 'Web Development',
    description: 'We build responsive, modern websites and web applications using the latest technologies.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>`
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design processes to create intuitive and engaging digital experiences.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>`
  },
  {
    title: 'Data Analytics',
    description: 'Data-driven insights and analytics solutions to help businesses make informed decisions.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
  }
])

// Animation on scroll
onMounted(() => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect()
      const isVisible = rect.top <= window.innerHeight * 0.8
      
      if (isVisible) {
        el.classList.add('is-visible')
      }
    })
  }
  
  animateOnScroll()
  window.addEventListener('scroll', animateOnScroll)
  
  return () => {
    window.removeEventListener('scroll', animateOnScroll)
  }
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="section hero">
      <div class="hero-background">
        <div class="hero-gradient"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <h1 class="animate-on-scroll">We Build <span>Amazing</span> Digital Experiences</h1>
          <p class="animate-on-scroll">Your partner for innovative web and mobile solutions. We help businesses transform their ideas into reality.</p>
          
          <div class="hero-cta animate-on-scroll">
            <router-link to="/projects" class="btn btn-primary">Explore Our Work</router-link>
            <router-link to="/team" class="btn btn-ghost">Meet Our Team</router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="section bg-light">
      <div class="container">
        <div class="section-heading">
          <h2 class="animate-on-scroll">Our Services</h2>
          <p class="animate-on-scroll">Comprehensive solutions tailored to your needs</p>
        </div>
        
        <div class="services-grid">
          <div v-for="(service, index) in services" :key="index" class="service-card animate-on-scroll">
            <div class="service-icon" v-html="service.icon"></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Projects Section -->
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <h2 class="animate-on-scroll">Featured Projects</h2>
          <p class="animate-on-scroll">Check out some of our recent work</p>
        </div>
        
        <div class="projects-grid">
          <div v-for="project in featuredProjects" :key="project.id" class="animate-on-scroll">
            <ProjectCard :project="project" />
          </div>
        </div>
        
        <div class="text-center mt-8 animate-on-scroll">
          <router-link to="/projects" class="btn btn-primary">View All Projects</router-link>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="(stat, index) in stats" :key="index" class="stat-item animate-on-scroll">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content animate-on-scroll">
          <h2>Ready to start your project?</h2>
          <p>Let's discuss how we can help you achieve your goals and bring your vision to life.</p>
          <router-link to="/contact" class="btn btn-primary">Get in Touch</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
// Hero section
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 800px;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--color-white);
  padding: 0;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover no-repeat;
  z-index: -2;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
    margin-bottom: var(--spacing-4);
    
    span {
      color: var(--color-accent);
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--color-accent);
      }
    }
  }
  
  p {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    margin-bottom: var(--spacing-8);
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-cta {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  
  .btn {
    padding: var(--spacing-3) var(--spacing-6);
    font-size: var(--font-size-lg);
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-3);
  }
}

// Services section
.services-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-6);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.service-card {
  background-color: var(--color-white);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: var(--color-primary-light);
    border-radius: 50%;
    margin: 0 auto var(--spacing-4);
    color: var(--color-primary-dark);
  }
  
  h3 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-3);
  }
  
  p {
    color: var(--color-gray-600);
    margin-bottom: 0;
  }
}

// Projects grid
.projects-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-6);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

// Stats section
.stats-section {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-6);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  text-align: center;
  
  .stat-value {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-2);
    color: var(--color-white);
  }
  
  .stat-label {
    font-size: var(--font-size-lg);
    opacity: 0.8;
  }
}

// CTA section
.cta-section {
  background: url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover no-repeat;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
    z-index: 0;
  }
}

.cta-content {
  position: relative;
  text-align: center;
  color: var(--color-white);
  max-width: 700px;
  margin: 0 auto;
  z-index: 1;
  
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: var(--spacing-4);
  }
  
  p {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-6);
    opacity: 0.9;
  }
  
  .btn {
    padding: var(--spacing-3) var(--spacing-6);
    font-size: var(--font-size-lg);
  }
}

// Animation classes
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: calc(var(--delay, 0) * 0.1s);
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// Apply sequential delays to child elements
.service-card, .projects-grid > div, .stat-item {
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      --delay: #{$i};
    }
  }
}
</style>