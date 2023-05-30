import { CartContext } from "../createCartContext";
import { useContext } from "react";

function DisplayCart(props){

  //Use Context for cart items & total
    const{cart}=useContext(CartContext);
    const{setCart}=useContext(CartContext);
    const{total}=useContext(CartContext);
    const{setTotal}=useContext(CartContext);

    //handle Quantities

//Remove Quantity of item
   function removeQuantity(item){

    
   const newQuantities=cart.map((itemMatch,i) =>  
{if(itemMatch.title == item.title){
  const price=parseInt(itemMatch.price)
  setTotal((prevVals) =>parseInt(prevVals-price));
  itemMatch.quantity=item.quantity-1;

}
return itemMatch;

}

    )
  
setCart(newQuantities);
  } 
  

  
   //Add Quantity of item
  function addQuantities(item){

    
    const newQuantities=cart.map((itemMatch,i) =>  
 {if(itemMatch.title == item.title){
  itemMatch.quantity=item.quantity+1;
  const price=parseInt(itemMatch.price)
  setTotal((prevVals) =>parseInt(prevVals+price));

   
 }else{
 
 }
 return itemMatch;
 
 }
 
     )
  //const filteredList=newQuantities.filter(list =>list.quantity >=0){};
 setCart(newQuantities);
   } 
   
 

   

return(
    <div className="Overlay w-screen h-screen fixed z-10">
<div className="bg-white absolute h-screen w-96 right-0 z-20 pt-12 overflow-y-scroll">
<p onClick={() => props.SetDisplayCart(false)}>Exit</p>
<h2 className="font-black">Your Bag</h2>
<p>Total : £{total}</p>
{cart.map((items,i)=> 
    
  <div className="mt-5 grid-cols-2">
  <div className="col-span-1">
  <img src={items.image} width={130} className="float-left mr-5"></img>
 </div>
  
 <div className="col-span-1 text-left ">
 <p className=" pt-6 align-middle pl-5">{items.title}</p>
  <p className=" pt-6 ">£{items.price * items.quantity}</p>
  <div><p className="inline">Qty:</p> 
<p className="inline"> {items.quantity}</p>
<button className="ml-5 bg-transparent" onClick={() => { 
  removeQuantity(cart[i]);        
}} >-</button><button className="bg-transparent"  onClick={() => { 
  addQuantities(cart[i]);        
}} >+</button>
</div>
</div>
       </div>
        )}


</div>
</div>
);

}

export default DisplayCart;