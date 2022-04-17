import "../styles/style.scss";
import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const history = useHistory();

  const [inputdata, setInputData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    const newdata = { ...inputdata };

    console.log(e.target.id);
    console.log(e.target.value);

    newdata[e.target.id] = e.target.value;
    setInputData(newdata);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("payload", inputdata);
    try {
      const logindata = async () => {
        const res = await axios
          .get(
            `https://square-boatr.herokuapp.com/api/v1/profile/login?email=${inputdata.email}&password=${inputdata.password}`,
            inputdata
          )
          .then((response) => {
            

            if (response.data && response.data.result) {
           
              sessionStorage.setItem("token", response.data.result.token);

              sessionStorage.setItem("admin", response.data.result.user[0].isSuperAdmin);
            
              history.push({ pathname: "/dashboard" });
              alert("User loggedIn sucessfully");
              // window.location.href = '/raw_milk';
            } else {
              alert(response.data.error);
            }
          });
      };
      logindata();
    } catch (error) {
      alert(error);;
    }
  };

  // if (!user_detail) {
  return (
    <div className="all_cover">
      <h3 className="login_title">E-cart</h3>

      <div className="login_form">
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
                  id="password"
                  value={inputdata.password}
                  onChange={(e) => changeHandler(e)}
                  type="password"
                  className="control_filed"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="login_form_btn">
                Sign In
              </button>
              {/* #4e73df */}
            </form>
          </div>

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
              to="/register"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
