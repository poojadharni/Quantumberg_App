<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
    
  </div>
</template>

<script>
import Navbar from './pages/Navbar.vue'
import Footer from './pages/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style scoped>

body, html {
    margin: 0;
    padding: 0;
      font-family: "Roboto", sans-serif;
}
body {
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

body::-webkit-scrollbar {
    display: none;
}

Footer {
  margin-top: auto; /* Push AppFooter to the bottom */
}
</style>
