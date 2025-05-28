<template>
    <div class="our_service_map">
        <div class="our_service_mapdetails">
            <div class="row">
                <div class="col-sm-6">
                    <h2 style="font-size: 25px;">Our Service Map</h2>
                    <!-- <p>With over 33 years in Information Technology, we have built up expertise in dozens of domains, including:</p> -->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 image_col">
                <img :src="selectedImage" class="imgs">
            </div>
            
            <div class="col-sm-8 our_services">
                <div class="our_service_details">
                    <div class="card item_slider" style="border: none; width: 100%;" @mouseleave="hideDetails">
                        <div v-for="(item, index) in items" :key="index" ref="content" class="scroll-container">
                            <h4>
                                <a
                                    class=""
                                    :aria-expanded="activeIndex === index ? 'true' : 'false'"
                                    @mouseover="showDetails(index)"
                                >{{ item.title }}</a>
                            </h4>
                            <div v-show="activeIndex === index">
                                <ul>
                                    <li v-for="(subItem, subIndex) in item.items" :key="subIndex">{{ subItem }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'OurServiceMap',
    data() {
        return {
            selectedImage: "/image/ConsultingAndStrategy.png",
            items: [
                {
                    title: '1. Consulting and Strategy',
                    items: [
                        'Technology and architecture consulting',
                        'Project planning and roadmapping',
                        'Feasibility studies',
                        'Digital transformation strategies',
                        'Scalability and optimization assessments',
                    ],
                    imgUrl: "/image/ConsultingAndStrategy.png",
                },
                {
                    title: '2. User Experience (UX) and User Interface (UI) Design',
                    items: [
                        'User research and usability testing',
                        'Wireframing and prototyping',
                        'Visual design and branding',
                        'Responsive design',
                        'Accessibility and user-centric design',
                    ],
                    imgUrl: "/image/UserExperienceAndUserInterface.png",
                },
                {
                    title: '3. Full-Stack Application Development',
                    items: [
                        'Expertise in a wide range of full-stack technologies, including but not limited to:',
                        'Front-end: HTML, CSS, JavaScript, React, Angular, Vue.js ',
                        'Back-end: Node.js, Python, Ruby on Rails, .NET, Java ',
                        'Databases: MySQL, PostgreSQL, MongoDB, Oracle, SQL Server',
                        'Native: Flutter, React Native, PWA',
                    ],
                    imgUrl: "/image/FullStackApplicationDevelopment.png",
                },
                {
                    title: '4. Testing and Quality Assurance',
                    items: [
                        'Functional testing',
                        'Performance testing',
                        'Security testing', 
                        'Automation testing', 
                        'Test-driven development (TDD)',
                    ],
                    imgUrl: "/image/TestingAndQualityAssurance.png",
                },
                {
                    title: '5. Cloud Services and Deployment',
                    items: [
                        'Cloud infrastructure setup (AWS, Azure, Google Cloud)',
                        'Containerization and orchestration (Docker, Kubernetes) ',
                        'Continuous integration and continuous deployment (CI/CD)',
                        'Serverless architecture',
                        'Cloud security and compliance',
                    ],
                    imgUrl: "/image/CloudServicesAndDeployment.png",
                },
                {
                    title: '6. Maintenance and Support',
                    items: [
                        'Ongoing application maintenance',
                        'Bug fixes and updates',
                        '24/7 support and monitoring',
                        'Service level agreements (SLAs)',
                        'Regular software audits and improvements',
                    ],
                    imgUrl: "/image/MaintenanceAndSupport (1).png",
                },
                {
                    title: '7. Client Training',
                    items: [
                        'Training sessions for clients and their teams',
                        'Knowledge transfer and documentation',
                        'Support in onboarding and adoption',
                        'Training materials and resources',
                    ],
                    imgUrl: "/image/ClientTraining.png",
                },
            ],    
                // Repeat similar blocks for other sections...
            activeIndex: null,
        }
    },
    methods: {
        showDetails(index) {
            this.activeIndex = index;
            this.selectedImage = this.items[index].imgUrl || "/image/ConsultingAndStrategy.png";
        },
        hideDetails() {
            this.activeIndex = null;
            this.selectedImage = "/image/ConsultingAndStrategy.png";
        },
    
    },    

}
</script>


