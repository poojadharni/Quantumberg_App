<template>
    <div class="container-fluid footer_color">
        <div class="container">
            <div class="row footer-value">
                <div class="col-sm-6 footer_logo_sicon text-left">
                    <a href="/">
          <img src="/image/QUANTUMBERG-LOGO1.png" alt="Logo" class="h-10 w-auto" />
                    </a>
                </div>

                <div class="col-sm-6 text-right footer_logo_sicon icons_designs">
                    <a href="https://www.facebook.com/profile.php?id=100086201869292" target="_blank"><i class="fa fa-facebook" style="font-size: 25px;color:purple"></i></a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/company/quantumberg-technologies-pvt-ltd/mycompany/" target="_blank"><i class="fa fa-linkedin-square fa-3x" style="font-size: 25px;color:purple"></i></a>&nbsp;&nbsp;
                    <i class="fa fa-twitter fa-3x" style="font-size: 25px;color:purple"></i>  
                    <!-- color: #08a0e9; -->
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid footer_color1">
        <div class="container" style="padding: 40px;">
            <div class="company_details mb-4">
                <div class="row">
                    <div class="col-sm-6">
                        <h5>Reach Us</h5>
                        <a href="https://wa.me/919108728053" style="text-decoration: none;" target="_blank">
                        <div class="row details_designs_dir">
                            <div classs="col-sm-2 details_left_side">
                                <p><i class="fa fa-phone"></i></p>
                            </div>
                            <div class="col-sm-10 details_right_side">
                                <p>+919108728053</p>
                            </div>
                        </div>
                        </a>
                        <a href="mailto:admin@quantumberg.com" style="text-decoration: none;">
                        <div class="row details_designs_dir">
                            <div classs="col-sm-2 details_left_side">
                                <p><i class="fa fa-envelope"></i></p>
                            </div>
                            <div class="col-sm-10 details_right_side">
                                <p>admin@quantumberg.com</p>
                            </div>
                        </div>
                        </a>
                        <a href="https://maps.app.goo.gl/hQjzBozyjy32EtWt7" style="text-decoration: none;" target="blank">
                        <div class="row details_designs_dir">
                            <div classs="col-sm-2 details_left_side">
                                <p><i class="material-icons">place</i></p>
                            </div>
                            <div class="col-sm-10 details_right_side">
                                <address style="font-family:'Euclid Circular A Regular', sans-serif !important;">No.1376, 2nd floor, 13th Cross, Sarakki Main Rd, 1st Phase, J. P. Nagar, Bengaluru, Karnataka 560078</address>
                            </div>
                        </div>
                        </a>
                        <!-- <p><i class="fa fa-phone"></i>&nbsp;&nbsp;+919108728053</p>
                        <p><i class="fa fa-envelope"></i>&nbsp;&nbsp;admin@quantumBerg.com</p>
                        <address><i class="fa fa-location-arrow"></i>&nbsp;&nbsp;No.1376, 2nd floor, 13th Cross, Sarakki Main Rd, 1st Phase, J. P. Nagar, Bengaluru, Karnataka 560078</address> -->
                    </div>
                    <div class="col-sm-2 first_col">
                        <h5>Company</h5>
                        <router-link to="/About" style="text-decoration: none;"><p>About</p></router-link>
                        <router-link to="/Contact" style="text-decoration: none;"><p>Contact</p></router-link>
                    </div>
                    <div class="col-sm-2 second_col">
                        <h5>Legal</h5>
                        <router-link to="/PrivacyPolicy"  class="kk" ><p>Privacy Policy</p></router-link>
                        <router-link to="/TermsOfService" class="kk"><p>Terms & Services</p></router-link>
                        <router-link to="/TermsOfUse" class="kk"><p>Terms of Use</p></router-link>
                    </div>
                </div>
            </div>
            <div class="copy_right mt-4">
                <div class="row Copy_right_reverse">
                    <div class="col-sm-12 text-center">
                        <p>© 2025 Copyright: Quantumberg Technologies Pvt.Ltd</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FooterView'
}
</script>

<style scoped>

