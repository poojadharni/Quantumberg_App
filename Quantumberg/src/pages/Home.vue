<template>
    <div class="container home_page pt-5 pb-5">
        <div class="alert alert-primary" role="alert" v-if="showAlert">
            <marquee>
                <router-link to="/Career" class="alert-link">
                    <span style="color:#fff; display: flex; justify-content: space-between;">
                        <span>We Are Hiring.!</span>
                        <span>#Full-Time #Remote #Office</span>
                    </span>
                </router-link>
            </marquee>
        </div>

        <div class="top_heading_design">
            <div class="row">
                <div class="col-sm-8">
                    <div class="top_heading_details">
                        <p style="font-family:'Euclid Circular A Bold', sans-serif !important;color:#B34797 !important">
                            We make technology work for you!</p>
                        <h1 style="font-size:35px">Professional<br>Software Services</h1>
                        <p>Welcome To Quantumberg, A Leading Software Development Company That Specializes In
                            Creating
                            Innovative And UserFriendly Digital Solutions.</p>
                        <div class="home_buttons" style="font-family: 'Euclid Circular A Bold', sans-serif !important;">
                            <router-link to="/Contact" style="text-decoration: none;">
                                <button class="contact_button" style="color:#973993;">Contact Us</button>
                            </router-link>
                            <router-link to="/About" style="text-decoration: none;">
                                <button class="about_button m-2" style="color:#973993;">About Us</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="home_img_top">
                      <!--  <img src="../public/image/like.jpg" alt="image"> -->
                      <img src="/image/like.jpg" alt="image" />

                    </div>
                </div>
            </div>
        </div>

        <OurServiceMap />
        <SolutionDeliver />
        <ChooseUs />
       

    </div>
    <div class="container-fluid join_with_us">
        <div class="row join-with-us_details">
            <div class="col-sm-5"></div>
            <div class="col-sm-7">
                <div class="join_heading_details text-white">
                    <h3 style="font-weight: 400;" class="start-ur-journey"><b>Start Your Journey With Us Now</b></h3>
                </div>
                <div class="join_paragraph_details">
                    <router-link to="/About">
                        <h6 style="text-decoration:underline">Learn More <i class="fa fa-arrow-right arrow1"
                                aria-hidden="true"></i></h6>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
        <TechnologiesExperties />
    <ClientsAboutQuantumberg />

   
    <div class="container pt-4">
        <div class="help_you">
            <h2 style="font-size: 28px;">How we can help you?</h2>
            <p>Follow our newsletter. We will regulary update our latest project and availability.</p>
        </div>
        <div class="row help_you_row">
            <div class="">
                <form class="search_box" @submit.prevent="postData">
                    <!-- <input type="text" class="space" v-model="Email" placeholder="Enter You Email" required>&nbsp;&nbsp;&nbsp; -->
                    <router-link to="/Contact"><button class="buttons">Lets Talk</button></router-link>
                </form>
                <p v-if="successMessage" style="text-align: center;color: green;">{{ successMessage }}</p>
                <p v-if="errorMessage" style="text-align: center;color: green;">{{ errorMessage }}</p>

            </div>
     
        </div>
    </div>

</template>

<script>
import { defineComponent } from 'vue'
import OurServiceMap from './OurServiceMap.vue';
import SolutionDeliver from './SolutionDeliver.vue';
import ChooseUs from './ChooseUs.vue';
import TechnologiesExperties from './TechnologiesExperties.vue';
import ClientsAboutQuantumberg from './ClientsAboutQuantumberg.vue';
export default defineComponent({
    name: 'HomeView',
    components: {
        OurServiceMap,
  SolutionDeliver,
  ChooseUs,
  TechnologiesExperties,
  ClientsAboutQuantumberg
    },
    data() {
        return {
            Email: '',
            successMessage: '',
            errorMessage: '',
            showAlert: true
        }
    },
  
    

});

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

p,
a {
    font-family: 'Euclid Circular A Regular', sans-serif !important;
}

.home_img_top img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
}

.space {
    height: 30px;
}

.search_box .buttons {
    width: 109px;
    height: 41px;
    padding: 0px !important;
    border-radius: 8px;
    border: none;
    color: #fff;
    background: #864391;
}

@media screen and (min-width: 360px) and (max-width: 825px) {
    h1 {
        font-size: 31px !important;
    }

    .start-ur-journey {
        font-size: 20px;
    }
}

.alert {
    color: #fff;
    background: var(--main, linear-gradient(105deg, #453D89 4.3%, #C8499A 98.36%));
    margin-top: 41px;
}
</style>