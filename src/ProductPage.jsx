import  React ,{useState, useContext} from "react";
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { CartContext } from "./createCartContext";
import Header from "./Components/Header";




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
    
<div className="relative">

<Header />
        <div className="grid grid-cols-2 gap-2 p-12 pt-20">
        <div className="col-span-1">
        <Link to={"/"} className="absolute left-12 top-20 mb-12 text-black " >Back &#62;</Link>
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