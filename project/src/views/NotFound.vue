<script setup lang="ts">
import { onMounted } from 'vue'

// Random 404 messages
const notFoundMessages = [
  "Houston, we have a problem.",
  "Oops! Page not found.",
  "This page is on vacation.",
  "You've reached the edge of our digital universe.",
  "This page is playing hide and seek."
]

// Select random message
const randomMessage = notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)]

// Animation on mount
onMounted(() => {
  const elements = document.querySelectorAll('.animate-in')
  
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('is-visible')
    }, 100 * index)
  })
})
</script>

<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code animate-in">404</div>
        <h1 class="animate-in">{{ randomMessage }}</h1>
        <p class="animate-in">The page you're looking for doesn't exist or has been moved.</p>
        
        <div class="actions animate-in">
          <router-link to="/" class="btn btn-primary">Go Home</router-link>
          <router-link to="/projects" class="btn btn-ghost">View Projects</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  min-height: calc(100vh - var(--navbar-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
}

.not-found-content {
  text-align: center;
  max-width: 600px;
}

.error-code {
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: var(--font-weight-bold);
  line-height: 1;
  color: var(--color-primary);
  margin-bottom: var(--spacing-4);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: var(--color-primary);
    border-radius: var(--radius-full);
  }
}

h1 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: var(--spacing-4);
  color: var(--color-gray-900);
}

p {
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-8);
}

.actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
}

// Animation
.animate-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>