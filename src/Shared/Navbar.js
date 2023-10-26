import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/messages`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      {/* <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">DorkariBhai</a>
        </div>
        <div className="flex-none gap-2">
          <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-orange-100 rounded-box w-52">
            <li>
              <Link to="/post-work">Post Work</Link>
            </li>
          </ul>
          <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-orange-100 rounded-box w-52">
            <li>
              <Link to="/dashboard">
                {messages.filter(
                  (message) =>
                    message.workerEmail === user?.email &&
                    message.whoSentMessage === "Client" &&
                    message.messageFromClientToWorkerStatus === "unRead"
                ).length > 0 && <p className="text-red-600 notify">.</p>}
                {messages.filter(
                  (message) =>
                    message.clientEmail === user?.email &&
                    message.whoSentMessage === "Worker" &&
                    message.messageWorkerToClientStatus === "unRead"
                ).length > 0 && <p className="text-red-600 notify">.</p>}
                Dashboard
              </Link>
            </li>
          </ul>
          <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-orange-100 rounded-box w-52">
            <li>
              <Link to="/dashboard">
                {messages.filter(
                  (message) =>
                    message.workerEmail === user?.email &&
                    message.whoSentMessage === "Client" &&
                    message.messageFromClientToWorkerStatus === "unRead"
                ).length > 0 && <p className="text-red-600 notify">.</p>}
                {messages.filter(
                  (message) =>
                    message.clientEmail === user?.email &&
                    message.whoSentMessage === "Worker" &&
                    message.messageWorkerToClientStatus === "unRead"
                ).length > 0 && <p className="text-red-600 notify">.</p>}
                Dashboard
              </Link>
            </li>
          </ul>
          <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52">
            <a className="indicator tab tab-lifted tab-active">
              Notifications
              <span className="indicator-item badge">8</span>
            </a>
          </ul>

          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=80" />
              </div>
            </label>
            <ul
              tabindex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                {user ? (
                  <button className="btn btn-ghost" onClick={logout}>
                    Signout
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <>
        {/* START TOP-BAR */}
        <div className="top-bar">
          <div className="container-fluid custom-container">
            <div className="row g-0 align-items-center">
              <div className="col-md-7">
                <ul className="list-inline mb-0 text-center text-md-start">
                  <li className="list-inline-item">
                    <p className="fs-13 mb-0">
                      <i className="mdi mdi-map-marker" /> Your Location:
                      <a href="javascript:void(0)" className="text-dark">
                        New Caledonia
                      </a>
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <ul className="topbar-social-menu list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-facebook-messenger-alt" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-envelope" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="social-link">
                          <i className="uil uil-twitter-alt" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*end col*/}
              <div className="col-md-5">
                <ul className="list-inline mb-0 text-center text-md-end">
                  <li className="list-inline-item py-2 me-2 align-middle">
                    <Link to="/login" className="text-dark fw-medium fs-13">
                      <i className="uil uil-lock" /> Login Now
                    </Link>
                  </li>
                </ul>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </div>
        {/* END TOP-BAR */}
        {/*Navbar Start*/}
        <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
          <div className="container-fluid custom-container">
            <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
              <img
                src="assets/images/logo-dark.png"
                height={22}
                alt=""
                className="logo-dark"
              />
              <img
                src="assets/images/logo-light.png"
                height={22}
                alt=""
                className="logo-light"
              />
            </Link>
            <div>
              <button
                className="navbar-toggler me-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-label="Toggle navigation"
              >
                <i className="mdi mdi-menu" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto navbar-center">
                <li className="nav-item dropdown dropdown-hover">
                  <Link
                    className="nav-link"
                    to="/"
                    id="homedrop"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/post-work" className="nav-link">
                  Post Work
                  </Link>
                </li>
              </ul>
              {/*end navbar-nav*/}
            </div>
            {/*end navabar-collapse*/}
            <ul className="header-menu list-inline d-flex align-items-center mb-0">
              <li className="list-inline-item dropdown me-4">
                <a
                  href="javascript:void(0)"
                  className="header-item noti-icon position-relative"
                  id="notification"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-bell fs-22" />
                  <div className="count position-absolute">3</div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-sm dropdown-menu-end p-0"
                  aria-labelledby="notification"
                >
                  <div className="notification-header border-bottom bg-light">
                    <h6 className="mb-1">Notification</h6>
                    <p className="text-muted fs-13 mb-0">
                      You have 4 unread Notification
                    </p>
                  </div>
                  <div className="notification-wrapper dropdown-scroll">
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block active"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-xs bg-primary text-white rounded-circle text-center">
                            <i className="uil uil-user-check" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-14">
                            22 verified registrations
                          </h6>
                          <p className="mb-0 fs-12 text-muted">
                            <i className="mdi mdi-clock-outline" />
                            <span>3 min ago</span>
                          </p>
                        </div>
                      </div>{" "}
                    </a>
                    {/*end notification-item*/}
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <img
                            src="assets/images/user/img-02.jpg"
                            className="rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-14">James Lemire</h6>
                          <p className="text-muted fs-12 mb-0">
                            <i className="mdi mdi-clock-outline" />
                            <span>15 min ago</span>
                          </p>
                        </div>
                      </div>{" "}
                    </a>
                    {/*end notification-item*/}
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <img
                            src="assets/images/featured-job/img-04.png"
                            className="rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-14">
                            Applications has been approved
                          </h6>
                          <p className="text-muted mb-0 fs-12">
                            <i className="mdi mdi-clock-outline" />
                            <span>45 min ago</span>
                          </p>
                        </div>
                      </div>{" "}
                    </a>
                    {/*end notification-item*/}
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <img
                            src="assets/images/user/img-01.jpg"
                            className="rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-14">Kevin Stewart</h6>
                          <p className="text-muted mb-0 fs-12">
                            <i className="mdi mdi-clock-outline" />
                            <span>1 hour ago</span>
                          </p>
                        </div>
                      </div>{" "}
                    </a>
                    {/*end notification-item*/}
                    <a
                      href="javascript:void(0)"
                      className="text-dark notification-item d-block"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <img
                            src="assets/images/featured-job/img-01.png"
                            className="rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mt-0 mb-1 fs-15">Creative Agency</h6>
                          <p className="text-muted mb-0 fs-12">
                            <i className="mdi mdi-clock-outline" />
                            <span>2 hour ago</span>
                          </p>
                        </div>
                      </div>{" "}
                    </a>
                    {/*end notification-item*/}
                  </div>
                  {/*end notification-wrapper*/}
                  <div className="notification-footer border-top text-center">
                    <a className="primary-link fs-13" href="javascript:void(0)">
                      <i className="mdi mdi-arrow-right-circle me-1" />
                      <span>View More..</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-inline-item dropdown">
                <a
                  href="javascript:void(0)"
                  className="header-item"
                  id="userdropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/profile.jpg"
                    alt="mdo"
                    width={35}
                    height={35}
                    className="rounded-circle me-1"
                  />
                  <span className="d-none d-md-inline-block fw-medium">
                    Hi, Jansh
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userdropdown"
                >
                  <li>
                    <a className="dropdown-item" href="manage-jobs.html">
                      Manage Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="bookmark-jobs.html">
                      Bookmarks Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="profile.html">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="sign-out.html">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/*end header-menu*/}
          </div>
          {/*end container*/}
        </nav>
    
      </>
    </div>
  );
};

export default Navbar;
