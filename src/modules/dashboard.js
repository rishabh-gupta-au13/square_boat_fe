import * as React from "react";

import TopNavBar from "./Top_nav_bar";

import ImgMediaCard from "./Card";
import axios from "axios";

import { useEffect, useState } from "react";

export default function Dashboard() {


  return (
    <div>
      <div>
        <TopNavBar />
      </div>
      <div style={{margin:"40px 7px 20px 100px"}}>
        <ImgMediaCard />
      </div>
    </div>
  );
}

{
  /*   
        <div style={{margin:"1cm", width:"10cm",height:"2cm",backgroundColor:"skyblue"}} class="g-col-6">card</div>
        <div style={{margin:"1cm", width:"10cm",height:"2cm",backgroundColor:"skyblue"}} class="g-col-6">card</div>

        <div style={{margin:"1cm", width:"10cm",height:"2cm",backgroundColor:"skyblue"}} class="g-col-6">card</div>
        <div style={{margin:"1cm", width:"10cm",height:"2cm",backgroundColor:"skyblue"}} class="g-col-6">card</div> */
}
