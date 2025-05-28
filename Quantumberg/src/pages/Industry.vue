<template>
    <div class="container-fluid pt-1">
        <div class="container">
            <div class="digitalmarketing_service">
                <p><small style="color: #B34797;font-family:'Euclid Circular A Bold', sans-serif !important;">We make
                        technology work for you!</small></p>
                <h1 style="font-size:35px;">Industries We Serve</h1>
                <p>At Quantumberg Technologies, we serve diverse industries with tailored solutions. We optimize
                    Manufacturing and Trading & Distribution for efficiency, enhance Retail and E-Commerce for growth,
                    and streamline Engineering & Construction projects. We empower Education, Professional Services,
                    Financial Services, Healthcare, and Non-Profits with technology-driven solutions for success. </p>
            </div>
            <div class="row digitalmarketingdetails_design">
                <div class="col-sm-6 pt-3">
                    <div class="digitalmarketing_service_details1">
                        <router-link to="/Manufacturing">
                            <h2>Manufacturing</h2>
                        </router-link>
                        <p>We help manufacturing businesses streamline production workflows, enhance operational
                            efficiency, and optimize supply chain management with advanced solutions. From automation to
                            real-time monitoring, we ensure increased productivity, reduced costs, and improved quality
                            control.</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="/Industry Service/Manifacturing.png" class="img_logos1">
                </div>
            </div>
            <div class="row box digitalmarketingdetails_design1">
                <div class="col-sm-6 pt-2">
                    <img src="/Industry Service/Trading & Distribution.jpg" class="img_logos">
                </div>
                <div class="col-sm-6 pt-3">
                    <div class="digitalmarketing_service_details image_first_row">
                        <h2>Trading & Distribution</h2>
                        <p>Our solutions enable businesses to enhance logistics, manage inventory efficiently, and
                            expand market reach. By optimizing supply chains and warehouse operations, we help trading
                            and distribution companies reduce delays, improve order accuracy, and maintain seamless
                            business operations. </p>
                    </div>
                </div>
            </div>
            <div class="row digitalmarketingdetails_design pt-2">
                <div class="col-sm-6">
                    <div class="digitalmarketing_service_details1 pt-3">
                        <h2>Retail</h2>
                        <p>We empower retailers with smart solutions that enhance customer engagement, optimize sales
                            strategies, and improve shopping experiences. From omnichannel retail strategies to
                            personalized marketing, we help businesses stay ahead of evolving consumer expectations.
                        </p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="/Industry Service/Retail.jpg" class="img_logos1 ecommerce">
                </div>
            </div>
            <div class="row digitalmarketingdetails_design1">
                <div class="col-sm-6">
                    <img src="/Industry Service/Construction.jpg" class="img_logos">
                </div>
                <div class="col-sm-6">
                    <div class="digitalmarketing_service_details pt-3 image_first_row">
                        <h2>Engineering & Construction</h2>
                        <p>We support engineering and construction firms in managing complex projects, improving
                            workforce productivity, and ensuring on-time project execution. Our solutions help in
                            resource planning, cost estimation, and real-time progress tracking for increased
                            efficiency. </p>
                    </div>
                </div>
            </div>
            <div class="row digitalmarketingdetails_design">
                <div class="col-sm-6 pt-3">
                    <div class="digitalmarketing_service_details1">
                        <h2>E-Commerce</h2>
                        <p>Our expertise in e-commerce helps businesses scale their online presence, enhance user
                            experience, and maximize conversions. With strategies for digital marketing, seamless
                            payment processing, and customer retention, we drive sustained online success. </p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="/Industry Service/E-Commerce.jpg" class="img_logos1">
                </div>
            </div>
            <div class="row box digitalmarketingdetails_design1">
                <div class="col-sm-6 pt-2">
                    <img src="/Industry Service/Education.png" class="img_logos">
                </div>
                <div class="col-sm-6 pt-3">
                    <div class="digitalmarketing_service_details image_first_row">
                        <h2>Education</h2>
                        <p>We provide technology-driven solutions for educational institutions, improving student
                            engagement, administration, and learning management systems. From virtual classrooms to
                            data-driven insights, we help institutions enhance their teaching methodologies.</p>
                    </div>
                </div>
            </div>
            <div class="row digitalmarketingdetails_design pt-2">
                <div class="col-sm-6">
                    <div class="digitalmarketing_service_details1 pt-3">
                        <h2>Professional Services</h2>
                        <p>We help professional service providers optimize workflows, strengthen client relationships,
                            and improve service delivery. Our solutions streamline project management, automate routine
                            tasks, and enhance collaboration for increased efficiency.</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="/Industry Service/Professional Services.jpg" class="img_logos1">
                </div>
            </div>
            <div class="row digitalmarketingdetails_design1">
                <div class="col-sm-6">
                    <img src="/Industry Service/Financial.jpg" class="img_logos">
                </div>
                <div class="col-sm-6">
                    <div class="digitalmarketing_service_details pt-3 image_first_row">
                        <h2>Financial Services</h2>
                        <p>We assist financial institutions in ensuring secure transactions, streamlining processes, and
                            improving financial management. Our solutions focus on risk management, compliance, and data
                            security to enhance operational effectiveness.</p>
                    </div>
                </div>
            </div>
            <div class="row digitalmarketingdetails_design pt-2">
                <div class="col-sm-6">
                    <div class="digitalmarketing_service_details1 pt-3">
                        <h2>Healthcare</h2>
                        <p>Our solutions enhance patient care, optimize hospital management, and improve overall
                            operational efficiency. From telemedicine to electronic health records (EHR), we empower
                            healthcare providers with digital transformation.</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <img src="/Industry Service/Healthcare 2.png" class="img_logos1">
                </div>
            </div>
            <div class="row digitalmarketingdetails_design1">
                <div class="col-sm-6">
                    <img src="/Industry Service/Non-Profit.jpg" class="img_logos">
                </div>
                <div class="col-sm-6">
                    <div class="digitalmarketing_service_details pt-3 image_first_row">
                        <h2>Non-Profit</h2>
                        <p>We support non-profits in strengthening outreach, streamlining donation processes, and
                            maximizing social impact. With digital fundraising strategies, volunteer management, and
                            engagement tools, we help organizations make a greater difference.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "IndustryComponent",
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

p,
a {
    font-family: 'Euclid Circular A Regular', sans-serif !important;
}

small {
    font-family: 'Euclid Circular A Bold', sans-serif !important;
}
</style>
