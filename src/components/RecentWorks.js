import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecentWork.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const RecentWorks = () => {
  const [works, setWorks] = useState([]);
  const [applies, setApplies] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/works`)
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/applies-work`)
      .then((res) => res.json())
      .then((data) => setApplies(data));
  }, []);

  return (
    <>
      <div className="homePage-Recent-Work">
        <div className="container mx-auto">
          {works
            .map(
              (work) =>
                work.clientSentSelectionRequest === "No" &&
                work.workStatus === "Open" && (
                  <div className="recent-work mb-5">
                    <div className="flex items-center">
                      <img
                        className="mr-2"
                        src={work.clientProfileImg}
                        alt=""
                      />
                      <Link to={`/client/${work.clientId}`}>
                        {work.clientName}
                      </Link>
                    </div>
                    <div className="work-name">
                      <h2>Work Name</h2>
                      <Link to={`/work/${work._id}`}>
                        <p>{work.workTitle}</p>
                      </Link>
                    </div>
                    <div>
                      <h2>Budget</h2>
                      {work.workBudget} Tk
                    </div>
                    <div>
                      <h2>Total Applies</h2>
                      {
                        applies.filter((apply) => apply.workId === work._id)
                          .length
                      }
                    </div>
                    <div className="button-Link">
                      {applies.filter(
                        (apply) =>
                          apply.workerEmail === user?.email &&
                          apply.workId === work._id
                      ).length === 1 && (
                        <Link className="btn btn-lg btn-error apply-btn">
                          <p>You Applied</p>
                        </Link>
                      )}
                      {applies.filter(
                        (apply) =>
                          apply.workerEmail === user?.email &&
                          apply.workId === work._id
                      ).length === 0 && (
                        <Link
                          className="btn btn-lg btn-error apply-btn"
                          to={`/work/${work._id}`}
                        >
                          <p>Apply Now</p>
                        </Link>
                      )}
                    </div>
                  </div>
                )
            )
            .reverse()}
        </div>
      </div>
      <>
        {/* START JOB-LIST */}
        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title">New &amp; Random Jobs</h4>
                  <p className="text-muted mb-1">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ul
                  className="job-list-menu nav nav-pills nav-justified flex-column flex-sm-row mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="recent-jobs-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#recent-jobs"
                      type="button"
                      role="tab"
                      aria-controls="recent-jobs"
                      aria-selected="true"
                    >
                      Recent Jobs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="featured-jobs-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#featured-jobs"
                      type="button"
                      role="tab"
                      aria-controls="featured-jobs"
                      aria-selected="false"
                    >
                      Featured Jobs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="freelancer-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#freelancer"
                      type="button"
                      role="tab"
                      aria-controls="freelancer"
                      aria-selected="false"
                    >
                      Freelancer
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="part-time-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#part-time"
                      type="button"
                      role="tab"
                      aria-controls="part-time"
                      aria-selected="false"
                    >
                      Part Time
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="full-time-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#full-time"
                      type="button"
                      role="tab"
                      aria-controls="full-time"
                      aria-selected="false"
                    >
                      Full Time
                    </button>
                  </li>
                </ul>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="recent-jobs"
                    role="tabpanel"
                    aria-labelledby="recent-jobs-tab"
                  >
                    {works
                      .map(
                        (work) =>
                          work.clientSentSelectionRequest === "No" &&
                          work.workStatus === "Open" && (
                            <div className="job-box card mt-4">
                              <div className="bookmark-label text-center">
                                <a
                                  href="javascript:void(0)"
                                  className="text-white align-middle"
                                >
                                  <i className="mdi mdi-star" />
                                </a>
                              </div>
                              <div className="p-4">
                                <div className="row align-items-center">
                                  <div className="col-md-2">
                                    <div className="text-center mb-4 mb-md-0">
                                      <Link to={`/client/${work.clientId}`}>
                                        <img
                                          src={work.clientProfileImg}
                                          style={{
                                            width: "55px",
                                            height: "55px",
                                          }}
                                          alt=""
                                          className="img-fluid rounded-3"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                  <div className="col-md-3">
                                    <div className="mb-2 mb-md-0">
                                      <h5 className="fs-18 mb-1">
                                        <Link
                                          to={`/work/${work._id}`}
                                          className="text-dark"
                                        >
                                          {work.workTitle}
                                        </Link>
                                      </h5>
                                      <p className="text-muted fs-14 mb-0">
                                        {work.clientName}
                                      </p>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                  <div className="col-md-3">
                                    <div className="d-flex mb-2">
                                      <div className="flex-shrink-0">
                                        <i className="mdi mdi-lock-open-check text-primary me-1" />
                                        <span> Work Status</span>
                                        <p className="text-muted mb-0">
                                          <span class="badge bg-success-subtle text-success fs-13 mt-1">
                                            {work.workStatus}
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                  <div className="col-md-2">
                                    <div>
                                      <p className="text-muted mb-2">
                                        <span className="text-primary">
                                          Budget- ৳
                                        </span>
                                        {work.workBudget} Tk
                                      </p>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                  <div className="col-md-2">
                                    <div>
                                      <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                        Full Time
                                      </span>
                                      <span className="badge bg-info-subtle text-info fs-13 mt-1">
                                        Private
                                      </span>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                </div>
                                {/*end row*/}
                              </div>
                              <div className="p-3 bg-light">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div>
                                      <p className="text-muted mb-0">
                                        <span className="text-dark">
                                          Experience :
                                        </span>{" "}
                                        1 - 2 years
                                      </p>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                  <div className="col-lg-6 col-md-5">
                                    <div>
                                      <p className="text-muted mb-0">
                                        <span className="text-dark">
                                          Total Applies:{" "}
                                        </span>
                                        {
                                          applies.filter(
                                            (apply) => apply.workId === work._id
                                          ).length
                                        }
                                      </p>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="text-start text-md-end">
                                      {applies.filter(
                                        (apply) =>
                                          apply.workerEmail === user?.email &&
                                          apply.workId === work._id
                                      ).length === 1 && (
                                        <Link className="btn btn-lg btn-error apply-btn">
                                          <p>You Applied</p>
                                        </Link>
                                      )}
                                      {applies.filter(
                                        (apply) =>
                                          apply.workerEmail === user?.email &&
                                          apply.workId === work._id
                                      ).length === 0 && (
                                        <Link
                                          className="btn btn-lg btn-error apply-btn"
                                          to={`/work/${work._id}`}
                                        >
                                          <p className="text-dark">
                                            Apply Now{" "}
                                            <i className="mdi mdi-chevron-double-right" />
                                          </p>
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                  {/*end col*/}
                                </div>
                                {/*end row*/}
                              </div>
                            </div>
                          )
                      )
                      .reverse()}
                  </div>
                  {/*end recent-jobs-tab*/}
                  <div
                    className="tab-pane fade"
                    id="featured-jobs"
                    role="tabpanel"
                    aria-labelledby="featured-jobs-tab"
                  >
                    <div className="job-box bookmark-post card mt-4">
                      <div className="bookmark-label text-center">
                        <a href="javascript:void(0)" className="text-white">
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-01.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Web Developer
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Web Technology pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Oakridge Lane Richardson
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1000-1200/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                Full Time
                              </span>
                              <span className="badge bg-info-subtle text-info fs-13 mt">
                                Private
                              </span>
                              <span className="badge bg-warning-subtle text-warning fs-13 mt-1">
                                Urgent
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6 col-md-5">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Notes :</span>
                                languages only differ in their grammar.
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-02.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Business Associate
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Pixel Technology pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Dodge City, Louisiana
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                800-1800/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-danger-subtle text-danger fs-13 mt-1">
                                Part Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                0 - 1 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6 col-md-5">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Notes :</span>
                                languages only differ in their grammar.
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box bookmark-post card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-03.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Digital Marketing Manager
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Jobcy Technology Pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Phoenix, Arizona
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1500-2400/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-primary-subtle text-primary fs-13 mt-1">
                                Freelancer
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row justify-content-between">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                4+ years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-lg-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-04.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Product Director
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Creative Agency
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Escondido, California
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1500-2400/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                Full Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row justify-content-between">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                2 - 3 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="text-center mt-4 pt-2">
                      <a href="job-list.html" className="btn btn-primary">
                        View More <i className="uil uil-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/*end featured-jobs-tab*/}
                  <div
                    className="tab-pane fade"
                    id="freelancer"
                    role="tabpanel"
                    aria-labelledby="freelancer-tab"
                  >
                    <div className="job-box card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-01.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Web Developer
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Web Technology pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Oakridge Lane Richardson
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1000-1200/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-primary-subtle text-primary fs-13 mt-1">
                                Freelancer
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6 col-md-5">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Notes :</span>
                                languages only differ in their grammar.
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-02.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Business Associate
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Pixel Technology pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Dodge City, Louisiana
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                800-1800/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-primary-subtle text-primary fs-13 mt-1">
                                Freelancer
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                0 - 1 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6 col-md-5">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Notes :</span>
                                languages only differ in their grammar.
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box bookmark-post card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-03.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Digital Marketing Manager
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Jobcy Technology Pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Phoenix, Arizona
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1500-2400/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-primary-subtle text-primary fs-13 mt-1">
                                Freelancer
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row justify-content-between">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                4+ years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box bookmark-post card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-lg-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-04.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Product Director
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Creative Agency
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Escondido, California
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1500-2400/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-primary-subtle text-primary fs-13 mt-1">
                                Freelancer
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row justify-content-between">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                2 - 3 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="text-center mt-4 pt-2">
                      <a href="job-list.html" className="btn btn-primary">
                        View More <i className="uil uil-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/*end freelancer-tab*/}
                  <div
                    className="tab-pane fade"
                    id="part-time"
                    role="tabpanel"
                    aria-labelledby="part-time-tab"
                  >
                    <div className="job-box bookmark-post card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-01.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Web Developer
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Web Technology pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Oakridge Lane Richardson
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1000-1200/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-danger-subtle text-danger fs-13 mt-1">
                                Part Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6 col-md-5">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Notes :</span>
                                languages only differ in their grammar.
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-02.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Business Associate
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Pixel Technology pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Dodge City, Louisiana
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                800-1800/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-danger-subtle text-danger fs-13 mt-1">
                                Part Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                0 - 1 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6 col-md-5">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Notes :</span>
                                languages only differ in their grammar.
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box bookmark-post card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-03.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Digital Marketing Manager
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Jobcy Technology Pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Phoenix, Arizona
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1500-2400/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-danger-subtle text-danger fs-13 mt-1">
                                Part Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row justify-content-between">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                4+ years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-lg-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-04.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Product Director
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Creative Agency
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Escondido, California
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1500-2400/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-danger-subtle text-danger fs-13 mt-1">
                                Part Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row justify-content-between">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                2 - 3 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="text-center mt-4 pt-2">
                      <a href="job-list.html" className="btn btn-primary">
                        View More <i className="uil uil-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/*end part-time-tab*/}
                  <div
                    className="tab-pane fade"
                    id="full-time"
                    role="tabpanel"
                    aria-labelledby="full-time-tab"
                  >
                    <div className="job-box bookmark-post card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-01.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Web Developer
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Web Technology pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Oakridge Lane Richardson
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1000-1200/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                Full Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                1 - 2 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6 col-md-5">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Notes :</span>
                                languages only differ in their grammar.
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box bookmark-post card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-02.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Business Associate
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Pixel Technology pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Dodge City, Louisiana
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                800-1800/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                Full Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                0 - 1 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-6 col-md-5">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Notes :</span>
                                languages only differ in their grammar.
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-md-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-03.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Digital Marketing Manager
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Jobcy Technology Pvt.Ltd
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Phoenix, Arizona
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1500-2400/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                Full Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row justify-content-between">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                4+ years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="job-box card mt-4">
                      <div className="bookmark-label text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-white align-middle"
                        >
                          <i className="mdi mdi-star" />
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="text-center mb-4 mb-lg-0">
                              <a href="company-details.html">
                                <img
                                  src="assets/images/featured-job/img-04.png"
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="mb-2 mb-md-0">
                              <h5 className="fs-18 mb-1">
                                <a
                                  href="job-details.html"
                                  className="text-dark"
                                >
                                  Product Director
                                </a>
                              </h5>
                              <p className="text-muted fs-14 mb-0">
                                Creative Agency
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-3">
                            <div className="d-flex mb-2">
                              <div className="flex-shrink-0">
                                <i className="mdi mdi-map-marker text-primary me-1" />
                              </div>
                              <p className="text-muted mb-0">
                                Escondido, California
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <p className="text-muted mb-2">
                                <span className="text-primary">$</span>
                                1500-2400/m
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-md-2">
                            <div>
                              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                Full Time
                              </span>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      <div className="p-3 bg-light">
                        <div className="row justify-content-between">
                          <div className="col-md-4">
                            <div>
                              <p className="text-muted mb-0">
                                <span className="text-dark">Experience :</span>{" "}
                                2 - 3 years
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-lg-2 col-md-3">
                            <div className="text-start text-md-end">
                              <a
                                href="#applyNow"
                                data-bs-toggle="modal"
                                className="primary-link"
                              >
                                Apply Now
                                <i className="mdi mdi-chevron-double-right" />
                              </a>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                    {/*end job-box*/}
                    <div className="text-center mt-4 pt-2">
                      <a href="job-list.html" className="btn btn-primary">
                        View More <i className="uil uil-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/*end full-time-tab*/}
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/* END JOB-LIST */}
      </>
    </>
  );
};

export default RecentWorks;
