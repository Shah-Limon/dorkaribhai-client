import React from "react";

const Breadcrumbs = ({ pageTitle }) => {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <section
            className="page-title-box"
            style={{
              paddingTop: "172px",
              paddingBottom: "44px",
              backgroundPosition: "center",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="text-center text-white">
                    <h3 className="mb-4">{pageTitle}</h3>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