h1,h2,h3,h4,h5,h6{
    font-family:'Euclid Circular A Bold', sans-serif !important;
   color:#f6eeff;
}
p,a{
    font-family:'Euclid Circular A Regular', sans-serif !important;
    color:#f6eeff;
}
.img_logo {
    width: 200px;
    height: 50px;
}
.footer_logo_sicon {
    margin-bottom: 0px;
}
@media screen and (max-width: 620px) {
    .img_logo {
        width: 148px;
        height: 36px;
    }
}
.footer_color {
    background: rgba(153, 69, 148, 0.07);
    margin-top: 2%;
}
.footer_color1 {
    background: linear-gradient(90deg, #453D89, #C8499A);
    /* fill: var(--main, linear-gradient(105deg, #453D89 4.3%, #C8499A 98.36%)); */
}
.footer-value {
    padding: 10px 10px;
}
.footer-value1 {
    padding: 30px 10px;
}
.fa {
    font-size: 16px;
}
.services_details h2 {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px; /* 171.875% */
    letter-spacing: -0.5px;
}
.services_details p {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
}
input[type=text] {
    width: 239.738px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 5px;
    border: none;
    background: #A472B4;
}
::placeholder {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 250% */
    padding-left: 15px;
}
.buttons {
    width: 137.254px;
    height: 60px;
    flex-shrink: 0;
    border: none;
    border-radius: 5px;
    background: #FFF;
    color: #72418F;
text-align: center;
/* font-family: Euclid Circular A; */
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 40px; 
}
.company_details {
    padding-top: 2%;
    padding-left: 1%;
}
.company_details h5 {
    color: #FFF;
    font-feature-settings: 'clig' off, 'liga' off;
    /* font-family: Euclid Circular A; */
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 130% */
}

.company_details p {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
address {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height:inherit;
}
.copy_right {
    padding-left: 1%;
}
.copy_right p {
    color: #FFF;
/* font-family: Euclid Circular A; */
font-size: 14px;
margin: 0px !important;
font-style: normal;
font-weight: 400;
}
hr {
  border-top: 1px solid white;
}
.forms_design {
    justify-content: right;
    margin-left: 25%;
}
@media screen and (max-width: 1000px) {
    .forms_design {
        justify-content: right;
        margin-left: 0%;
    }
}
@media screen and (min-width: 768px) and (max-width: 912px) {
    .services_details h2 {
        font-size: 24px;
    }
}
@media screen and (min-width: 480px) and (max-width: 620px) {
    .img_logo {
        width: 149px;
        height: 36px;
    }
    
    .details_designs_dir[data-v-4896eafd] {
        padding-left: 0px;
    }
    .details_designs_dir {
        margin-left: -10px;
    }
    .col-sm-2 {
        float: left;
        width: 31.2%;
    }
    .col-sm-2 {
        float: right;
        width: 31.2%;
    }
    .company_details p {
        margin-left: 5px;
    }
}
@media screen and (min-width: 320px) and (max-width: 430px) {
    .details_designs_dir {
        padding-left: 0px;
    }
    .company_details p {
        margin-left: 1px;
    }
    
    .first_col {
        float: left;
        width: 26%;
        position: relative;
        left: 30px;
    }
    .details_designs_dir {
        margin-left: -5px;
    }
    .second_col {
        width: 40%;
        position: relative;
    left: 30px;
    }
    .third_col {
        float: right;
        width: 34%;
    }
    .company_details h5 {
        font-size: 14px;
    }
    address {
        font-size: 14px;
    }
    .company_details p {
        font-size: 11px;
        margin-left: 0px;
    }
    .company_details p[data-v-4896eafd] {
        margin-left: 0px;
    }
    .services_details h2 {
        font-size: 22px;
    }
    .footer-value {
        padding: 6px 0px;
    }
    input[type=text] {
    width: 180px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 5px;
    border: none;
    background: #A472B4;
}
::placeholder {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 250% */
    padding-left: 14px;
}
.buttons {
    width: 107px;
    height: 60px;
    flex-shrink: 0;
    border: none;
    border-radius: 5px;
    background: #FFF;
    color: #72418F;
    text-align: center;
    /* font-family: Euclid Circular A; */
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 
}
}
@media screen and (max-width: 380px) {
    input[type=text] {
    width: 160px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 5px;
    border: none;
    background: #A472B4;
}
::placeholder {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 250% */
    padding-left: 14px;
}
.buttons {
    width: 99px;
    height: 60px;
    flex-shrink: 0;
    border: none;
    border-radius: 5px;
    background: #FFF;
    color: #72418F;
    text-align: center;
    /* font-family: Euclid Circular A; */
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 
}
}
@media screen and (min-width: 700px) and (max-width: 920px) {
    input[type=text] {
    width: 200px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 5px;
    border: none;
    background: #A472B4;
}
::placeholder {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 250% */
    padding-left: 14px;
}
.buttons {
    width: 99px;
    height: 60px;
    flex-shrink: 0;
    border: none;
    border-radius: 5px;
    background: #FFF;
    color: #72418F;
    text-align: center;
    /* font-family: Euclid Circular A; */
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 
}
}
.icons_designs {
    margin-top: 17px;
}
@media screen and (max-width: 600px) {
    .details_designs_dir {
        padding-left: 3px;
    }
    .icons_designs {
        margin-top: -28px;
    }
    address {
        color: #FFF;
        /* font-family: Euclid Circular A; */
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height:inherit;
    }
}
.details_designs_dir {
    padding-left: 13px;
}
.details_left_side {
    text-align: left;
}
.details_right_side {
    text-align: left;
}
@media screen and (max-width: 600px) {
    .Copy_right_reverse {
        display: flex;
        flex-direction: column-reverse;
    }
    .details_designs_dir {
        padding-left: 3px;
    }
    .details_left_side { 
        text-align: left;
        width: 10%;
        float: left;
}
.details_right_side {
    text-align: left;
    width: 71%;
}
.company_details p {
        margin-left: 1px;
    }
    .company_details address {
        margin-left: -9px;
    }
}
@media screen and (max-width: 322px) and (max-width: 359px) {
    .details_left_side { 
        text-align: left;
        width: 10%;
        float: left;
}
.details_right_side {
    text-align: left;
    width: 71%;
}
.company_details p {
        margin-left: 0px;
    }
    .company_details address {
        margin-left: -9px;
    }
    .details_designs_dir {
        padding-left: 3px;
    }
}
@media screen and (max-width: 280px) {
    .details_designs_dir {
        padding-left: 0px;
    }
    .img_logo {
        width: 108px;
        height: 36px;
    }
}
.kk{
    color:#FFF !important;
    text-decoration: none;
}

</style>
