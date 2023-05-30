import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import DisplayCart from "./Components/Cart";


function Products(){
  //Show Cart
  const[displayCart,SetDisplayCart]=useState(false);


  //set state for array of products data.
  const [products, setProducts] = useState([]);

  //useEffect for the API call on each render
  useEffect(() => {
    
    fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
      .then(response => {
        return response.json()
      })
    
      .then(data => {
        //console.log(data);
        setProducts(data.data.products.edges)
      })
    },[])


    //Change state to true to display cart component
function cartDisplay(){
  SetDisplayCart(true);

}
//Map through the Data iterating all the products
    return (
      <>
     <div> <p onClick={cartDisplay}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer float-right mr-12 mt-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</p>
     {displayCart ? <DisplayCart displayCart={displayCart} SetDisplayCart={SetDisplayCart}/> : null}
      <div className="ProductRange p-12">
     
       <h1 className="text-4xl font-bold mb-5 text-left">
    Our Products
  </h1>
    <div className="grid grid-cols-4 gap-8">


    {products.map((product,index)=> 
    
<div className='' key={product.index}>
<Link to={"/product/"+product.node.title} state={product.node} className="text-black font-normal">
      <div className="card "  >

<img src={product.node.featuredImage.url}></img>
<div className="card-section p-2 text-left">
<h4>{product.node.title}</h4>
<p className="font-bold">£{product.node.variants.edges[0].node.price.amount}</p>
</div>
</div>
</Link>
    </div>
    
   
    )}

    

    </div>
    </div>

</div>
    </>
    );
  }


  

export default Products; 