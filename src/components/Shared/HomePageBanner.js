import React from "react";
import "./HomePageBanner.css";
import bannerimg from "./img/banner-img.png";

const HomePageBanner = () => {
  const containerStyle = {
    backgroundColor: "rgba(129, 93, 242, 0.2)",
  };
  return (
    <>
      {/* <div className='bg-red-100'>          
            <div className='bannerPart container mx-auto items-center min-h-50'>
            <div className='w-1/2'> 
                <h3>GET STARTED</h3>
                <h1>Hire Experts & Get Your Any Job Done</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet eius inventore doloremque natus alias deleniti quam a laudantium voluptatibus quod!</p>
                <div className='buttons'>
                <button className="btn btn-lg btn-error my-2"><p>Post a Work Now!</p></button>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={bannerimg} alt="" />
            </div>
        </div>
        </div> */}

      <div className="main-content">
        <div className="page-content">
          <section className="bg-home2" id="home" style={containerStyle}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="mb-4 pb-3 me-lg-5">
                    <h6 className="sub-title">We have 150,000+ live jobs</h6>
                    <h1 className="display-5 fw-semibold mb-3">
                      Find your dream jobs with
                      <span className="text-primary fw-bold">DorkariBhai</span>
                    </h1>
                    <p className="lead text-muted mb-0">
                      Find jobs, create trackable resumes and enrich your
                      applications.Carefully crafted after analyzing the needs
                      of different industries.
                    </p>
                  </div>
                  <form action="#">
                    <div class="registration-form">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <div class="filter-search-form filter-border mt-3 mt-md-0">
                            <i class="uil uil-briefcase-alt"></i>
                            <input
                              type="search"
                              id="job-title"
                              class="form-control filter-input-box"
                              placeholder="Job, Company name..."
                            />
                          </div>
                        </div>

                       

                        <div class="col-md-4">
                          <div class="mt-3 mt-md-0 h-100">
                            <button
                              class="btn btn-primary submit-btn w-100 h-100"
                              type="submit"
                            >
                              <i class="uil uil-search me-1"></i> Find Job
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/*end col*/}
                <div className="col-lg-5">
                  <div className="mt-5 mt-md-0">
                    <img
                      src="assets/images/process-02.png"
                      alt=""
                      className="home-img"
                    />
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/* End Home */}
          {/* START SHAPE */}
          <div className="position-relative">
            <div className="shape">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={1440}
                height={150}
                preserveAspectRatio="none"
                viewBox="0 0 1440 220"
              >
                <g mask='url("#SvgjsMask1004")' fill="none">
                  <path
                    d="M 0,213 C 288,186.4 1152,106.6 1440,80L1440 250L0 250z"
                    fill="rgba(255, 255, 255, 1)"
                  />
                </g>
                <defs>
                  <mask id="SvgjsMask1004">
                    <rect width={1440} height={250} fill="#ffffff" />
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
          {/* END SHAPE */}
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;
