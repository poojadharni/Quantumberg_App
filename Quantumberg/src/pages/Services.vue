<template>
    <div class="services_details">
        <nav class="nav">
            <div ref="navLinks" class="nav-links mx-auto" :style="{ transform: `translateX(${scrollX}px)` }">
                <a class="nav-link" :class="{ active: selectedComponent === 'A' }"
                    @click="selectComponent('A')">Software Development</a>
                <a class="nav-link" :class="{ active: selectedComponent === 'B' }" @click="selectComponent('B')">Talent
                    Acquisition</a>
                <a class="nav-link" :class="{ active: selectedComponent === 'C' }" @click="selectComponent('C')">UI/UX
                    Services</a>
                <a class="nav-link" :class="{ active: selectedComponent === 'D' }" @click="selectComponent('D')">Digital
                    Marketing</a>
                <a class="nav-link" :class="{ active: selectedComponent === 'E' }"
                    @click="selectComponent('E')">Industry</a>
            </div>
        </nav>
    </div>
    <div class="container">
        <div v-if="selectedComponent === 'A'">
            <SoftwareDevelopment />
        </div>
        <div v-if="selectedComponent === 'B'">
            <TalentAcquisition />
        </div>
        <div v-if="selectedComponent === 'C'">
            <WebDesign />
        </div>
        <div v-if="selectedComponent === 'D'">
            <DigitalMarketing />
        </div>
        <div v-if="selectedComponent === 'E'">
            <Industry />
        </div>
    </div>

</template>

<script>
import DigitalMarketing from './DigitalMarketing.vue'
import TalentAcquisition from './TalentAcquisition.vue'
import SoftwareDevelopment from './SoftwareDevelopment.vue'
import WebDesign from './WebDesign.vue'
import Industry from './Industry.vue'

export default {
    name: 'ServicesView',
    components: {
        DigitalMarketing,
        SoftwareDevelopment,
        WebDesign,
        TalentAcquisition,
        Industry
    },
    data() {
        return {
            selectedComponent: 'A',
            activeName: 'first',
            activeIndex: 0,
            isDragging: false,
            startX: 0,
            scrollX: 0,
        }
    },
    mounted() {
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('mousemove', this.handleMouseMove);
    },
    beforeUnmount() {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
        setActive(index) {
            if (index !== 4) {
                this.activeIndex = index;
            }
        },
        handleMouseDown(e) {
            this.isDragging = true;
            this.startX = e.pageX;
            this.scrollX = this.$refs.navLinks.scrollLeft;
        },
        handleMouseUp() {
            this.isDragging = false;
        },
        handleMouseMove(e) {
            if (!this.isDragging) return;
            const x = e.pageX - this.startX;
            this.scrollX = this.scrollX - x;
            this.$refs.navLinks.scrollLeft = this.scrollX;
        },
        selectComponent(component) {
            this.selectedComponent = component;
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Euclid Circular A Bold', sans-serif !important;
}

p {
    font-family: 'Euclid Circular A Regular', sans-serif !important;
}

a {
    cursor: pointer;
}

.nav-links {
    margin-left: 100px;
}

.services_details {
    padding-top: 93px;
}

.nav {
    text-indent: 7px;
    margin-bottom: 2%;
    background-color: rgba(67, 40, 101, 0.03) !important;
}

a.nav-link {
    display: inline-block;
    text-decoration: none;
    color: #825DB0;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'Euclid Circular A Bold', sans-serif !important;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    box-sizing: border-box;
    list-style: none;
    position: relative;

}



a.nav-link.active {
    color: #432865;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'Euclid Circular A Bold', sans-serif !important;
    font-size: 20px;
    font-style: normal;
    font-weight: 449;
    box-sizing: border-box;
    display: inline-block;
    list-style: none;
    position: relative;
}

.active {
    border-bottom: 2px solid #C04899;
    /* Add the border for the active link */
    margin-bottom: -10px;
}

.disabled {
    pointer-events: none;
    color: #666;
}

@media screen and (max-width: 1024px) {
    a.nav-link.active {
        border-bottom: 3px solid #C04899;
        /* Add the border for the active link */
        margin-bottom: -10px;
    }

    .nav-links {
        margin-left: 100px;
    }

    .nav {
        margin-top: 9%;
        margin-bottom: 2%;
    }
}

@media screen and (max-width: 912px) {
    a.nav-link.active {
        border-bottom: 3px solid #C04899;
        /* Add the border for the active link */
        margin-bottom: -10px;
    }

    .nav-links {
        margin-left: 100px;
    }

    .nav {
        margin-top: 9%;
    }
}

/* Styling for mobile with horizontal scrollbar */
@media (max-width: 767px) {

    a.nav-link.active {
        border-bottom: 3px solid #C04899;
        /* Add the border for the active link */
        margin-bottom: -10px;
    }

    .nav-links {
        overflow-x: auto;
        white-space: nowrap;
    }
}

@media screen and (max-width: 600px) {
    .services_details {
        padding-top: 3%;
    }

    a.navlink.active {
        border-bottom: 3px solid #C04899;
        /* Add the border for the active link */
        margin-bottom: -10px;
    }

    .nav-links {
        overflow-x: auto;
        white-space: nowrap;
    }
}

@media screen and (max-width: 560px) {
    a.nav-link {
        font-size: 18px;
    }



    a.nav-link.active {
        font-size: 18px;
    }

    .nav {
        margin-top: 14%;
    }

    .nav-links {
        margin-left: 0px;
    }

    a.nav-link.active {
        border-bottom: 3px solid #C04899;
        /* Add the border for the active link */
        margin-bottom: -10px;
        margin-left: 5px;
        /* Add margin for the active link */
    }

    .navbar-nav h2 {
        font-size: 18px;
    }

    .nav-links {
        overflow-x: auto;
        white-space: nowrap;
    }
}

@media screen and (min-width: 400px) and (max-width: 414px) {
    a.nav-link.active {
        border-bottom: 3px solid #C04899;
        /* Add the border for the active link */
        margin-bottom: -10px;
        margin-left: 5px;
        /* Add margin for the active link */
    }

    .nav {
        margin-top: 18%;
    }

    .nav-link {
        overflow-x: auto;
        white-space: nowrap;
    }
}

@media screen and (max-width: 400px) {
    a.nav-link.active {
        border-bottom: 8px solid #C04899;
        /* Add the border for the active link */
    }

    .nav {
        margin-top: 18%;
    }

    .nav-link {
        overflow-x: auto;
        white-space: nowrap;
    }
}
</style>