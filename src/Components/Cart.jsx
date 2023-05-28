import { CartContext } from "../createCartContext";
import { useContext } from "react";

function DisplayCart(){
    const{cart}=useContext(CartContext);



return(
<div className="bg-white absolute h-screen w-96 right-0">
<p className="font-black">{cart}</p>
</div>
);

}

export default DisplayCart;