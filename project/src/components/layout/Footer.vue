<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-logo">
          <h2>Project<span>HQ</span></h2>
          <p>We build amazing digital experiences.</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-links-column">
            <h3>Navigation</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/projects">Projects</router-link></li>
              <li><router-link to="/team">Our Team</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          
          <div class="footer-links-column">
            <h3>Legal</h3>
            <ul>
              <li><router-link to="/privacy">Privacy Policy</router-link></li>
              <li><router-link to="/terms">Terms of Service</router-link></li>
              <li><router-link to="/cookies">Cookies</router-link></li>
            </ul>
          </div>
          
          <div class="footer-links-column">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:hello@projecthq.com">hello@projecthq.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li>123 Innovation Street<br/>Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} ProjectHQ. All rights reserved.</p>
        
        <div class="social-links">
          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: var(--color-gray-900);
  color: var(--color-gray-300);
  padding: var(--spacing-12) 0 var(--spacing-4);
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-8);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
}

.footer-logo {
  h2 {
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    margin-bottom: var(--spacing-2);
    
    span {
      color: var(--color-accent);
    }
  }
  
  p {
    font-size: var(--font-size-base);
    max-width: 240px;
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-6);
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-links-column {
  h3 {
    color: var(--color-white);
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-4);
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: var(--spacing-2);
      
      a {
        color: var(--color-gray-400);
        transition: color 0.2s ease;
        
        &:hover {
          color: var(--color-accent);
        }
      }
    }
  }
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--color-gray-800);
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  p {
    margin-bottom: var(--spacing-4);
    
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
}

.social-links {
  display: flex;
  gap: var(--spacing-4);
  
  a {
    color: var(--color-gray-400);
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>