import React from "react";

const Blog = () => {
  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-5">
                <h3 className="title mb-3">Quick Career Tips</h3>
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
            <div className="col-lg-4 col-md-6">
              <div className="blog-box card p-2 mt-3">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    src="assets/images/blog/img-01.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-overlay" />
                  <div className="author">
                    <p className="mb-0">
                      <i className="mdi mdi-account text-light" />
                      <a href="javascript:void(0)" className="text-light user">
                        Dirio Walls
                      </a>
                    </p>
                    <p className="text-light mb-0 date">
                      <i className="mdi mdi-calendar-check" /> 01 July, 2021
                    </p>
                  </div>
                  <div className="likes">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="text-white">
                          <i className="mdi mdi-heart-outline me-1" /> 33
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="text-white">
                          <i className="mdi mdi-comment-outline me-1" />
                          08
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="blog-details.html" className="primary-link">
                    <h5 className="fs-17">How apps is the IT world ?</h5>
                  </a>
                  <p className="text-muted">
                    The final text is not yet avaibookmark-label. Dummy texts
                    have Internet tend been in use by typesetters.
                  </p>
                  <a
                    href="blog-details.html"
                    className="form-text text-primary"
                  >
                    Read more
                    <i className="mdi mdi-chevron-right align-middle" />
                  </a>
                </div>
              </div>
              {/*end blog-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6">
              <div className="blog-box card p-2 mt-3">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    src="assets/images/blog/img-02.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-overlay" />
                  <div className="author">
                    <p className="mb-0">
                      <i className="mdi mdi-account text-light" />
                      <a href="javascript:void(0)" className="text-light user">
                        Brandon Carney
                      </a>
                    </p>
                    <p className="text-light mb-0 date">
                      <i className="mdi mdi-calendar-check" /> 25 June, 2021
                    </p>
                  </div>
                  <div className="likes">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="text-white">
                          <i className="mdi mdi-heart-outline me-1" /> 44
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="text-white">
                          <i className="mdi mdi-comment-outline me-1" />
                          25
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="blog-details.html" className="primary-link">
                    <h5 className="fs-17">
                      Smartest Applications for Business ?
                    </h5>
                  </a>
                  <p className="text-muted">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance: human perception.
                  </p>
                  <a
                    href="blog-details.html"
                    className="form-text text-primary"
                  >
                    Read more
                    <i className="mdi mdi-chevron-right align-middle" />
                  </a>
                </div>
              </div>
              {/*end blog-box*/}
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6">
              <div className="blog-box card p-2 mt-3">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    src="assets/images/blog/img-03.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-overlay" />
                  <div className="author">
                    <p className="mb-0">
                      <i className="mdi mdi-account text-light" />
                      <a href="javascript:void(0)" className="text-light user">
                        William Mooneyhan
                      </a>
                    </p>
                    <p className="text-light mb-0 date">
                      <i className="mdi mdi-calendar-check" /> 16 March, 2021
                    </p>
                  </div>
                  <div className="likes">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="text-white">
                          <i className="mdi mdi-heart-outline me-1" /> 68
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="text-white">
                          <i className="mdi mdi-comment-outline me-1" />
                          20
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="blog-details.html" className="primary-link">
                    <h5 className="fs-17">
                      Design your apps in your own way ?
                    </h5>
                  </a>
                  <p className="text-muted">
                    One disadvantage of Lorum Ipsum is that in Latin certain
                    letters appear more frequently than others.
                  </p>
                  <a
                    href="blog-details.html"
                    className="form-text text-primary"
                  >
                    Read more
                    <i className="mdi mdi-chevron-right align-middle" />
                  </a>
                </div>
              </div>
              {/*end blog-box*/}
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

export default Blog;
