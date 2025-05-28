<template>
    <div class="container clients_padding_top">
        <div class="clients">
            <div class="row">
                <div class="col-sm-6 client_col">
                    <h2 style="font-size: 25px;">Clients Speak Out</h2>
                    <p>They Trusted Us, Here's Why?</p>
                </div>
            </div>        
        </div>
        <div class="row">
            <div class="col-sm-12">
                <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
                    <slide v-for="slide in slides" :key="slide">
                        <div class="card clients_card">
                            <img class="card-img-top mt-4" :src="slide.imgUrl" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="title_engineer mb-4" style="font-size: 16px;">{{ slide.title }}</h5>
                                <h6>{{ slide.rating }} &nbsp;<i class="fa fa-star" style="color: orange;font-size: 22px;" aria-hidden="true"></i><i class="fa fa-star" style="color: orange;font-size: 22px;" aria-hidden="true"></i><i class="fa fa-star" style="color: orange;font-size: 22px;" aria-hidden="true"></i><i class="fa fa-star" style="color: orange;font-size: 22px;" aria-hidden="true"></i><i class="fa fa-star-half" style="color: orange;font-size: 22px;" aria-hidden="true"></i></h6>
                                <p class="text_engineer">{{ slide.description }}</p>
                            </div>
                        </div>
                        
                    </slide>
                
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
            </div>
        </div>
    </div>    
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'ClientsAboutQuantumberg',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        academia: [],
        isLoading: false,
        slides: [
        { title: '(Dr. Rakesh, Founder - Dr Heal Multispeciality Hospitals)',rating: '4.4', imgUrl: '/image/user.png', description: 'What sets Quantumberg apart is their unwavering dedication to client satisfaction. They not only listen to our ideas and concerns but also offer innovative solutions that have significantly improved our business' },
        { title: '(Shilpa, Director - SkillMeridian Tech)', rating: '4.3', imgUrl: '/image/user.png', description: 'I would not hesitate to recommend Quantumberg to any business seeking top-notch Application Development. Their reliability, professionalism and expertise make them an outstanding choice. We truly appreciate the partnership we\'ve built with them and we look forward to working together on future projects.' },
        { title: '(Kenchappa, Marketing Head - per-sq-ft.com)', rating: '4.6', imgUrl: '/image/Kencha.jpeg',  description: 'I\'ve had the pleasure of working with Quantumberg and I couldn\'t be more satisfied with their services. From the very beginning, they impressed us with their commitment to understanding our needs and delivering solutions that not only met but exceeded our expectations.' },
        { title: '(Shankar, Founder - Triguna Healthcare)', rating: '4.1', imgUrl: '/image/ShankarGowda.jpeg', description: 'The team at Quantumberg possesses a remarkable level of expertise. Their in-depth knowledge of Product Development has been invaluable in guiding our project. They consistently deliver high-quality work and their attention to detail is commendable.'},
        // { title: '', rating: '4.6', imgUrl: '', description: 'Quantumberg has been a game-changer for our business. Their team consistently delivers high-quality work within our deadlines. We appreciate their attention to detail and the way they go above and beyond to ensure our satisfaction. It\'s been a pleasure working with them and we highly recommend their services.'},
        { title: '(Saurabh, Co-Founder - KISSAN DAIRY MACHINERY)', rating: '4.7', imgUrl: '/image/Sourabh.jpeg', description: 'From the very beginning, Quantumberg impressed us with their professionalism and commitment to delivering exceptional results. Their collaborative approach and responsiveness to our needs have been a breath of fresh air. We\'re thrilled with the services provided and the positive impact it\'s had on our business.'}
        ],
   
        settings: {
            itemsToShow: 3,
            snapAlign: 'start',
        },
   
        breakpoints: {
   
            920: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            820: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            768:{
                itemsToShow: 2,
                snapAlign: 'start',
            },
            1024: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
            
            600: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            540: {
                itemsToShow: 1,
                snapAlign: 'start', 
            },
            414: {
                itemsToShow: 1,
                snapAlign: 'start',
            },
            375: {
                itemsToShow: 1,
                snapAlign: 'start',
            },
            393: {
                itemsToShow: 1,
                snapAlign: 'start',
            },
            360: {
                itemsToShow: 1,
                snapAlign: 'start',
            }

        },
    }),
});
</script>

<style scoped>
h1,h2,h3,h4,h5,h6{
    font-family:'Euclid Circular A Bold', sans-serif !important;
}
p,a{
    font-family:'Euclid Circular A Regular', sans-serif !important;
}
</style>

