<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const lastScrollPosition = ref(0)
const isNavVisible = ref(true)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' }
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === path
  }
  return route.path.startsWith(path)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }
}

const handleScroll = () => {
  const currentScrollPosition = window.scrollY
  
  // Detect if scrolling up or down
  if (currentScrollPosition < lastScrollPosition.value) {
    isNavVisible.value = true
  } else if (currentScrollPosition > 64 && currentScrollPosition > lastScrollPosition.value) {
    isNavVisible.value = false
  }
  
  // Detect if scrolled past threshold for background change
  isScrolled.value = currentScrollPosition > 40
  
  lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="navbar" 
    :class="[
      isScrolled ? 'is-scrolled' : '', 
      isNavVisible ? 'is-visible' : 'is-hidden'
    ]"
  >
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-logo">
          <router-link to="/" @click="closeMenu">
            <h1>Project<span>HQ</span></h1>
          </router-link>
        </div>
        
        <nav class="navbar-links" :class="{ 'is-open': isMenuOpen }">
          <ul>
            <li v-for="link in navLinks" :key="link.path">
              <router-link 
                :to="link.path" 
                :class="{ active: isActive(link.path) }"
                @click="closeMenu"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
          
          <div class="navbar-cta">
            <router-link to="/contact" class="btn btn-primary">
              Contact Us
            </router-link>
          </div>
        </nav>
        
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  z-index: 100;
  background-color: transparent;
  transition: all 0.3s ease;
  
  &.is-scrolled {
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    
    .navbar-logo h1 {
      color: var(--color-gray-900);
      
      span {
        color: var(--color-primary);
      }
    }
    
    .navbar-links a {
      color: var(--color-gray-700);
      
      &:hover, &.active {
        color: var(--color-primary);
      }
    }
    
    .menu-toggle span {
      background-color: var(--color-gray-900);
    }
  }
  
  &.is-visible {
    transform: translateY(0);
  }
  
  &.is-hidden {
    transform: translateY(-100%);
  }
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar-logo {
  a {
    display: block;
    text-decoration: none;
  }
  
  h1 {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-white);
    margin: 0;
    
    span {
      color: var(--color-accent);
    }
  }
}

.navbar-links {
  display: flex;
  align-items: center;
  
  ul {
    display: flex;
    gap: var(--spacing-6);
    list-style: none;
  }
  
  a {
    color: var(--color-white);
    font-weight: var(--font-weight-medium);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-accent);
      transition: width 0.2s ease;
    }
    
    &:hover, &.active {
      color: var(--color-accent);
      
      &::after {
        width: 100%;
      }
    }
  }
}

.navbar-cta {
  margin-left: var(--spacing-6);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
  
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--color-white);
    transition: all 0.2s ease-in-out;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .navbar-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-white);
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-8);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    
    &.is-open {
      transform: translateX(0);
    }
    
    ul {
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-6);
    }
    
    a {
      color: var(--color-gray-900);
      font-size: var(--font-size-xl);
      
      &:hover, &.active {
        color: var(--color-primary);
      }
    }
    
    .navbar-cta {
      margin-left: 0;
      margin-top: var(--spacing-6);
    }
  }
  
  .is-open ~ .menu-toggle {
    span {
      background-color: var(--color-gray-900);
      
      &:first-child {
        transform: translateY(8px) rotate(45deg);
      }
      
      &:nth-child(2) {
        opacity: 0;
      }
      
      &:last-child {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
}
</style>