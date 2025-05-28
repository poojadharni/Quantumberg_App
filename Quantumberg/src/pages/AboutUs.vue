<template>
    <div class="container-fluid">
        <img src="/image/about.png" alt="Snow" class="aboutus_img">
        <div class="centered">
            <button class="btn  buttons">About Us</button>
        </div>
    </div>    
    <div class="container">
        <div class="row aboutusdetails_design1">
            <div class="col-sm-6 img">
                <div class="row"> 
                    <div class="column">
                        <img src="/image/Picture.png" style="width:100%">
                        <img src="/image/Picture(1).png" style="width:100%">
                        <!-- <img src="/image/Picture(2).png" style="width:100%"> -->
                    </div>
                    <div class="column">
                        <img src="/image/Picture(3).png" style="width:100%">
                        <img src="/image/Picture(4).png" style="width:100%">
                    </div>  
                    <div class="column">
                        <img src="/image/Picture(5).png" style="width:100%">
                        <img src="/image/Picture(7).png" style="width:100%">
                    </div>
                </div>    
            </div>
            <!-- <div class="col-sm-6 img1">
                <img src="/image/Picture.png">
            </div> -->
            <div class="col-sm-6">
                <div class="our_story">
                    <h2 style= "font-size: 30px">Our Story</h2>
                    <p >Our journey began in 2022 and since then, we are dedicated in delivering cutting-edge full-stack applications that empower businesses and individuals alike. At Quantumberg, we are a dynamic and innovative team of experts, we offer a wide range of services designed to meet your unique business needs.</p>
                </div>
            </div>    
        </div>
        <div class="about-details-box">
            <div class="row">
                <div class="col-xl-4 col-12 col-md-4 mt-4">
                    <div class="about-feature-box">
                        <!-- <div class="item-img">
                            <img src="/image/about1.svg">
                        </div> -->
                        <div class="item-content">
                            <h5 style= "font-size: 22px" >Our Team</h5>
                            <p >Our team is the backbone of our success. We have a diverse and talented group of professionals who are passionate about full-stack development. With a collective experience of 15 years in the industry, we bring a wealth of knowledge and creativity to every project.</p>
                        </div>    
                    </div>
                </div>
                <div class="col-xl-4 col-12 col-md-4 mt-4">
                    <div class="about-feature-box">
                        <!-- <div class="item-img">
                            <img src="/image/about2.svg">
                        </div> -->
                        <div class="item-content">
                            <h5 style= "font-size: 22px">Our Vision</h5>
                            <p >Our vision is "Empowering innovation, transforming businesses and enriching user experiences".</p>
                        </div>
                    </div>    
                </div>
                <div class="col-xl-4 col-12 col-md-4 mt-4">
                    <div class="about-feature-box">
                        <!-- <div class="item-img">
                            <img src="/image/about3.svg">
                        </div> -->
                        <div class="item-content">
                            <h5 style= "font-size: 22px">Our Mission</h5>
                            <p>At Quantumberg, our Mission is to create technical experts, use cross cutting technologies and processes. We believe that technology can drive positive change and help our clients achieve their goals.</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        <!-- <div class="row aboutusdetails_design">
            <div class="col-sm-6 pt-3">
                <div class="aboutus_service_details1">
                    <h2>Our Vision</h2>
                    <p>Our Vision is to "Empowering Innovation, Transforming Businesses and Enriching User Experiences"</p>
                </div>
            </div>
            <div class="col-sm-6">
                <img src="/image/img1.png" class="img_logos1">
            </div>
        </div>
        <div class="row box aboutusdetails_design1">
            <div class="col-sm-6">
                <img src="/image/img2.png" class="img_logos">
            </div>
            <div class="col-sm-6 pt-3">
                <div class="aboutus_service_details image_first_row">
                    <h2>our mission</h2>
                    <p>At Quantumberg, our mission is to create technical experts, use cross cutting technologies and processes. We believe that technology can drive positive change and help our clients achieve their goals</p>
                </div>
            </div>
        </div> -->
        <div class="our_team pt-2">
            <!-- <h2>Our Team</h2>
            <p>Our team is the backbone of our success. We have a diverse and talented group of professionals who are passionate about full-stack development. With a collective experience of 15 years in the industry, we bring a wealth of knowledge and creativity to every project. </p> -->
            <h2 style= "font-size: 25px">Our Expertise</h2>
            <ul>
                <li>
                    <p>
                        Full-stack Development: We specialize in creating custom web and mobile applications tailored to your specific needs. Our expertise covers a wide range of technologies and frameworks, ensuring we can bring your vision to life.
                    </p>
                </li>
                <li>
                    <p>
                        User Experience: We prioritize user-centric design and usability, creating web and mobile apps that provide an exceptional user experience and drive engagement.
                    </p>
                </li>
                <li>
                    <p>
                        Security: Security is at the core of everything we do. We implement the latest security measures to protect your data and the integrity of your web applications.
                    </p>
                </li>
            </ul>
        </div>
        <!-- <ClientsAboutQuantumberg /> -->
    </div>
