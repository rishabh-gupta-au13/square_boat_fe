import * as React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import TopNavBar from "./Top_nav_bar";

import { useHistory } from "react-router-dom";



export default function Orders() {
  const [requestValue, setRequestValue] = useState([]);

  const history = useHistory();

  const productData = async () => {
    const headers = {
      authorization: sessionStorage.getItem("token"),
    };
    const res = await axios
      .get("https://square-boatr.herokuapp.com/api/v1/orders/allOrders", {
        headers,
      })
      .then((response) => {
        console.log("Axios response", response);
        if (response.data) {
          setRequestValue(response.data.result);
        }
      });
  };

  useEffect(() => {
    if(!sessionStorage.getItem("token")){
        history.push({ pathname: "/login" });
      }
    productData();
  }, []);

  return (
    <div style={{}}>
      <div>
        <TopNavBar />
      </div>
      <h5 style={{marginRight:"63vw"}}>Order List</h5>
      {requestValue &&
        requestValue.map((item, idx) => {
          console.log("picture", item);
          return (
            <div
              class="card"
              style={{
                width: "40rem",
                height: "5rem",
                margin: "20px 0 0 200px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={{ width: "10rem", height: "5rem" }}
                  src="https://waycoolstorage.blob.core.windows.net/receivable/file-3de3236f-5e2e-48b3-9d89-81ff4ef1fb1f.jpg"
                  class="card-img-top"
                  alt="product"
                />
                <div style={{marginLeft:"40px"}}>
                  <p style={{margin:0}}>
                    <p style={{ fontWeight: 500, display: "inline" }}>Product Id</p>:{" "}
                    {item.productDetails[0].productId}
                  </p>
                  <p style={{margin:0}}>
                    <p style={{ fontWeight: 500, display: "inline" }}>Price</p>:{" "}
                    {item.totalInvoice}
                  </p>
                  <p style={{margin:0}}>
                    <p style={{ fontWeight: 500, display: "inline" }}>Ordered Date</p>:{" "}
                    {item.createdAt.split("T")[0]}
                  </p>
                  {/* <h6> Product Id : {item.productDetails[0].productId}</h6>
                  <h6>Price : {item.totalInvoice}</h6>
                  <h6>Ordered Date : {item.createdAt.split("T")[0]}</h6> */}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