<style scoped>
h1,h2,h3,h4,h5,h6{
    font-family:'Euclid Circular A Bold', sans-serif !important;
}
p,a{
    font-family:'Euclid Circular A Regular', sans-serif !important;
}
.image_col {
    padding-left: 29px;
    margin-top: 30px
}
.imgs {
    width: 322px;
height: 296.949px;
    transform: rotate(-8.803deg);
    flex-shrink: 0;
    border-radius: 19px;
    background: rgba(106, 56, 148, 0.11);
    box-shadow: 0px 4px 43px 0px rgba(129, 138, 184, 0.25);
    margin-bottom: 19%;
}


.our_service_map {
    padding-top: 25px;
    padding-left: 10px;
}
   
.our_services {
    padding-left: 13%;
}
.our_service_mapdetails h2 {
    color: #332140;
    font-variant-numeric: lining-nums proportional-nums;
    /* font-family: Euclid Circular A; */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
}    
.our_service_mapdetails p {
    color: #9889AA;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 172.8%; /* 27.648px */
    text-transform: capitalize;
}
.our_service_details h4 a{
    color: #442060;
    text-decoration: none;
    cursor: pointer;
    /* font-family: Euclid Circular A; */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
}
@media screen and (max-width: 420px){
    .our_service_map {
        padding-left: 16px;
        padding-right: 16px;
    }
    .our_service_mapdetails h2 {
        color: #432865;
        font-variant-numeric: lining-nums proportional-nums;
        /* font-family: Euclid Circular A; */
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        
    }
    .our_service_mapdetails p {
        color: #7855A5;
        /* font-family: Euclid Circular A; */
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 172.8%; /* 24.192px */
        text-transform: capitalize;
    }
} 
.our_service_details li p {
    color: #9889AA;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
}
.our_service_details h5 {
    color: #442060;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
}
/* .scroll-container {
    overflow-y: auto;
    direction: rtl; 
} */

/* .scroll-container ul {
    direction: ltr; 
} */
/* .scroll-container {
    max-height: 60px; 
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent transparent #333;
    border-left: 1px solid #333; 
    padding-left: 10px; 
} */

/* .scroll-container::-webkit-scrollbar {
    width: 4px; /* Adjust the width as needed */

/* .scroll-container::-webkit-scrollbar-thumb {
    background-color: #333; 
} */
/*  */

.item_slider {
    border: none;
    width: 200px; /* Set the desired width */
    overflow-y: auto; /* Enable vertical scrollbar if needed */
    margin: 20px; /* Add margin for better spacing */
    direction: rtl;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent transparent #B04797;
    border-left: 1px solid #B04797;
}
.item_slider::-webkit-scrollbar {
    width: 4px;
}   
.item_slider::-webkit-scrollbar-thumb {
    background-color: #B04797; 
} 
.scroll-container {
    padding-left: 15px; /* Add padding for better appearance */
    direction: ltr; /* Override direction for content to left-to-right */
}

ul li {
    color: #9889AA;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
}

.scroll-container.active h4 a {
    color: #442060;
    /* font-family: Euclid Circular A; */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
}
    /* Style the collapsed and expanded states as needed */
.scroll-container h4 a {
    color: #442060;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    text-decoration: none;
}
@media screen and (max-width: 920px) {
    .our_services {
        padding-left: 5%;
    }
        .imgs {
        width: 100%;
        height:100%;
    }
}
@media screen and (max-width: 600px) {
    .image_col {
        margin-bottom: 19%;
    }
}
@media screen and (max-width: 540px) {
    .our_services {
        padding-left: 0%;
    }
    .scroll-container.active h4 a {
        color: #442060;
        /* font-family: Euclid Circular A; */
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 176.252%; /* 28.2px */
        text-transform: capitalize;
    }

    ul li {
        color: #7855A5;
        /* font-family: Euclid Circular A; */
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 200% */
    }
    .imgs {
        width: 80%;
        height: 80%;
    }
}
    @media screen and (max-width: 420px) {
        .card {
            margin: 0px;
        }
        .our_services {
            padding-left: 5%;
        }
        .imgs {
            width: 90%;
            height: 90%;
        }
    }

    .our_service_details {
    position: relative;
  }

  .our_service_details:hover {
    cursor: pointer;
  }
  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 10px !important;
}
</style>

