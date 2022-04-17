import * as React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import TopNavBar from "./Top_nav_bar";

export default function Add_product() {
  const history = useHistory();

  const [inputdata, setInputData] = useState({
    productTitle: "",
    description: "",
    productPrice: "",
    productCategory: "",
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

        const headers = {
            authorization: sessionStorage.getItem("token"),
          };

        const res = await axios
          .post(
            "https://square-boatr.herokuapp.com/api/v1/products/addProducts",
            inputdata,{headers}
          )
          .then((response) => {
            console.log("right", response);

            if (response.data && response.data.result) {
              // // history.push({ pathname: "/raw_milk" });
              // history.push("/raw_milk");

              // navigate({ pathname: "/raw_milk" })
              history.push({ pathname: "/dashboard" });
              alert("Product Added Successfully");

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
    <div >
      <div>
        <TopNavBar />
      </div>

      <h5 style={{margin:"50px 0px 50px 0px"}}>Add Product</h5>
    
          <div>
            <div style={{}}>
              <form onSubmit={submitHandler}>
                <div>
                  <input
                    id="productTitle"
                    value={inputdata.productTitle}
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    className="control_filed"
                    placeholder="Product Title"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <input
                    id="description"
                    value={inputdata.description}
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    className="control_filed"
                    placeholder="Description"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <input
                    id="productPrice"
                    value={inputdata.productPrice}
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    className="control_filed"
                    placeholder="Product Price"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <input
                    id="productCategory"
                    value={inputdata.productCategory}
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    className="control_filed"
                    placeholder="Product Category"
                    required
                  />
                </div>
                <button
                  style={{ backgroundColor: "#2E59D9" }}
                  type="submit"
                  className="login_form_btn"
                >
                  Add
                </button>
            
              </form>
         
        </div>
      </div>
      <div></div>
    </div>
  );
}
