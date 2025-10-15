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

        <!-- Desktop Menu -->
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

          <!-- Products Dropdown -->
<li class="relative list-none" @click="toggleDropdown">
            <div
              class="flex items-center cursor-pointer nav-link"
              :class="{ 'text-[#442060] font-bold': isActive('/Products') }"
            >
              Products
            </div>
            <ul
              v-show="isDropdownOpen"
              class="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg z-10"
              @click.stop
            >
              <li><router-link to="/ERPSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-globe mr-2"></i>ERP Software</router-link></li>
              <li><router-link to="/HRMSSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-desktop mr-2"></i>HRMS Software</router-link></li>
              <li><router-link to="/EducationSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-graduation-cap mr-2"></i>Education Software</router-link></li>
              <li><router-link to="/HealthcareSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-heartbeat mr-2"></i>Healthcare Software</router-link></li>
              <li><router-link to="/BillingSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-file-invoice-dollar mr-2"></i>Billing Software</router-link></li>
              <li><router-link to="/ECommerceSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-shopping-cart mr-2"></i>E-Commerce Software</router-link></li>
              <li><router-link to="/CRMSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-cogs mr-2"></i>CRM Software</router-link></li>
              <li><router-link to="/HelpdeskSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-headset mr-2"></i>Helpdesk Software</router-link></li>
              <li><router-link to="/LMSSoftware" class="dropdown-item block px-4 py-2 hover:bg-gray-100" @click="closeDropdown"><i class="fas fa-chalkboard-teacher mr-2"></i>LMS Software</router-link></li>
            </ul>
          </li>

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
          <a href="http://127.0.0.1:8000/login" class="nav-link text-[#442060] font-bold">
            Login
          </a>
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
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    isActive(...routes) {
      return routes.includes(this.$route.path);
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector('.relative');
      if (dropdown && !dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 text-base font-medium hover:text-[#442060] transition-colors duration-200 cursor-pointer;
}
.dropdown-item {
  color: #442060;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 600;
}
</style>
