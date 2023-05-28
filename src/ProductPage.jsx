import  React ,{useState, useContext} from "react";
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { CartContext } from "./createCartContext";
import DisplayCart from "./Components/Cart";




function ProductPage() {
 //state to show Cart
 const[displayCart,SetDisplayCart]=useState(false);



  //Grab state data from selected product
 const location = useLocation();
const data = location.state;
console.log(data);
 

//Use Context / Data for basket
const{cart}=useContext(CartContext);

//Variants


  
      return (
<div>
<Link to={"/"} className="absolute left-12 top-4" >Back &#62;</Link>
{displayCart ? <DisplayCart/> : null}
        <div className="grid grid-cols-2 gap-2 p-12">
        <div className="col-span-1">
        
      <img src={data.featuredImage.url}></img>
        </div>

        <div className="col-span-1 pl-4 text-left relative">
        <h2 className="font-bold mb-6 text-lg">{data.title}</h2>
        <h3>{data.description}</h3>
        <button onClick={() => SetDisplayCart(true)} className="absolute bottom-0 bg-blue-400" >Add to Cart</button>
        </div>
        
        
       
   
    </div>
    </div>
      );
    }

    export default ProductPage;