<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitError.value = ''
  
  try {
    // Here you would typically make an API call to your backend
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    submitSuccess.value = true
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitError.value = 'An error occurred. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-page">
    <!-- Contact Hero -->
    <section class="section contact-hero">
      <div class="container">
        <div class="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>Have a project in mind? Let's discuss how we can help bring your vision to life.</p>
        </div>
      </div>
    </section>
    
    <!-- Contact Form -->
    <section class="section contact-form-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info">
            <h2>Contact Information</h2>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div class="contact-method">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <h3>Email</h3>
                  <p>contact@projecthq.com</p>
                </div>
              </div>
              
              <div class="contact-method">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <h3>Office</h3>
                  <p>123 Tech Street<br>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="form-container">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  :disabled="isSubmitting"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  :disabled="isSubmitting"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  :disabled="isSubmitting"
                >
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  required
                  :disabled="isSubmitting"
                ></textarea>
              </div>
              
              <div v-if="submitError" class="error-message">
                {{ submitError }}
              </div>
              
              <div v-if="submitSuccess" class="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
              
              <button 
                type="submit" 
                class="submit-btn" 
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
// Contact Hero
.contact-hero {
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-16) 0;
}

.contact-hero-content {
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

// Contact Form Section
.contact-form-section {
  padding: var(--spacing-12) 0;
  background-color: var(--color-gray-50);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
}

// Contact Information
.contact-info {
  h2 {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-4);
    color: var(--color-gray-900);
  }
  
  > p {
    color: var(--color-gray-600);
    margin-bottom: var(--spacing-8);
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
  
  svg {
    color: var(--color-primary);
  }
  
  h3 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-1);
    color: var(--color-gray-900);
  }
  
  p {
    color: var(--color-gray-600);
  }
}

.social-links {
  display: flex;
  gap: var(--spacing-4);
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--color-gray-100);
    border-radius: 50%;
    color: var(--color-gray-600);
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white);
      transform: translateY(-2px);
    }
  }
}

// Contact Form
.form-container {
  background-color: var(--color-white);
  padding: var(--spacing-8);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  
  label {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-700);
  }
  
  input,
  textarea {
    padding: var(--spacing-3);
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
    }
    
    &:disabled {
      background-color: var(--color-gray-100);
      cursor: not-allowed;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
}

.error-message {
  padding: var(--spacing-3);
  background-color: var(--color-error-light);
  color: var(--color-error);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.success-message {
  padding: var(--spacing-3);
  background-color: var(--color-success-light);
  color: var(--color-success);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.submit-btn {
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--color-primary-dark);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}
</style>