import React from "react";
import { useState } from "react";
import DisplayCart from "./Cart";


function Header(){


    //Needs Completing - to use on all pages.
    
    const[displayCart,SetDisplayCart]=useState(false);

    function test(){
        SetDisplayCart(true);

    }

    {displayCart ? <DisplayCart displayCart={displayCart} SetDisplayCart={SetDisplayCart}/> : null}
<div>hi</div>
}

export default Header;