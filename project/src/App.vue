<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

const route = useRoute()
const isLoaded = ref(false)
const transitionName = ref('slide-fade')

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 300)
})

// Update transition based on route
watch(() => route.path, (newPath, oldPath) => {
  const newDepth = newPath.split('/').length
  const oldDepth = oldPath?.split('/').length || 0
  
  if (newDepth > oldDepth) {
    transitionName.value = 'slide-right'
  } else if (newDepth < oldDepth) {
    transitionName.value = 'slide-left'
  } else {
    transitionName.value = 'slide-fade'
  }
})
</script>

<template>
  <div class="app" :class="{ 'is-loaded': isLoaded }">
    <Navbar />
    
    <main class="main-content">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
    </main>
    
    <Footer />
  </div>
</template>

<style lang="scss">
// Base transitions
.slide-fade-enter-active,
.slide-fade-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-out;
}

// Fade transition
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

// Left transition
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

// Right transition
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

// App loading state
.app {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  
  &.is-loaded {
    opacity: 1;
  }
}

// Reset default margin and padding
.main-content {
  min-height: calc(100vh - 140px);
  padding-top: var(--navbar-height);
}
</style>