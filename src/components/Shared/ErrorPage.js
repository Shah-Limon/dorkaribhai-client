import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <div>
  <div className="main-content">
    <div className="page-content">
      {/* START ERROR */}
      <section className="bg-error bg-auth text-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/images/404.png" alt="" className="img-fluid" />
                <div className="mt-5">
                  {/* <h1 class="fw-bold display-1">404</h1> */}
                  <h4 className="text-uppercase mt-3">Sorry, page not found</h4>
                  <p className="text-muted">
                    It will be as simple as Occidental in fact, it will be
                    Occidental
                  </p>
                  <div className="mt-4">
                    <Link
                      className="btn btn-primary waves-effect waves-light"
                      to="/"
                    >
                      <i className="mdi mdi-home" /> Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/* END ERROR */}
    </div>
    {/* End Page-content */}
  </div>
  {/* end main content*/}
</div>

            
        </>
    );
};

export default ErrorPage;