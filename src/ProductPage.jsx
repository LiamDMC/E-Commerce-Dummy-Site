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
//console.log(data);
const price = data.variants.edges[0].node.price.amount

const convertedPrice=parseInt(price);


//Use Context / Data for cart
const{setCart}=useContext(CartContext);
const{cart}=useContext(CartContext);


const{setTotal}=useContext(CartContext);
const{total}=useContext(CartContext);

//console.log(cart[0].total);

function addToCart(){
  SetDisplayCart(true);

  //Check if item is already added to cart to avoid duplication
  for(let i = 0; i < cart.length; i++) {
    let obj = cart[i].title;
if(data.title==obj){
  return;
}
}

  
//Checking if total is 0 to create a fresh object instead of overwritting
if(total==0){

  setTotal(parseInt(convertedPrice));

  setCart([
    {

    price:price,
    title:data.title,
    image:data.featuredImage.url,
    quantity:1
  }
]);



}
else{
  
  setTotal((prevVals) =>parseInt(prevVals+convertedPrice));
  setCart((prevVals) => [...prevVals,
    
    {
    price:price,
    title:data.title,
    image:data.featuredImage.url,
      quantity:1,
}])

}
}

function cartDisplay(){
  SetDisplayCart(true);

}

//Variants-to do


  
      return (
        <div className="h-screen">
        <p onClick={cartDisplay}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer float-right mr-12 mt-4 absolute top-0 right-0">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</p>
<div className="relative mt-12">


<Link to={"/"} className="absolute left-12 top-4 mb-12 text-black " >Back &#62;</Link>
{displayCart ? <DisplayCart displayCart={displayCart} SetDisplayCart={SetDisplayCart}/> : null}
        <div className="grid grid-cols-2 gap-2 p-12">
        <div className="col-span-1">
        
      <img src={data.featuredImage.url}></img>
        </div>

        <div className="col-span-1 pl-4 text-left relative">
        <h2 className="font-bold  inline text-3xl ">{data.title}</h2> <p className="text-3xl font-bold inline float-right">£{price}</p>
        <h3 className="mt-6">{data.description}</h3>
       
        <button onClick={addToCart} className="mt-12 bg-blue-400" >Add to Cart</button>
        </div>
        
        
       
   
    </div>
    </div>
    </div>
      );
    }

    export default ProductPage;