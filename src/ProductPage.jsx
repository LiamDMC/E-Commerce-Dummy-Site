import  React ,{useState, useContext} from "react";
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { CartContext } from "./createCartContext";




function ProductPage() {
 

  //Grab state data from selected product
 const location = useLocation();
const data = location.state;
 

//Use Context / Data for basket
const{cart}=useContext(CartContext);

  
      return (
        <div className="grid grid-cols-2 gap-2">
        <div>{cart}</div>
        <h1>{data.title}</h1>
      <img src={data.featuredImage.url}></img>
      <Link to={"/"} >Back</Link>
    </div>
      );
    }

    export default ProductPage;