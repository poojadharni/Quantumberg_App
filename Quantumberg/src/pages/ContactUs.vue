<template>
    <div class="container-fluid contact_us_page">
        <div class="container">
            <div class="contact_details mt-2">
                <h5 style="font-family:'Euclid Circular A Bold', sans-serif !important;color:#432865;font-weight: 600">
                    Contact Us</h5>
                <p style="color:#7855A5">Leave an inquiry or contact us via email and phone. We will contact you within
                    24 hours during work days.</p>
            </div>
            <div class="row">
                <div class="col-sm-12 contact-box">
                    <div class="card ss">
                        <div class="row contactdetails_design">
                            <div class="col-sm-6 col-lg-5 contact_inform">
                                <div class="contact_information">
                                    <h2 style="font-size:20px;font-weight: 500;" class="mt-0"><b>Contact Information</b>
                                    </h2>
                                    <div class="contact_address_information">
                                        <a href="tel:+91 9380967693" style="text-decoration: none;">
                                            <div class="row details_designs_dir">
                                                <div class="col-sm-2 details_left_side">
                                                    <p><i class="fa fa-phone"></i></p>
                                                </div>
                                                <div class="col-sm-10 details_right_side">
                                                    <p>+919108728053</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="mailto:admin@quantumberg.com" style="text-decoration: none;">
                                            <div class="row details_designs_dir">
                                                <div class="col-sm-2 details_left_side">
                                                    <p><i class="fa fa-envelope"></i></p>
                                                </div>
                                                <div class="col-sm-10 details_right_side">
                                                    <p>admin@quantumberg.com</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="https://maps.app.goo.gl/hQjzBozyjy32EtWt7"
                                            style="text-decoration: none;" target="_blank">
                                            <div class="row details_designs_dir">
                                                <div class="col-sm-2 details_left_side">
                                                    <p><i class="fa-solid fa-location-dot"></i></p>
                                                </div>
                                                <div class="col-sm-10 details_right_side">
                                                    <p
                                                        style="font-family:'Euclid Circular A Regular', sans-serif !important;">
                                                        No.1376, 2nd floor, 13th Cross, Sarakki Main Rd, 1st Phase, J.
                                                        P. Nagar, Bengaluru, Karnataka 560078</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="icons">
                                        <a href="https://www.facebook.com/profile.php?id=100086201869292"
                                            target="_blank" style="color: white;">
                                            <i class="fa fa-facebook" style="font-size: 25px;">
                                            </i>
                                        </a>&nbsp;&nbsp;
                                        <i class="fa fa-twitter" style="font-size: 25px;"></i>&nbsp;&nbsp;
                                        <a href="https://www.linkedin.com/in/quantumberg-tech-166556252" target="_blank"
                                            style="color: white;">
                                            <i class="fa fa-linkedin-square" style="font-size: 25px;">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-7">
                                <div class="user_form">
                                    <h4 class="mb"><b>Get In Touch</b></h4>
                                    <p>We're always excited to explore new opportunities and challenges. Whether you're
                                        a startup
                                        or an established enterprise, we'd love to hear from you. Contact us to discuss
                                        how we can
                                        help you achieve your digital goals.
                                    </p>
                                    <form @submit.prevent="postData">
                                        <input v-model="Name" type="text" placeholder="Name *" required
                                            @blur="validateName">
                                        <span v-if="nameError" class="error">{{ nameError }}</span>

                                        <input v-model="Email" type="text" placeholder="Email *" required
                                            @blur="validateEmail">
                                        <span v-if="emailError" class="error">{{ emailError }}</span>

                                        <input v-model="Phone" type="text" placeholder="Phone Number *" required
                                            @blur="validatePhone">
                                        <span v-if="phoneError" class="error">{{ phoneError }}</span>

                                        <input v-model="How_found" type="text" placeholder="How Did You Find Us?">

                                        <div class="input-group mb-2">
                                            <select class="custom-select text-secondary" id="inputGroupSelect">
                                                <option selected>Product Enquiry</option>
                                                <option value="1">ERP Software</option>
                                                <option value="2">HRMS Software</option>
                                                <option value="3">Education Software</option>
                                                <option value="4">Healthcare Software</option>
                                                <option value="5">Billing Software</option>
                                                <option value="6">E-Commerce Software</option>
                                                <option value="7">CRM Software</option>
                                                <option value="8">Helpdesk Software</option>
                                                <option value="9">LMS Software</option>
                                            </select>
                                        </div>

                                        <textarea class="form-control w-100" placeholder="Enquiry Message" name=""
                                            id="exampleFormControlTextarea1" cols="54" rows="5"></textarea>

                                        <div class="Button-sec">
                                            <button type="submit" class="buttons mt-1">Send Message</button>
                                        </div>
                                    </form>
                                    <p v-if="successMessage" style="text-align: center;color: green;">{{ successMessage
                                    }}</p>
                                    <p v-if="errorMessage" style="text-align: center;color: red;">{{ errorMessage }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#864391'" :width="100" :height="100"></Loading>
</template>

<script>


export default {
    name: 'ContactUs',
    components: {
    },
    data() {
        return {
            Name: '',
            Email: '',
            Phone: '',
            How_found: '',
            successMessage: '',
            errorMessage: '',
            isLoading: false,
            nameError: '',
            emailError: '',
            phoneError: ''
        };
    },

};
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

.card {
    box-shadow: 2px 2px 10px rgba(128, 128, 128, 0.3);
    border: none;
}

.success-message {
    color: green;
    font-weight: bold;
}

.error-message {
    color: red;
    font-weight: bold;
}

.error {
    color: red;
}

.Button-sec {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact_us_page {
    padding-top: 80px;
}

.cotact_details h2 {
    color: #432865;
    font-variant-numeric: lining-nums proportional-nums;
    /* font-family: Euclid Circular A; */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 63.984px;
    /* 199.95% */
}

.cotact_details p {
    color: #9889AA;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 100;
    line-height: 164%;
    /* 26.24px */
}

.contact_information {
    border-radius: 3px;
    padding: 110px 30px;
    background: var(--main, linear-gradient(105deg, #453D89 4.3%, #C8499A 98.36%));
}

.contact_information h2 {
    color: #f6eeff;
    margin-left: 39px;
    /* font-family: Euclid Circular A; */
    font-size: 24px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    text-transform: capitalize;
}

.contact_address_information {
    padding: 16px 75px;
}

.contact_address_information p {
    color: #f6eeff;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

address {
    color: #FFF;
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

.user_form h2 {
    color: #432865;
    /* font-family: Euclid Circular A; */
    font-size: 30px;
    font-style: normal;
    /* font-weight: 200; */
    line-height: normal;
}

.user_form p {
    color: #7855A5;
    /* font-family: Euclid Circular A; */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 150% */
    letter-spacing: 0.2px;
}

.user_form {
    padding: 25px 90px;
}

input[type=text] {
    display: flex;
    width: 100%;
    height: 40px;
    padding: 12px 20px;
    align-items: center;
    /* gap: 10px; */
    margin-bottom: 2%;
    border: 1px solid var(--Gray-5, #E0E0E0);
}

::placeholder {
    color: var(--Gray-3, #828282);
    /* font-family: Euclid Circular A; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 150% */
    letter-spacing: 0.16px;
}

.buttons {
    width: 130px;
    font-size: 14px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 10px; */
    border: none;
    border-radius: 8px;
    background: var(--main, linear-gradient(105deg, #453D89 4.3%, #C8499A 98.36%));
    color: white;
}

/* .buttons:hover {
    background: var(--main, linear-gradient(105deg, #453D89 4.3%, #C8499A 98.36%));
    cursor: pointer;
    color: white;
} */
.details_left_side {
    text-align: left;
}

.details_right_side {
    text-align: left;
}

@media screen and (min-width: 760px) and (max-width: 912px) {
    .contact_address_information {
        padding: 0px 36px;
    }

    .user_form {
        padding: 5px 30px;
    }

    .contact_details {
        padding-top: 60px;
    }
}

@media screen and (max-width: 600px) {
    .contact_us_page {
        padding-top: 3%;
    }

    .details_left_side {
        text-align: left;
        width: 10%;
        float: left;
    }

    .cotact_details h2 {
        color: #442060;
        font-family: Euclid Circular A;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 129.3%;
        /* 31.032px */
    }

    .cotact_details p {
        color: #7855A5;
        font-family: Euclid Circular A;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 170%;
        /* 23.8px */
        /* text-transform: capitalize; */
    }

    .user_form h2 {
        color: #432865;
        font-family: Euclid Circular A;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .user_form p {
        color: #7855A5;
        font-family: Euclid Circular A;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 20.5px;
        /* 146.429% */
    }

    .contact_inform {
        padding-right: 0px;
        padding-left: 0px;
    }

    .details_right_side {
        text-align: left;
        width: 73%;
    }
}

.details_designs_dir {
    padding-top: 12px;
}

.icons {
    color: white;
    padding-left: 8%;
    margin-top: 12px;
}

@media screen and (max-width: 576px) {
    .contactdetails_design {
        padding: 0rem;
        margin: 0rem;
        display: flex;
        flex-direction: column-reverse;
    }
}

@media screen and (max-width: 912px) {
    .contact_information h2 {
        margin-left: 24px;
    }

    .contact_information {
        padding: 52px 12px;
    }

    .contact_us_page {
        padding-top: 3%;
    }

    .buttons {
        width: 100px;
        font-size: 12px;
        height: 35px;
        /* padding: 0px 0px; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* gap: 10px; */
        border: none;
        border-radius: 8px;
        background: #864391;
        color: white;
    }
}

@media screen and (max-width: 600px) {
    .contact_address_information p {
        margin-left: 12px;
    }

    .contact_address_information address {
        margin-left: 12px;
    }

    .ss {
        padding-right: 0px;
        padding-left: 0px;
    }

    .contact_us_page {
        padding-top: 3%;
    }

}

@media screen and (max-width: 430px) {
    .contact_address_information address {
        margin-left: 0px;
    }

    .contact_information {
        padding: 32px 12px;
    }

    .user_form {
        padding: 18px 12px;
    }

    .contact_address_information p {
        font-size: 12px;
    }

    address {
        font-size: 12px;
    }

    .contact_address_information {
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 28px;
        padding-right: 0px;
    }

    .contact_us_page {
        padding-top: 19%;
    }
}

@media screen and (max-width: 358px) {
    .contact_address_information p {
        font-size: 12px;
    }

    address {
        font-size: 12px;
    }

    .contact_address_information {
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 0px;
        padding-right: 0px;
    }
}

@media screen and (max-width: 280px) {
    .buttons {
        width: 155px;
        margin-left: 0px;
    }

    address {
        font-size: 12px;
    }

    .contact_address_information p {
        font-size: 12px;
    }

    .contact_address_information {
        padding-top: 52px;
        padding-bottom: 52px;
        padding-left: 0px;
        padding-right: 0px;
    }

    .col-sm-6 {
        padding-left: 0px;
        padding-right: 0px;
    }
}
</style>