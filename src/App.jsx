import './App.css'
import ProductPage from './ProductPage';
import Products from './ProductListing';
import { BrowserRouter as Router,Route} from "react-router-dom";
import { Routes} from 'react-router-dom';
import  {CartContext}  from './createCartContext';
import { useState } from 'react';
//import { createContext } from 'react';

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

const [cart,setCart]=useState("test");

  
    return (
      
      <CartContext.Provider value={{cart,setCart}}>
   <Router>
      <Routes>
      <Route path={"/"} element={<Products />}></Route>
      <Route path={"/product/:title"} element={<ProductPage />}>
     

     
      </Route></Routes>

     </Router>
     </CartContext.Provider>
    );
  }
  


export default App
