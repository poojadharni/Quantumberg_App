<template>
  <div class="container-fluid">
    <div class="container">

      <div class="career">
        <h5 style="color:#432865; font-weight: 600">Careers</h5>
        <p style="color:#7855A5">We are looking for contract employee (6-12 months time) with immediate joining for
          below opening.</p>
      </div>

      <hr style="margin-top: 20px; margin-bottom: 20px;">

      <div class="ProjectNo01">
        <div class="projectName">
          Project 01
        </div>

        <div class="d-flex justify-content-end">
          <div class="job-card">
            <div class="d-flex justify-content-between">
              <div>
                <h6>Siebel Developer</h6>
                <div class="experience mt-2">
                  5 to 6 Years Of Experience | Position 01
                </div>
              </div>
              <div class="Location">
                <div class="location">
                  <i class="bi bi-globe"></i>Bengaluru, Karnataka, India
                </div>
              </div>
            </div>
            <div class="type mt-3">
              <i class="bi bi-clock"></i> Full Time
              <router-link to="/CareerForm">
                <div class="apply">Apply Now <i class="bi bi-arrow-right"></i> </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end mt-2">
          <div class="job-card">
            <div class="d-flex justify-content-between">
              <div>
                <h6>ServiceNow Developer</h6>
                <div class="experience mt-2">
                  5 to 6 Years Of Experience | Position 02
                </div>
              </div>
              <div class="Location">
                <div class="location">
                  <i class="bi bi-globe"></i> Bengaluru, Karnataka, India
                </div>
              </div>
            </div>
            <div class="type mt-3">
              <i class="bi bi-clock"></i> Full Time
              <router-link to="/CareerForm">
                <div class="apply">Apply Now <i class="bi bi-arrow-right"></i> </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end mt-2">
          <div class="job-card">
            <div class="d-flex justify-content-between">
              <div>
                <h6>IBM IPaaS Developers with Java</h6>
                <div class="experience mt-2">
                  4 to 5 Years Of Experience | Position 02
                </div>
              </div>
              <div class="Location">
                <div class="location">
                  <i class="bi bi-globe"></i> Bengaluru, Karnataka, India
                </div>
              </div>
            </div>
            <div class="type mt-3">
              <i class="bi bi-clock"></i> Full Time
              <router-link to="/CareerForm">
                <div class="apply">Apply Now <i class="bi bi-arrow-right"></i> </div>
              </router-link>            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end mt-2">
          <div class="job-card">
            <div class="d-flex justify-content-between">
              <div>
                <h6>QA Engineers</h6>
                <div class="experience mt-2">
                  5 to 6 Years Of Experience | Position 02
                </div>
              </div>
              <div class="Location">
                <div class="location">
                  <i class="bi bi-globe"></i> Bengaluru, Karnataka, India
                </div>
              </div>
            </div>
            <div class="type mt-3">
              <i class="bi bi-clock"></i> Full Time
              <router-link to="/CareerForm">
                <div class="apply">Apply Now <i class="bi bi-arrow-right"></i> </div>
              </router-link>            </div>
          </div>
        </div>
      </div>

      <hr style="margin-top: 20px; margin-bottom: 20px;">

      <div class="ProjectNo01">
        <div class="ProjectNo02">
          <div class="projectName">
            Project 02
          </div>

          <div class="d-flex justify-content-end">
            <div class="job-card">
              <div class="d-flex justify-content-between">
                <div>
                  <h6>Java Developers</h6>
                  <div class="experience mt-2">
                    4 to 5 Years Of Experience | Position 08
                  </div>
                </div>
                <div class="Location">
                  <div class="location">
                    <i class="bi bi-globe"></i> Kuwait, Middle East
                  </div>
                </div>
              </div>
              <div class="type mt-3">
                <i class="bi bi-clock"></i> Full Time
                <router-link to="/CareerForm">
                <div class="apply">Apply Now <i class="bi bi-arrow-right"></i> </div>
              </router-link>              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end mt-2">
            <div class="job-card">
              <div class="d-flex justify-content-between">
                <div>
                  <h6>CA API gateway</h6>
                  <div class="experience mt-2">
                    3 to 5 Years Of Experience | Position 02
                  </div>
                </div>
                <div class="Location">
                  <div class="location">
                    <i class="bi bi-globe"></i> Kuwait, Middle East,
                  </div>
                </div>
              </div>
              <div class="type mt-3">
                <i class="bi bi-clock"></i> Full Time
                <router-link to="/CareerForm">
                <div class="apply">Apply Now <i class="bi bi-arrow-right"></i> </div>
              </router-link>              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="hiring-message mt-5">
        Interested candidates can contact ph: +91 97414 08044 or share resumes to harshitha.rajappa@quantumberg.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareerComponent',
  components: {
  },

};
</script>


<style scoped>
* {
  color: #6B517E;
}

h6 {
  color:#432865;
}
.career {
  padding-top: 80px !important;
}

.apply {
  float: right;
  color: #442060;
  font-weight: 500;
}

.job-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  width: 50%;
}

.job-card .location {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.job-card .location i {
  margin-right: 5px;
}

.job-card .experience,
.job-card .type {
  font-size: 14px;
  color: #757575;
}


@media only screen and (max-width: 600px) {
  .job-card {
    width: 100%;
  }
}
</style>