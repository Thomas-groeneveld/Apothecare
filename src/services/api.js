// This file will contain all API calls for the application
// It will be used once you connect to a database

/**
 * Product API Service
 * This module handles all product-related API calls
 */
export const ProductService = {
  /**
   * Get all products
   * @returns {Promise} Promise with products data
   */
  getAllProducts() {
    // This will be replaced with actual API call
    // Example: return axios.get('/api/products');
    
    // For now, return a promise with mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Immuunsysteem Complex',
            description: 'Complete vitamine- en mineralensupplement voor ondersteuning van het immuunsysteem.',
            price: '€24,99',
            category: 'Supplementen',
            badge: 'Nieuw',
            image: require('@/assets/products/product1.jpg')
          },
          // Additional products...
        ]);
      }, 500);
    });
  },

  /**
   * Get featured products for homepage
   * @param {Number} limit - Number of products to return
   * @returns {Promise} Promise with featured products
   */
  getFeaturedProducts(limit = 4) {
    // This will be replaced with actual API call
    // Example: return axios.get(`/api/products/featured?limit=${limit}`);
    
    // For now, return a promise with mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        // Use the limit parameter to slice the array
        resolve([
          {
            id: 1,
            name: 'Immuunsysteem Complex',
            description: 'Complete vitamine- en mineralensupplement',
            price: '€24,99',
            badge: 'Nieuw',
            image: require('@/assets/products/product1.jpg')
          },
          {
            id: 2,
            name: 'Geavanceerde Pijnverlichting',
            description: 'Snelwerkende formule voor pijnbestrijding',
            price: '€12,99',
            image: require('@/assets/products/product2.jpg')
          },
          {
            id: 3,
            name: 'Slaap & Ontspanning',
            description: 'Natuurlijke formule voor betere slaapkwaliteit',
            price: '€18,99',
            badge: 'Populair',
            image: require('@/assets/products/product3.jpg')
          },
          {
            id: 4,
            name: 'Complete EHBO-kit',
            description: 'Essentiële benodigdheden voor noodgevallen',
            price: '€34,99',
            image: require('@/assets/products/product4.jpg')
          }
        ].slice(0, limit)); // Use the limit parameter here
      }, 500);
    });
  },

  /**
   * Get products by category
   * @param {String} category - Product category
   * @returns {Promise} Promise with filtered products
   */
  getProductsByCategory(category) {
    // This will be replaced with actual API call
    // Example: return axios.get(`/api/products?category=${category}`);
    
    // For now, return a promise with mock data
    return this.getAllProducts().then(products => {
      if (category === 'Alle Producten') {
        return products;
      }
      return products.filter(product => product.category === category);
    });
  },

  /**
   * Get a single product by ID
   * @param {Number} id - Product ID
   * @returns {Promise} Promise with product details
   */
  getProductById(id) {
    // This will be replaced with actual API call
    // Example: return axios.get(`/api/products/${id}`);
    
    // For now, return a promise with mock data
    return this.getAllProducts().then(products => {
      return products.find(product => product.id === id);
    });
  }
};

/**
 * Testimonials API Service
 * This module handles all testimonial-related API calls
 */
export const TestimonialService = {
  /**
   * Get all testimonials
   * @returns {Promise} Promise with testimonials data
   */
  getTestimonials() {
    // This will be replaced with actual API call
    // Example: return axios.get('/api/testimonials');
    
    // For now, return a promise with mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Dr. Sadam Hussain',
            role: 'Huisarts',
            image: require('@/assets/testimonials/testimonial1.jpg'),
            text: 'Als huisarts verwijs ik mijn patiënten altijd naar Apothecare. Hun farmaceutische expertise en persoonlijke benadering zorgen ervoor dat ik volledig vertrouw op hun medicatiebeheer en adviezen.'
          },
          {
            id: 2,
            name: 'Dr. Peter Bakker',
            role: 'Cardioloog',
            image: require('@/assets/testimonials/testimonial2.jpg'),
            text: 'De apothekers bij Apothecare begrijpen de specifieke behoeften van hartpatiënten. Ze werken nauw samen met medisch specialisten om een optimale farmaceutische zorg te waarborgen.'
          },
          {
            id: 3,
            name: 'Dr. Baljeed Krishna',
            role: 'Internist',
            image: require('@/assets/testimonials/testimonial3.jpg'),
            text: 'De diepgaande kennis van medicatie-interacties bij Apothecare is indrukwekkend. Ze zijn een essentiële partner in de zorgketen en dragen significant bij aan het welzijn van mijn patiënten.'
          }
        ]);
      }, 500);
    });
  }
};