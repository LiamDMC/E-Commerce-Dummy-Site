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


//Use Context / Data for basket
const{setCart}=useContext(CartContext);
const{cart}=useContext(CartContext);


const{setTotal}=useContext(CartContext);
const{total}=useContext(CartContext);

//console.log(cart[0].total);

function addToCart(){
  SetDisplayCart(true);


if(total==0){
  //console.log("emptytotal");


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

//Variants


  
      return (
<div>
<Link to={"/"} className="absolute left-12 top-4 text-black" >Back &#62;</Link>
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
      );
    }

    export default ProductPage;