import React from "react";

const CtaArea = () => {
  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="text-center">
                <h2 className="text-primary mb-4">
                  Browse Our
                  <span className="text-warning fw-bold"> 5,000+</span> Latest
                  Jobs
                </h2>
                <p className="text-muted">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
                <div className="mt-4 pt-2">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-primary btn-hover"
                  >
                    Started Now
                    <i className="uil uil-rocket align-middle ms-1" />
                  </a>
                </div>
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

export default CtaArea;
