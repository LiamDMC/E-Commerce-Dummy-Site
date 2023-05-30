import './App.css'
import ProductPage from './ProductPage';
import Products from './ProductListing';
import { BrowserRouter as Router,Route} from "react-router-dom";
import { Routes} from 'react-router-dom';
import  {CartContext}  from './createCartContext';
import { useState } from 'react';


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
//set State of cart - to be used globally with useContext
const [cart,setCart]=useState([

  {
    
    price:"",
    title:"",
    image:"",
    quantity:0
  }
]);
//set State of Total of cart - to be used globally with useContext
const [total,setTotal]=useState(0);


  
    return (
      //Set the dynamic routes and provide the values of the createContext
      <CartContext.Provider value={{cart,setCart,total,setTotal}}>
   <Router>
      <Routes>
      <Route path={"/"} element={<Products />} ></Route>
      <Route path={"/product/:title"} element={<ProductPage />}>
     

     
      </Route></Routes>

     </Router>
     </CartContext.Provider>
    );
  }
  


export default App
