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
        //console.log(data.data.products.edges[0])
        //console.log(data.data.products.edges[0].node.variants.edges[0].node.price)
        setProducts(data.data.products.edges)
      })
    },[])

function cartDisplay(){
  SetDisplayCart(true);

}

    return (
      <>
     <div>
     {displayCart ? <DisplayCart displayCart={displayCart} SetDisplayCart={SetDisplayCart}/> : null}
      <div className="ProductRange p-12">
      <p onClick={cartDisplay}>Cart</p>
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