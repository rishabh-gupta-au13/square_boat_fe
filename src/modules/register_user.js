import "../styles/style.scss";
import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// import { useHistory } from "react-router";
import { withRouter } from "react-router";

import { Redirect } from "react-router";
import App from "./../App";

const Register = () => {
  // const navigate = useNavigate();
  const history = useHistory();
 

  const [inputdata, setInputData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    const newdata = { ...inputdata };
    console.log(e.target.id, e.target.value);
    newdata[e.target.id] = e.target.value;
    setInputData(newdata);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("payload", inputdata);
    try {
      const logindata = async () => {
        const res = await axios
          .post(
            "https://square-boatr.herokuapp.com/api/v1/profile/signup",
            inputdata
          )
          .then((response) => {
            console.log("right", response);

            if (response.data && response.data.result) {
              // // history.push({ pathname: "/raw_milk" });
              // history.push("/raw_milk");

              // navigate({ pathname: "/raw_milk" })
              history.push({ pathname: "/login" });
              alert("User Created sucessfully");
             
              // window.location.href = '/raw_milk';
            } else {
              alert(response.data.error);
            }
          });
      };
      logindata();
    } catch (error) {
      console.log(error);
    }
  };

  // if (!user_detail) {
  return (
    <div className="all_cover">
      <h3 className="login_title">E-cart</h3>
      <div>
        <div className="login_form1">
          <div>
            <h1
              style={{
                textAlign: "center",
                fontWeight: 400,
                fontSize: 22,
                lineHeight: 6,
              }}
            >
              Welcome!
            </h1>
            <div>
              <form onSubmit={submitHandler}>
                <div>
                  <input
                    id="name"
                    value={inputdata.name}
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    className="control_filed"
                    placeholder="Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <input
                    id="email"
                    value={inputdata.email}
                    onChange={(e) => changeHandler(e)}
                    type="email"
                    className="control_filed"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <input
                    id="mobileNumber"
                    value={inputdata.mobileNumber}
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    className="control_filed"
                    placeholder="Contact Number"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <input
                    id="password"
                    value={inputdata.password}
                    onChange={(e) => changeHandler(e)}
                    type="password"
                    className="control_filed"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  style={{ backgroundColor: "#2E59D9" }}
                  type="submit"
                  className="login_form_btn"
                 
                >
                  Sign Up
                </button>
                <div>
            {/* <Link className="nav-link" to="app"> Dashboard </Link> */}

            <Link
              style={{
                backgroundColor: "skyblue",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                textDecoration: "none",
                fontSize: "12px",
                padding: "5px",
                color:"white"
              }}
              to="/login"
            >
              Sign In
            </Link>
          </div>
                {/* #4e73df */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
