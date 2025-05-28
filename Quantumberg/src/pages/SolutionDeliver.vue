<template>
    <div class="solution_we_deliver">
        <div class="solution_we_deliverdetails">
            <div class="row">
                <div class="col-lg-12 col-sm-6">
                    <h2 style="font-size: 25px;">Solutions we deliver</h2>
                    <p>Offering diverse solutions tailored to your unique needs, transforming ideas into reality.</p>
                </div>
            </div>
            <div class="carousel">
                <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="2000" :wrap-around="true" pause-autoplay-on-hover>
                    <Slide v-for="solution in solutionDeliver" :key="solution.id" >
                        <div :class="{'solution_web_box': solution.id % 2 === 1, 'solution_web_box1': solution.id % 2 === 0}">
                            <img :src="solution.imageUrl" class="img text-white">
                            <h5 >{{ solution.name }}</h5>
                        </div>
                    </Slide>    
                    <template #addons>
                        <navigation />
                    </template>
                </Carousel>
            </div>
            
            <!-- <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <div class="solution_web_box">
                            <img src="../assets/enterprise.png">
                            <h5>Enterprise applications</h5>
                        </div>    
                    </div>
                    <div class="slide">
                        <div class="solution_web_box1">
                            <img src="../assets/erp.png">
                            <h5>ERP applications</h5>
                        </div>    
                    </div>
                    <div class="slide">
                        <div class="solution_web_box">
                            <img src="../assets/intarnet.png">
                            <h5>Intranets</h5>
                        </div>    
                    </div>
                    <div class="slide">
                        <div class="solution_web_box1">
                            <img src="../assets/human.png">
                            <h5>HRMS</h5>
                        </div>    
                    </div>
                    <div class="slide">
                        <div class="solution_web_box">
                            <img src="../assets/windows.png">
                            <h5>Windows application</h5>
                        </div>    
                    </div>
                    <div class="slide">
                        <div class="solution_web_box1">
                            <img src="../assets/web.png">
                            <h5>Web applications</h5>
                        </div>    
                    </div>
                    <div class="slide">
                        <div class="solution_web_box">
                            <img src="../assets/mobile.png">
                            <h5>Mobile applications</h5>
                        </div>    
                    </div>
                    <div class="slide">
                        <div class="solution_web_box1">
                            <img src="../assets/cloud.png">
                            <h5>Cloud solutions</h5>
                        </div>    
                    </div>
                    <div class="slide">
                        <div class="solution_web_box">
                            <img src="../assets/video.png">
                            <h5>Video Streaming applications</h5>
                        </div>    
                    </div>
                </div>
            </div>     -->
            <!-- <div class="solution_web">
                <div class="row boxes">
                    <div class="solution_web_box">
                        <img src="../assets/software1.png">
                        <h5>Enterprise applications</h5>
                    </div>
                    <div class="solution_web_box1">
                        <h5>ERP applications</h5>
                    </div>
                    <div class="solution_web_box">
                        <h5>Intranets</h5>
                    </div>
                    <div class="solution_web_box1">
                        <h5>HRMS</h5>
                    </div>
                    <div class="solution_web_box">
                        <h5>Windows application</h5>
                    </div>
                    <div class="solution_web_box1">
                        <h5>Web applications</h5>
                    </div>
                    <div class="solution_web_box">
                        <h5>Mobile applications</h5>
                    </div>
                    <div class="solution_web_box1">
                        <h5>Cloud solutions</h5>
                    </div>
                    <div class="solution_web_box">
                        <h5>Video Streaming applications</h5>
                    </div>
                    <div class="solution_web_box1">
                        <h5>Document Management</h5>
                    </div>
                </div>
            </div> -->
        </div>
    </div>

</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'



export default defineComponent({
    name: 'SolutionDeliver',
    components: {
        Carousel,
        Navigation,
        Slide
    },
    data: () => ({
        solutionDeliver: [
            {id:1,name:'Enterprise applications',imageUrl:'/image/enterprise.png'},
            {id:2,name:'ERP applications',imageUrl:'/image/erp.png'},
            {id:3,name:'Intranets',imageUrl:'/image/intarnet.png'},
            {id:4,name:'HRMS',imageUrl:'/image/human.png'},
            {id:5,name:'Windows application',imageUrl:'/image/windows.png'},
            {id:6,name:'Web applications',imageUrl:'/image/web.png'},
            {id:7,name:'Mobile applications',imageUrl:'/image/mobile.png'},
            {id:8,name:'Cloud solutions',imageUrl:'/image/cloud.png'},
            {id:9,name:'Video Streaming applications',imageUrl:'/image/video.png'},
        ],
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            // 700px and up
            900: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
            768: {
                itemsToShow: 3,
                snapAlign: 'start'
            },
            540: {
                itemsToShow: 2,
                snapAlign: 'start'
            },
                // 1024 and up
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
            1280: {
                itemsToShow: 6,
                snapAlign: 'start',
            },
        },
    })
})
</script>
<style scoped>
h1,h2,h3,h4,h5,h6{
    font-family:'Euclid Circular A Bold', sans-serif !important;
}
p,a{
    font-family:'Euclid Circular A Regular', sans-serif !important;
}
/* .carousel{
    padding: 2px !important;
} */
</style>


