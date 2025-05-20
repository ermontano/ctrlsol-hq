<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

// Sample projects data
const projects = ref([
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
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "A real estate listing platform with virtual tours and mortgage calculator.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: ["React", "Node.js", "PostgreSQL", "Three.js"],
    url: "https://example.com/realestate"
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile App",
    technologies: ["Swift", "HealthKit", "CoreData"],
    url: "https://example.com/fitness"
  },
  {
    id: 6,
    title: "Financial Analytics Platform",
    description: "A financial analytics tool for investors to track market trends and portfolio performance.",
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Data Visualization",
    technologies: ["D3.js", "React", "Express", "MongoDB"],
    url: "https://example.com/finance"
  },
  {
    id: 7,
    title: "E-learning Platform",
    description: "An online learning platform with course management and progress tracking.",
    image: "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: ["Vue", "Django", "PostgreSQL", "WebRTC"],
    url: "https://example.com/elearning"
  },
  {
    id: 8,
    title: "IoT Home Automation",
    description: "A smart home system for controlling home devices and energy management.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "IoT",
    technologies: ["React", "Node.js", "MQTT", "Raspberry Pi"],
    url: "https://example.com/homeautomation"
  }
])

// Filtering
const categories = computed(() => {
  const uniqueCategories = new Set<string>()
  projects.value.forEach(project => uniqueCategories.add(project.category))
  return ['All', ...Array.from(uniqueCategories)]
})

const selectedCategory = ref('All')
const searchQuery = ref('')

const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    const categoryMatch = selectedCategory.value === 'All' || project.category === selectedCategory.value
    const searchMatch = project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    return categoryMatch && searchMatch
  })
})

// Animation effect
onMounted(() => {
  const animateProjects = () => {
    const projectElements = document.querySelectorAll('.project-animate')
    
    projectElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('is-visible')
      }, 100 * index)
    })
  }
  
  animateProjects()
})
</script>

<template>
  <div class="projects-page">
    <!-- Projects Hero -->
    <section class="section projects-hero">
      <div class="container">
        <div class="projects-hero-content">
          <h1>Our Projects</h1>
          <p>Explore our portfolio of innovative digital solutions</p>
        </div>
      </div>
    </section>
    
    <!-- Projects Filters -->
    <section class="section bg-light projects-filters">
      <div class="container">
        <div class="filters-container">
          <div class="filter-categories">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="selectedCategory = category"
              :class="{ active: selectedCategory === category }"
              class="category-btn"
            >
              {{ category }}
            </button>
          </div>
          
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search projects..."
              class="search-input"
            >
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Projects Grid -->
    <section class="section projects-grid-section">
      <div class="container">
        <div v-if="filteredProjects.length" class="projects-grid">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="project.id"
            class="project-animate"
          >
            <ProjectCard :project="project" />
          </div>
        </div>
        
        <div v-else class="no-projects">
          <div class="no-projects-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h3>No projects found</h3>
          <p>Try adjusting your search or filter criteria</p>
          <button @click="selectedCategory = 'All'; searchQuery = ''" class="btn btn-primary">
            Reset Filters
          </button>
        </div>
      </div>
    </section>
    
    <!-- Contact CTA -->
    <section class="section contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Have a project in mind?</h2>
          <p>Let's discuss how we can bring your vision to life.</p>
          <router-link to="/contact" class="btn btn-primary">Get in Touch</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
// Projects Hero
.projects-hero {
  background-color: var(--color-secondary);
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-16) 0;
}

.projects-hero-content {
  max-width: 700px;
  margin: 0 auto;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: var(--spacing-4);
  }
  
  p {
    font-size: var(--font-size-xl);
    opacity: 0.9;
  }
}

// Projects Filters
.projects-filters {
  padding-top: var(--spacing-8);
  padding-bottom: var(--spacing-8);
}

.filters-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.filter-categories {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.category-btn {
  padding: var(--spacing-2) var(--spacing-4);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  &.active {
    background-color: var(--color-primary);
    color: var(--color-white);
    border-color: var(--color-primary);
  }
}

.search-box {
  position: relative;
  flex: 1;
  max-width: 400px;
  
  .search-input {
    width: 100%;
    padding: var(--spacing-3) var(--spacing-3) var(--spacing-3) var(--spacing-8);
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-full);
    font-size: var(--font-size-base);
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
    }
  }
  
  .search-icon {
    position: absolute;
    left: var(--spacing-3);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-gray-500);
  }
}

// Projects Grid
.projects-grid-section {
  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-12);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-6);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

// No Projects
.no-projects {
  text-align: center;
  padding: var(--spacing-12) 0;
  
  .no-projects-icon {
    margin: 0 auto var(--spacing-6);
    color: var(--color-gray-400);
  }
  
  h3 {
    font-size: var(--font-size-2xl);
    color: var(--color-gray-800);
    margin-bottom: var(--spacing-2);
  }
  
  p {
    color: var(--color-gray-600);
    margin-bottom: var(--spacing-6);
  }
}

// Contact CTA
.contact-cta {
  background-color: var(--color-gray-900);
  color: var(--color-white);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-4);
  }
  
  p {
    margin-bottom: var(--spacing-6);
    font-size: var(--font-size-lg);
    opacity: 0.9;
  }
}

// Animation
.project-animate {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>