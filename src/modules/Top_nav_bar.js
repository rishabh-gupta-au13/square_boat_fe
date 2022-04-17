import React from "react";
import { useHistory } from "react-router";

import { Link } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// // import { useHistory } from "react-router";

function TopNavBar() {
  const history = useHistory();
  // const user_name = sessionStorage.getItem("employee_name");

  const logoutHandler = () => {
    sessionStorage.clear();
    history.push({ pathname: "/login" });
  };

  return (
    <div>
      <div className="topnav">
        <div style={{ float: "left" }}>
          <button
            onClick={() => {
              history.push({ pathname: "/dashboard" });
            }}
            style={{
              borderRadius: "5px",
              border: "none",
              margin: "12px 0px 0px 30px",
              backgroundColor: "skyblue",
              color: "white",
            }}
          >
            Dashboard
          </button>
        </div>

        {
            sessionStorage.getItem("admin") == "Yes" &&

          <div style={{ float: "left" }}>
            <button
              onClick={() => {
                history.push({ pathname: "/add_product" });
              }}
              style={{
                borderRadius: "5px",
                border: "none",
                margin: "12px 0px 0px 30px",
                backgroundColor: "skyblue",
                color: "white",
              }}
            >
              Add Product
            </button>
          </div>
        }

        <div style={{ float: "left" }}>
          <button
            onClick={() => {
              history.push({ pathname: "/orders" });
            }}
            style={{
              borderRadius: "5px",
              border: "none",
              margin: "12px 0px 0px 30px",
              backgroundColor: "skyblue",
              color: "white",
            }}
          >
            My Orders
          </button>
        </div>

        <div
          style={{
            float: "right",
            marginRight: "20px",
            cursor: "pointer",
            display: "flex",
          }}
        >
          <button
            onClick={logoutHandler}
            style={{
              fontSize: "14px",
              padding: "3px 8px 3px 8px",
              border: "none",
              marginTop: "12px",
              color: "white",
              backgroundColor: "blue",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
