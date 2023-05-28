import { CartContext } from "../createCartContext";
import { useContext } from "react";

function DisplayCart(){
    const{cart}=useContext(CartContext);



return(
<div>
{cart}
</div>
);

}

export default DisplayCart;