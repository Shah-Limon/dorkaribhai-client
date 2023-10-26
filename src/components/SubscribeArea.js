import React from "react";

const SubscribeArea = () => {
  return (
    <>
      <section className="bg-subscribe">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="text-center text-lg-start">
                <h4 className="text-white">Get New Jobs Notification!</h4>
                <p className="text-white-50 mb-0">
                  Subscribe &amp; get all related jobs notification.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-4 mt-lg-0">
                <form className="subscribe-form" action="#">
                  <div className="input-group justify-content-center justify-content-lg-end">
                    <input
                      type="text"
                      className="form-control"
                      id="subscribe"
                      placeholder="Enter your email"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="subscribebtn"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                {/*end form*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="email-img d-none d-lg-block">
          <img src="assets/images/subscribe.png" alt="" className="img-fluid" />
        </div>
      </section>
    </>
  );
};

export default SubscribeArea;
