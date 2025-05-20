<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    url?: string;
  }
}>()

const isHovered = ref(false)
</script>

<template>
  <div 
    class="project-card" 
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false"
    :class="{ 'is-hovered': isHovered }"
  >
    <div class="project-image">
      <img :src="project.image" :alt="project.title">
      <div class="project-overlay">
        <div class="project-actions">
          <a v-if="project.url" :href="project.url" target="_blank" class="btn btn-primary">View Project</a>
          <router-link :to="`/projects/${project.id}`" class="btn btn-ghost">Details</router-link>
        </div>
      </div>
    </div>
    
    <div class="project-info">
      <span class="project-category">{{ project.category }}</span>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      
      <div class="project-technologies">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &.is-hovered {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    
    .project-overlay {
      opacity: 1;
    }
  }
}

.project-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-actions {
  display: flex;
  gap: var(--spacing-2);
  
  .btn {
    backdrop-filter: blur(4px);
  }
  
  .btn-ghost {
    background: rgba(255, 255, 255, 0.1);
    color: var(--color-white);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

.project-info {
  padding: var(--spacing-4);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-category {
  display: inline-block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-2);
}

h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-2);
}

p {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-4);
  flex-grow: 1;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: auto;
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
</style>