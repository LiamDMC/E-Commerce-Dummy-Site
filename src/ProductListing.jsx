import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import { Routes} from 'react-router-dom';
import ProductPage from "./ProductPage";





function Products(){
 


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
        //console.log(data.data.products.edges)
        setProducts(data.data.products.edges)
      })
    },[])



    return (
      <>
     
      <div className="ProductRange">
       <h1 className="text-4xl font-bold mb-5">
    Our Products
  </h1>
    <div className="grid grid-cols-4 gap-4">


    {products.map((product,index)=> 
<div className='' key={product.index}>
      <div className="card "  >

<img src={product.node.featuredImage.url}></img>
<div className="card-section">
<h4>{product.node.title}</h4>
<Link to={"/product/"+product.node.title} state={product.node}>View Product</Link>

{/*<a key={index} href={"/"+product.title}>test</a>
<button > View Product </button> *}
{/*<p>{product.node.description}</p>*/}
</div>
</div>
    </div>
   
    )}

    

    </div>
    </div>


    </>
    );
  }


  

export default Products; 