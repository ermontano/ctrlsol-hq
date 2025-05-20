<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  developer: {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    skills: string[];
    socialLinks?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      website?: string;
    };
  }
}>()

const isHovered = ref(false)
</script>

<template>
  <router-link :to="`/team/${developer.id}`" class="developer-card-link">
    <div 
      class="developer-card" 
      @mouseenter="isHovered = true" 
      @mouseleave="isHovered = false"
      :class="{ 'is-hovered': isHovered }"
    >
      <div class="developer-image">
        <img :src="developer.image" :alt="developer.name">
      </div>
      
      <div class="developer-info">
        <h3>{{ developer.name }}</h3>
        <span class="developer-role">{{ developer.role }}</span>
        
        <p class="developer-bio">{{ developer.bio }}</p>
        
        <div class="developer-skills">
          <span v-for="skill in developer.skills.slice(0, 3)" :key="skill" class="skill-tag">{{ skill }}</span>
          <span v-if="developer.skills.length > 3" class="more-skills">+{{ developer.skills.length - 3 }}</span>
        </div>
        
        <div v-if="developer.socialLinks" class="developer-social">
          <a v-if="developer.socialLinks.github" :href="developer.socialLinks.github" target="_blank" title="GitHub" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a v-if="developer.socialLinks.linkedin" :href="developer.socialLinks.linkedin" target="_blank" title="LinkedIn" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a v-if="developer.socialLinks.twitter" :href="developer.socialLinks.twitter" target="_blank" title="Twitter" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a v-if="developer.socialLinks.website" :href="developer.socialLinks.website" target="_blank" title="Personal Website" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.developer-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.developer-card {
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
    
    .developer-image img {
      transform: scale(1.05);
    }
  }
}

.developer-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
}

.developer-info {
  padding: var(--spacing-4);
  flex: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-1);
  color: var(--color-gray-900);
}

.developer-role {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-secondary);
  margin-bottom: var(--spacing-3);
  font-weight: var(--font-weight-medium);
}

.developer-bio {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-4);
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.developer-skills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
}

.skill-tag {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-2);
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

.more-skills {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-2);
  background-color: var(--color-gray-200);
  color: var(--color-gray-700);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

.developer-social {
  display: flex;
  gap: var(--spacing-3);
  
  a {
    color: var(--color-gray-500);
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>