import { CartContext } from "../createCartContext";
import { useContext } from "react";

function DisplayCart(props){
    const{cart}=useContext(CartContext);
    const{total}=useContext(CartContext);


console.log(cart);

return(
    <div className="Overlay w-screen h-screen fixed z-10">
<div className="bg-white absolute h-screen w-96 right-0 z-20 pt-12 overflow-y-scroll">
<p onClick={() => props.SetDisplayCart(false)}>Exit</p>
<h2 className="font-black">Your Bag</h2>
<p>Total : {total}</p>
{cart.map((items,index)=> 
    
  <div className="mt-5">
  
  <img src={items.image} width={200} className="float-left inline"></img>
 
  
  <p className=" pt-6 inline ">£{items.price}</p>
<p className=" pt-6 align-middle">{items.title}</p>

       </div>
        )}


</div>
</div>
);

}

export default DisplayCart;