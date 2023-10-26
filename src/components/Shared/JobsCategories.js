import React from "react";

const JobsCategories = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h3 className="title">Browser Jobs Categories</h3>
                <p className="text-muted">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="popu-category-box rounded text-center">
                <div className="popu-category-icon icons-md">
                  <i className="uim uim-layers-alt" />
                </div>
                <div className="popu-category-content mt-4">
                  <a
                    href="job-categories.html"
                    className="text-dark stretched-link"
                  >
                    <h5 className="fs-18">IT &amp; Software</h5>
                  </a>
                  <p className="text-muted mb-0">2024 Jobs</p>
                </div>
              </div>
              {/*end popu-category-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="popu-category-box rounded text-center">
                <div className="popu-category-icon icons-md">
                  <i className="uim uim-airplay" />
                </div>
                <div className="popu-category-content mt-4">
                  <a
                    href="job-categories.html"
                    className="text-dark stretched-link"
                  >
                    <h5 className="fs-18">Technology</h5>
                  </a>
                  <p className="text-muted mb-0">1250 Jobs</p>
                </div>
              </div>
              {/*end popu-category-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="popu-category-box rounded text-center">
                <div className="popu-category-icon icons-md">
                  <i className="uim uim-bag" />
                </div>
                <div className="popu-category-content mt-4">
                  <a
                    href="job-categories.html"
                    className="text-dark stretched-link"
                  >
                    <h5 className="fs-18">Government</h5>
                  </a>
                  <p className="text-muted mb-0">802 Jobs</p>
                </div>
              </div>
              {/*end popu-category-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="popu-category-box rounded text-center">
                <div className="popu-category-icon icons-md">
                  <i className="uim uim-user-md" />
                </div>
                <div className="popu-category-content mt-4">
                  <a
                    href="job-categories.html"
                    className="text-dark stretched-link"
                  >
                    <h5 className="fs-18">Accounting / Finance</h5>
                  </a>
                  <p className="text-muted mb-0">577 Jobs</p>
                </div>
              </div>
              {/*end popu-category-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="popu-category-box rounded text-center">
                <div className="popu-category-icon icons-md">
                  <i className="uim uim-hospital" />
                </div>
                <div className="popu-category-content mt-4">
                  <a
                    href="job-categories.html"
                    className="text-dark stretched-link"
                  >
                    <h5 className="fs-18">Construction / Facilities</h5>
                  </a>
                  <p className="text-muted mb-0">285 Jobs</p>
                </div>
              </div>
              {/*end popu-category-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="popu-category-box rounded text-center">
                <div className="popu-category-icon icons-md">
                  <i className="uim uim-telegram-alt" />
                </div>
                <div className="popu-category-content mt-4">
                  <a
                    href="job-categories.html"
                    className="text-dark stretched-link"
                  >
                    <h5 className="fs-18">Tele-communications</h5>
                  </a>
                  <p className="text-muted mb-0">495 Jobs</p>
                </div>
              </div>
              {/*end popu-category-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="popu-category-box rounded text-center">
                <div className="popu-category-icon icons-md">
                  <i className="uim uim-scenery" />
                </div>
                <div className="popu-category-content mt-4">
                  <a
                    href="job-categories.html"
                    className="text-dark stretched-link"
                  >
                    <h5 className="fs-18">Design &amp; Multimedia</h5>
                  </a>
                  <p className="text-muted mb-0">1045 Jobs</p>
                </div>
              </div>
              {/*end popu-category-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="popu-category-box rounded text-center">
                <div className="popu-category-icon icons-md">
                  <i className="uim uim-android-alt" />
                </div>
                <div className="popu-category-content mt-4">
                  <a
                    href="job-categories.html"
                    className="text-dark stretched-link"
                  >
                    <h5 className="fs-18">Human Resource</h5>
                  </a>
                  <p className="text-muted mb-0">1516 Jobs</p>
                </div>
              </div>
              {/*end popu-category-box*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-5 text-center">
                <a
                  href="job-categories.html"
                  className="btn btn-primary btn-hover"
                >
                  Browse All Categories
                  <i className="uil uil-arrow-right ms-1" />
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
    </>
  );
};

export default JobsCategories;
