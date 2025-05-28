<template>
  <nav class="bg-white fixed top-0 left-0 w-full shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex-shrink-0">
          <img src="/image/QUANTUMBERG-LOGO1.png" alt="Logo" class="h-10 w-auto" />
        </router-link>

        <!-- Hamburger Menu -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <i class="fa fa-bars text-xl"></i>
          </button>
        </div>

        <!-- Menu Items -->
        <div class="hidden md:flex space-x-6 items-center">
          <router-link
            to="/"
            class="nav-link"
            :class="{ 'text-[#442060] font-bold': isActive('/') }"
          >
            Home
          </router-link>
          <router-link
            to="/About"
            class="nav-link"
            :class="{ 'text-[#442060] font-bold': isActive('/About') }"
          >
            About Us
          </router-link>
          <router-link
            to="/Career"
            class="nav-link"
            :class="{ 'text-[#442060] font-bold': isActive('/Career', '/CareerForm') }"
          >
            Careers
          </router-link>
          <router-link
            to="/Services"
            class="nav-link"
            :class="{ 'text-[#442060] font-bold': isActive('/Services') }"
          >
            Services
          </router-link>
          <router-link
            to="/Pricing"
            class="nav-link"
            :class="{ 'text-[#442060] font-bold': isActive('/Pricing') }"
          >
            Pricing
          </router-link>
          <router-link
            to="/Contact"
            class="nav-link"
            :class="{ 'text-[#442060] font-bold': isActive('/Contact') }"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white px-4 pb-4 space-y-2">
      <router-link
        to="/"
        class="block"
        :class="{ 'text-[#442060] font-bold': isActive('/') }"
        @click="closeMenu"
      >
        Home
      </router-link>
      <router-link
        to="/About"
        class="block"
        :class="{ 'text-[#442060] font-bold': isActive('/About') }"
        @click="closeMenu"
      >
        About Us
      </router-link>
      <router-link
        to="/Career"
        class="block"
        :class="{ 'text-[#442060] font-bold': isActive('/Career', '/CareerForm') }"
        @click="closeMenu"
      >
        Careers
      </router-link>
      <router-link
        to="/Services"
        class="block"
        :class="{ 'text-[#442060] font-bold': isActive('/Services') }"
        @click="closeMenu"
      >
        Services
      </router-link>
      <router-link
        to="/Pricing"
        class="block"
        :class="{ 'text-[#442060] font-bold': isActive('/Pricing') }"
        @click="closeMenu"
      >
        Pricing
      </router-link>
      <router-link
        to="/Contact"
        class="block"
        :class="{ 'text-[#442060] font-bold': isActive('/Contact') }"
        @click="closeMenu"
      >
        Contact Us
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarView',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    isActive(...routes) {
      return routes.includes(this.$route.path);
    },
  },
};
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 text-base font-medium hover:text-[#442060] transition-colors duration-200;
}
</style>
