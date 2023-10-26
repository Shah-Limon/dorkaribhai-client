import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
    navigate("/");
  };
  return (
    <>
      {/* <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Signup</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && 'Email is Required'}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 Characters'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && 'Password is Required'}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs' type="submit" value="Signup Now" />
                    </form>
                    <p>Already Have an Account <Link className='text-primary' to="/login">Login Now</Link></p>
                    <div className="divider">Or</div>
                    <button className="btn btn-outline" onClick={() => signInWithGoogle()} >Join With Google</button>
                </div>
            </div>
        </div> */}

      <div className="main-content">
        <div className="page-content">
          {/* START SIGN-UP */}
          <section className="bg-auth">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12">
                  <div className="card auth-box">
                    <div className="row align-items-center">
                      <div className="col-lg-6 text-center">
                        <div className="card-body p-4">
                          <a href="index.html">
                            <img
                              src="assets/images/logo-light.png"
                              alt=""
                              className="logo-light"
                            />
                            <img
                              src="assets/images/logo-dark.png"
                              alt=""
                              className="logo-dark"
                            />
                          </a>
                          <div className="mt-5">
                            <img
                              src="assets/images/auth/sign-up.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="auth-content card-body p-5 text-white">
                          <div className="w-100">
                            <div className="text-center">
                              <h5>Let's Get Started</h5>
                              <p className="text-white-70">
                                Sign Up and get access to all the features of
                                DorkariBhai
                              </p>
                            </div>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="auth-form"
                            >
                              <div className="mb-3">
                                <label
                                  htmlFor="passwordInput"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  required=""
                                  id="emailInput"
                                  placeholder="Enter your email"
                                  {...register("email", {
                                    required: {
                                      value: true,
                                      message: "Email is Required",
                                    },
                                    pattern: {
                                      value: /[A-Za-z]{3}/,
                                      message: "Provide a Valid Email",
                                    },
                                  })}
                                />
                                <label class="label">
                                  {errors.email?.type === "required" &&
                                    "Email is Required"}
                                </label>
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="passwordInput"
                                  placeholder="Enter your password"
                                  {...register("password", {
                                    required: {
                                      value: true,
                                      message: "Password is Required",
                                    },
                                    minLength: {
                                      value: 6,
                                      message: "Minimum 6 Characters",
                                    },
                                  })}
                                />
                                <label className="label">
                                  {errors.password?.type === "required" &&
                                    "Password is Required"}
                                </label>
                              </div>

                              <div className="text-center">
                                <button
                                  type="submit"
                                  className="btn btn-white btn-hover w-100"
                                >
                                  Sign Up
                                </button>
                              </div>
                            </form>
                            <div className="mt-3 text-center">
                              <p className="mb-0">
                                Already a member ?{" "}
                                <Link
                                  to="/login"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  {" "}
                                  Sign In{" "}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end auth-box*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </section>
          {/* END SIGN-UP */}
        </div>
        {/* End Page-content */}
      </div>
    </>
  );
};

export default Signup;