</template>

<script>
// import ClientsAboutQuantumberg from './ClientsAboutQuantumberg.vue'

export default {
    name: 'AboutUs',
    // components: {
    //     ClientsAboutQuantumberg
    // }
}
</script>

<style scoped>
h1,h2,h3,h4,h5,h6{
    font-family:'Euclid Circular A Bold', sans-serif !important;
}
p,a{
    font-family:'Euclid Circular A Regular', sans-serif !important;
}
.img_logos {
    width: 354px;
    height: 224px;
}
.img_logos1 {
    width: 354px;
    height: 224px;
}
.container-fluid {
    position: relative;
    padding-left: 0%;
    padding-right: 0%;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.aboutus_img {
    margin-top: 5%;
    width: 100%;
    height: 350px;
    margin-bottom: 2%;
}
.buttons {
    display: inline-flex;
    padding: 10px 40px 10px 40px;
    justify-content: flex-end;
    align-items: center;
    /* color: #442060; */
    color: #fff;
    font-size:18px;
    font-weight: 800;
    background-color:transparent;
    border: 3px solid #fff;
    /* border-radius: 15px; */
}
.our_story {
    color: #706969;
    font-family: Euclid Circular A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 26.32px */
}
.our_story h2 {
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
}
.our_story p {
    color: #7855A5;
    font-family: Euclid Circular A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 26.32px */
}
.aboutus_service_details h2{
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
}
.aboutus_service_details p {
    color: #7855A5;
    font-family: Euclid Circular A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 26.32px */
}
.aboutus_service_details1 h2{
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
}
.aboutus_service_details1 p {
    color: #7855A5;
    font-family: Euclid Circular A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 26.32px */
}
.our_team h2 {
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
}
.our_team {
    padding-left:  27px;
    padding-top: 3%;
}
.our_team p {
    color: #7855A5;
    font-family: Euclid Circular A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 26.32px */
}
.aboutusdetails_design {
    margin-left: 1%;
    margin-top: 3%;
}

.aboutusdetails_design1 {
    padding-right: 12px;
    margin-top: 3%;
    margin-left: 1%;
    padding-left: 13px;
}
.img {
    display: block;
}
.img1 {
    display: none;
}
.img1 img {
    width: 313px;
    height: 212px;
}
.clients h2 {
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 130.3%; /* 41.696px */
    text-transform: capitalize;
}
.clients p {
    color: #706969;
    font-family: Euclid Circular A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 204.416%; /* 32.707px */
    text-transform: capitalize;
}
.title_engineer {
    color: #442060;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 90% */
}
.text_engineer {
    color: #7D6C6C;
    text-align: center;
    font-family: Euclid Circular A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 27.2px */
}
.card-img-top {
    width: 109px;
    height: 109px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}
.about-feature-box {
    background: var(--main, linear-gradient(105deg, #453D89 4.3%, #C8499A 98.36%));
    cursor: pointer;
    height: 94%;
    width: 100%;
    padding: 2rem;
    border-radius: 45px;
    border: 1px solid #9889aa8a;
    box-shadow: -8px 12px 18px 0 #9889aa;
}
.about-details-box {
    margin-bottom: 5%;
    margin-top: 4%;
}
.item-content {
    text-align: left;
}
.item-content h5 {
    font-family: Euclid Circular A;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #fff;
    text-transform: capitalize;
}
.item-content p {
    color: #f8f9fad1;
    font-family: Euclid Circular A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 26.32px */
}
.item-img {
    width: auto;
    object-fit: cover;
}
.item-img img {
    display: block;
    width: 30%;
    margin-bottom: 7%;
}
@media screen and (max-width: 1000px) {
.aboutusdetails_design {
    padding-left: 0px;
    margin-top: 3%;
    margin-left: 0%;
}
.aboutusdetails_design1 {
    padding-right: 0px;
    margin-top: 3%;
    padding-left: 3px;
    margin-left: 0%;
}

}
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .image_first_row {
        padding-left: 73px;
    }
    .aboutus_service_details1 h2 {
        font-size: 24px;
    }.aboutus_service_details1 p {
        font-size: 14px;
    }
    .item-content h5 {
        font-size: 24px;
    }
    .item-content p {
        font-size: 14px;
        color: #f8f9fad1;
    }
    .img_logos1 {
        width: 315px;
    }
    .aboutus_service_details h2 {
        font-size: 24px;
        
    }.aboutus_service_details p {
        font-size: 16px;
    }
}
@media screen and (max-width: 912px) {
    .our_story h1 {
        font-size: 24px;
    }
    .aboutus_service_details h2 {
        font-size: 28px;
    }
    .aboutus_service_details p {
        font-size: 14px;
    }
    .our_story p {
        font-size: 14px;
    }
    
}

@media screen and (min-width: 760px) and (max-width: 912px) {
    .centered {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
@media screen and (max-width: 810px) {
    .img {
        display: none;
    }
    .img1 {
        display: block;
    }
}
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}
@media screen and (max-width: 600px) {
    .our_story h2 {
        color: #442060;
        font-family: Euclid Circular A;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }
    .item-content h5 {
        font-size: 24px;
    }
    .item-content p {
        font-size: 14px;
        color: #f8f9fad1;
    }
    .aboutus_img{
        height: 250px;
    }
    .our_team {
        padding-left:  18px;
        padding-top: 3%;
    }
    .centered {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
    .aboutus_service_details h2 {
        color: #442060;
        font-family: Euclid Circular A;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }
    .aboutus_service_details1 h2 {
        color: #442060;
        font-family: Euclid Circular A;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }
}

/* Responsive layout - makes a two column-layout instead of four columns */

@media screen and (max-width: 576px) {
    .item-img img {
        width: 15%;
    }
    .item-content h5 {
        font-size: 20px;
    }
    .item-content p {
        font-size: 14px;
    }
    .aboutusdetails_design {
    padding: 1rem;
    margin: 0rem;
    display: flex;
    flex-direction: column-reverse;
  }
  .img_logos {
    width: 313px;
    height: 212px;
  }
  .img_logos1 {
    width: 313px;
    height: 212px;
    margin-left: -15px;
  }
  
  .our_team h2{
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    }
    .our_team p {
        color: #7855A5;
        font-family: Euclid Circular A;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 164.5%; /* 23.03px */
    }
  .our_story h2 {
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    text-align: left;
  }
  .our_story p {
    color: #7855A5;
    font-family: Euclid Circular A;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 23.03px */
    text-align: left;
  }
  .aboutus_service_details1 h2 {
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-left: -14px;
  }.aboutus_service_details1 p {
    color: #7855A5;
    font-family: Euclid Circular A;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 23.03px */
    margin-left: -14px;
  }
  .aboutus_service_details h2 {
    color: #442060;
    font-family: Euclid Circular A;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
  }.aboutus_service_details p {
    color: #7855A5;
    font-family: Euclid Circular A;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%; /* 23.03px */
  }
}
@media screen and (max-width: 340px) {
  .aboutusdetails_design {
    padding: 0rem;
    margin: 0rem;
    display: flex;
    flex-direction: column-reverse;
  }
  .img_logos {
    width: 313px;
    height: 212px;
  }
  .img_logos1 {
    width: 313px;
    height: 212px;
    margin-left: -3px;
  }
  
  .our_story h1 {
    font-size: 20px;
    text-align: left;
  }
  .our_story p {
    font-size: 14px;
    text-align: left;
  }
  .container {
    padding-left: 0px !important;
  }
  .item-content h5 {
        font-size: 20px;
    }
    .item-content p {
        font-size: 14px;
    }
  .aboutus_service_details1 h2 {
    font-size: 20px;
    margin-left: -3px;
  }.aboutus_service_details1 p {
    font-size: 14px;
    margin-left: -3px;
  }
  .aboutus_service_details h2 {
    font-size: 20px;
  }.aboutus_service_details p {
    font-size: 14px;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 280px) {
    .img_logos1 {
        width: 250px;
        height: 244px;
        margin-left: -15px;
    }
    .img_logos {
        width: 250px;
        height: 244px;
    }
    .img1 img {
        width: 223px;
        height: 212px;
    }
    .aboutusdetails_design {
        margin-left: 6%;
    }
}

@media screen and (max-width: 600px) {
    .about-details-box {
        margin-bottom: 5%;
        margin-top: 0%;
    }
}
</style>