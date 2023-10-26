import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Breadcrumbs from "../components/Shared/Breadcrumbs";

const PostWork = () => {
  const [user] = useAuthState(auth);
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/clientprofile?clientEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const handlePostWork = (event) => {
    event.preventDefault();
    const clientEmail = event.target.clientEmail.value;
    const releasedAmount = event.target.releasedAmount.value;
    const clientSentSelectionRequest =
      event.target.clientSentSelectionRequest.value;
    const workStatus = event.target.workStatus.value;
    const clientName = event.target.clientName.value;
    const clientProfileImg = event.target.clientProfileImg.value;
    const clientId = event.target.clientId.value;
    const workTitle = event.target.workTitle.value;
    const workDetails = event.target.workDetails.value;
    const workBudget = event.target.workBudget.value;

    const postWork = {
      clientEmail,
      releasedAmount,
      clientSentSelectionRequest,
      workStatus,
      clientName,
      clientProfileImg,
      clientId,
      workTitle,
      workDetails,
      workBudget,
    };

    const url = `http://localhost:5000/postwork`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postWork),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/");
      });
  };

  return (
    <>
      <Breadcrumbs pageTitle="Post Work" />

      <div className="flex justify-center">
        {clients.length === 1 && (
          <form
            className="container mx-auto client-form"
            onSubmit={handlePostWork}
          >
            {" "}
            <br />
            <input
              hidden
              value={user.email}
              type="text"
              name="clientEmail"
              id=""
            />{" "}
            <br />
            <input
              hidden
              value="No"
              type="text"
              name="clientSentSelectionRequest"
              id=""
            />{" "}
            <br />
            <input
              hidden
              value="Open"
              type="text"
              name="workStatus"
              id=""
            />{" "}
            <br />
            <input
              hidden
              value="0"
              type="text"
              name="releasedAmount"
              id=""
            />{" "}
            <br />
            {clients.map(
              (client) =>
                client.clientEmail === user?.email && (
                  <input
                    hidden
                    value={client.clientName}
                    type="text"
                    name="clientName"
                    id=""
                  />
                )
            )}
            {clients.map(
              (client) =>
                client.clientEmail === user?.email && (
                  <input
                    hidden
                    value={client.clientProfileImg}
                    type="text"
                    name="clientProfileImg"
                    id=""
                  />
                )
            )}
            <br />
            {clients.map(
              (client) =>
                client.clientEmail === user?.email && (
                  <input
                    hidden
                    value={client._id}
                    type="text"
                    name="clientId"
                    id=""
                  />
                )
            )}{" "}
            <br />
            <input
              type="text"
              name="workTitle"
              id=""
              placeholder="Type Your Work Title"
            />{" "}
            <br />
            <textarea
              name="workDetails"
              id=""
              cols="30"
              rows="10"
              placeholder="Type Here Work Details"
            ></textarea>{" "}
            <br />
            <lebel>Tk.</lebel>
            <input
              type="number"
              name="workBudget"
              id=""
              placeholder="Enter Your Budget"
            />{" "}
            <br />
            <input className="btn" type="submit" value="Post a Work" />
          </form>
        )}

        {clients.length === 0 && (
          <div className="flex h-screen justify-center items-center">
            <div>
              <h2>Sorry! Your profile is not for Client.</h2>
              <Link className="btn" to="/update">
                Please Update Your Profile
              </Link>
            </div>
          </div>
        )}
      </div>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-5">
                <h3 className="title mb-4">
                  {clients.length === 0 && (
                    <div className="flex h-screen justify-center items-center">
                      <div>
                        <h2>Sorry! Your profile is not for Client.</h2>
                      </div>
                    </div>
                  )}
                </h3>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2"></div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="about-feature p-3 d-flex align-items-center rounded-3">
                <div className="featrue-icon flex-shrink-0">
                  <span className="uim-svg" style={{}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="1em"
                    >
                      <path
                        className="uim-tertiary"
                        d="M17.6875,21.74414a2.01908,2.01908,0,0,1-1.24121-.42676L12.416,18.19531,9.71387,21.17773a1.00011,1.00011,0,0,1-1.69825-.38281l-2.0205-6.68164-3.625-1.26074A2.042,2.042,0,0,1,2.2666,9.03516L20.18652,1.7998A2.04245,2.04245,0,0,1,22.958,4.09473l-3.2627,16.0166a2.05413,2.05413,0,0,1-2.00781,1.63281Z"
                      />
                      <path
                        className="uim-primary"
                        d="M8.97266,21.50586a.99968.99968,0,0,1-.957-.71l-2.168-7.15918A.9989.9989,0,0,1,6.34277,12.46L16.91016,6.958A.99975.99975,0,0,1,18.0791,8.55176l-7.083,7.083L9.95215,20.707a.99926.99926,0,0,1-.9336.79785C9.00293,21.50586,8.9873,21.50586,8.97266,21.50586Z"
                      />
                    </svg>
                  </span>
                </div>
                {clients.length === 0 && (
                <div className="flex-grow-1 ms-3">
                 
                    <Link to="/update">
                      <h6 className="fs-18 mb-0">
                        {" "}
                        Please Update Your Profile
                      </h6>
                    </Link>
                 
                </div>
                 )}
              </div>
              {/*about-feature*/}
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

export default PostWork;
