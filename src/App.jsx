import {useEffect, useState } from 'react'
import './App.css'

//import CardComponent from './Components/Card';

/*-- To Do -- 
1.Establish data call and data required to display 
2.Scope out components and functions needed:
-Card Component
-Mini Basket Component
-Remove / Add to basket function
-Add / remove quantities
-View Basket - maintain basket state

*/


function App() {

  
  const [count, setCount] = useState(0)

  //set state for array of products data.
  const [products, setProducts] = useState([]);


  //useEffect for the API call on each render
  useEffect(() => {
    
    fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
      .then(response => {
        return response.json()
      })
    
      .then(data => {
        
        //console.log(data.data.products.edges)
        setProducts(data.data.products.edges)
      })
    },[])



    return (
      <>
      <h1 className="text-4xl font-bold mb-5">
      Our Products
    </h1>
      <div className="grid grid-cols-4 gap-4">
 
 
      {products.map(product => 
<div className=''>
        <div className="card "  key={product.id}>

<img src={product.node.featuredImage.url}></img>
<div className="card-section">
  <h4>{product.node.title}</h4>
  <p>{product.node.description}</p>
</div>
</div>
      </div>
     
      )}



      </div>
    </>
    );
  }
  


export default App
