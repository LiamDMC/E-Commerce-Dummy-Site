import  React from "react";
import { useState,useEffect } from "react";
//import {} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';




function ProductPage() {
 

  //Grab state data from selected product
 const location = useLocation();
const data = location.state;
 console.log(data);
  
      return (
        <div className="grid grid-cols-2 gap-2">
        <h1>{data.title}</h1>
      <img src={data.featuredImage.url}></img>
      <Link to={"/"} >Back</Link>
    </div>
      );
    }

    export default ProductPage;