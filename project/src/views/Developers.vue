<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import DeveloperCard from '../components/DeveloperCard.vue'

// Sample developers data
const developers = ref([
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Frontend Developer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Passionate frontend developer with 8 years of experience specializing in Vue.js and React.",
    skills: ["Vue.js", "React", "TypeScript", "CSS", "UI/UX"],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Senior Backend Developer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Backend specialist with expertise in Node.js, Python, and cloud infrastructure.",
    skills: ["Node.js", "Python", "AWS", "Docker", "MongoDB"],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Creative designer with a passion for crafting beautiful and intuitive user experiences.",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    socialLinks: {
      dribbble: "https://dribbble.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  {
    id: 4,
    name: "Jenna Williams",
    role: "Full Stack Developer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Full stack developer who loves building scalable applications and learning new technologies.",
    skills: ["JavaScript", "Ruby on Rails", "Vue.js", "PostgreSQL", "Redis"],
    socialLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 5,
    name: "David Lee",
    role: "DevOps Engineer",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Infrastructure specialist focused on automation, CI/CD pipelines, and cloud solutions.",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD", "Linux"],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Mobile Developer",
    image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "iOS and Android developer with a focus on creating seamless mobile experiences.",
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "Mobile UX"],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
])

// Filter functionality
const searchQuery = ref('')
const selectedSkill = ref('')
const skillsList = ref<string[]>([])

// Extract unique skills from developers
onMounted(() => {
  const allSkills = new Set<string>()
  developers.value.forEach(dev => {
    dev.skills.forEach(skill => allSkills.add(skill))
  })
  skillsList.value = Array.from(allSkills).sort()
})

// Computed filtered developers
const filteredDevelopers = computed(() => {
  return developers.value.filter(dev => {
    // Search by name or role
    const nameMatch = dev.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const roleMatch = dev.role.toLowerCase().includes(searchQuery.value.toLowerCase())
    const searchMatches = nameMatch || roleMatch
    
    // Filter by skill
    const skillMatches = !selectedSkill.value || dev.skills.includes(selectedSkill.value)
    
    return searchMatches && skillMatches
  })
})

// Clear filters
const clearFilters = () => {
  searchQuery.value = ''
  selectedSkill.value = ''
}

// Animation on scroll effect
onMounted(() => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.developer-animate')
    
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect()
      const isVisible = rect.top <= window.innerHeight * 0.85
      
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
})
</script>

<template>
  <div class="developers-page">
    <!-- Team Hero -->
    <section class="section team-hero">
      <div class="container">
        <div class="team-hero-content">
          <h1>Our Team</h1>
          <p>Meet the talented professionals who bring our projects to life</p>
        </div>
      </div>
    </section>
    
    <!-- Team Filters -->
    <section class="section team-filters bg-light">
      <div class="container">
        <div class="filters-container">
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search by name or role..."
              class="search-input"
            >
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          
          <div class="filter-skills">
            <select v-model="selectedSkill" class="skill-select">
              <option value="">All Skills</option>
              <option v-for="skill in skillsList" :key="skill" :value="skill">{{ skill }}</option>
            </select>
          </div>
          
          <button v-if="searchQuery || selectedSkill" @click="clearFilters" class="clear-filters">
            Clear Filters
          </button>
        </div>
      </div>
    </section>
    
    <!-- Team Grid -->
    <section class="section team-grid">
      <div class="container">
        <div v-if="filteredDevelopers.length" class="developers-grid">
          <div 
            v-for="(developer, index) in filteredDevelopers" 
            :key="developer.id"
            class="developer-animate"
            :style="{ '--delay': index }"
          >
            <DeveloperCard :developer="developer" />
          </div>
        </div>
        
        <div v-else class="no-results">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="15" x2="16" y2="15"></line>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
          <h3>No team members found</h3>
          <p>Try adjusting your search filters</p>
          <button @click="clearFilters" class="btn btn-primary">Clear Filters</button>
        </div>
      </div>
    </section>
    
    <!-- Join Our Team -->
    <section class="section join-team">
      <div class="container">
        <div class="join-content">
          <h2>Join Our Team</h2>
          <p>We're always looking for talented individuals to join our growing team. Check out our current openings or send us your resume.</p>
          <div class="join-cta">
            <a href="#" class="btn btn-primary">View Openings</a>
            <a href="#" class="btn btn-ghost">Send Resume</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
// Team Hero
.team-hero {
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-16) 0;
}

.team-hero-content {
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

// Filters section
.team-filters {
  padding-top: var(--spacing-8);
  padding-bottom: var(--spacing-8);
}

.filters-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: space-between;
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

.filter-skills {
  .skill-select {
    padding: var(--spacing-3) var(--spacing-4);
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    background-color: var(--color-white);
    cursor: pointer;
    min-width: 160px;
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
    }
  }
}

.clear-filters {
  padding: var(--spacing-2) var(--spacing-4);
  color: var(--color-primary);
  background: transparent;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
}

// Team Grid
.team-grid {
  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-12);
}

.developers-grid {
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

// No results
.no-results {
  text-align: center;
  padding: var(--spacing-12) 0;
  color: var(--color-gray-500);
  
  svg {
    margin: 0 auto var(--spacing-4);
  }
  
  h3 {
    font-size: var(--font-size-xl);
    color: var(--color-gray-700);
    margin-bottom: var(--spacing-2);
  }
  
  p {
    margin-bottom: var(--spacing-6);
  }
}

// Join Our Team
.join-team {
  background-color: var(--color-gray-50);
  text-align: center;
  padding: var(--spacing-12) 0;
}

.join-content {
  max-width: 700px;
  margin: 0 auto;
  
  h2 {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-4);
    color: var(--color-gray-900);
  }
  
  p {
    color: var(--color-gray-600);
    margin-bottom: var(--spacing-6);
  }
}

.join-cta {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
}

// Animation
.developer-animate {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>