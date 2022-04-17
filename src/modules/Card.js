import * as React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

export default function ImgMediaCard() {
  const [requestValue, setRequestValue] = useState([]);

  const history = useHistory();

  const productData = async () => {
    const headers = {
      authorization:
      sessionStorage.getItem("token")
    };
    const res = await axios
      .get("https://square-boatr.herokuapp.com/api/v1/products/allProducts", {
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






  console.log("product_data", requestValue);
 
  const buy_now_handler = async (e,value) =>{

    e.preventDefault()

    console.log(value)

    const  productDetails = {"productId":value._id,"price":value.productPrice}

    // productDetails.push({"productId":value._id,"price":value.productPrice})

    console.log(productDetails)
    
    const headers = { 'authorization': sessionStorage.getItem("token"), }
    await axios.post('https://square-boatr.herokuapp.com/api/v1/orders/placedOrders', productDetails, { headers })
      .then(response => {

        console.log("lookup",response.data)
                 if (response.data && response.data.result) {
           
              alert(` ✔ Order Placed Sucessfully with orderId : ${response.data.result.orderId}`);
              // window.location.href = '/raw_milk';
            } else {
              alert("Order Not placed");
            }
  });

  



    // try {
    //   const logindata = async () => {


    //     const headers = {
         
    //       authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjU5YTNkMzEzNWM2ODA3Y2JjYTEzYTciLCJpYXQiOjE2NTAxNzQ2ODQsImV4cCI6MTY1MDI2MTA4NH0.18xJd1-k4TJKBys9EaDkgdQQNNKQFMmS_e_T0Y47C58",
    //     };


    //     const res = axios
    //       .post(
    //         "https://square-boatr.herokuapp.com/api/v1/orders/placeOrder",productDetails ,{headers},
            
    //       )
    //       .then((response) => {
    //         console.log("right", response);

    //         if (response.data && response.data.result) {
           
    //           alert(` ✔ Order Placed Sucessfully with orderId : ${response.data.result.orderId}`);
    //           // window.location.href = '/raw_milk';
    //         } else {
    //           alert("Order Not placed");
    //         }
    //       });
    //   };
    //   logindata();
    // } catch (error) {
    //   console.log(error);
    // }

  }

   
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {requestValue && requestValue.map((item, idx) => {
        console.log("picture", item);
        return (
          <div
            class="card"
            style={{ width: "14rem", height: "16rem", margin: "20px" }}
          >
            <h6>{item.productTitle}</h6>
            <img
              style={{ width: "14rem", height: "5rem" }}
              src={item.productPhoto}
              class="card-img-top"
              alt="product"
            />
            <div class="card-body">
              <div >
                <p>
                  <p style={{ fontWeight: 500, display: "inline" }}>Price</p>
                  : {item.productPrice}
                </p>

                <p>
                  <p style={{ fontWeight: 500, display: "inline" }}>Category</p>

                  :   {item.productCategory}
                </p>
              </div>

              <p>{item.description}</p>
              
            </div>
            <button onClick={(e)=>{buy_now_handler(e,item)}}  style={{marginBottom:"100px",backgroundColor:"lightgreen",border:"none"}}>Buy Now</button>
           
          </div>
        );
      })}
    </div>
  );
}
