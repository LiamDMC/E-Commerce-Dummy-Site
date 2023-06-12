import React from "react";
import { useState } from "react";
import DisplayCart from "./Cart";


function Header(){


    //Needs Completing - to use on all pages - currently unused - would also contain Nav component
    
    const[displayCart,SetDisplayCart]=useState(false);

    function cartDisplay(){
        SetDisplayCart(true);

    }
return (
    <div className="bg-gray-200 h-12 ">
     <p onClick={cartDisplay}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-1 cursor-pointer float-right mr-4 p-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</p>
    {displayCart ? <DisplayCart displayCart={displayCart} SetDisplayCart={SetDisplayCart}/> : null}
<div className="float-left w-48 h-12 pt-3"><p className="font-extrabold">LH Clothing</p>

</div>

</div>
)
}

export default Header;