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

    //Map cart against the item, if it matches, -qty then return new array and set as state.
   const newQuantities=cart.map((itemMatch,i) =>  
  {if(itemMatch.title == item.title){
  const price=parseInt(itemMatch.price)
  setTotal((prevVals) =>parseInt(prevVals-price));
  itemMatch.quantity=item.quantity-1;

}
return itemMatch;

}

    )
    //Need to filter out the list to check if they have 0 quantity to remove item
    const filteredList = newQuantities.filter(list => list.quantity >= 1);
    console.log(filteredList);
  setCart(filteredList);

  } 
  

   //Add Quantity of item

   //Do same as Removequantity but add the quantity
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
    
 setCart(newQuantities);
   } 
   
 //Delete Item from Cart
function DeleteItem(item){


  //Filter array create new one extracting the value by title --> Ideally better using ID

  
  const RemoveItem = cart.filter(list => list.title != item.title);
  setCart(RemoveItem);
  const price=parseInt(item.price)
  const TotalPrice=parseInt(price*item.quantity);
  setTotal((prevVals) =>parseInt(prevVals-TotalPrice));
}
   
//If total is empty, render empty cart message
return(

    <div className="Overlay w-screen h-screen fixed z-10">
      
<div className="bg-white absolute h-screen w-96 right-0 z-20 pt-12 overflow-y-scroll">

<button className="absolute top-0 right-0 bg-transparent border-none text-3xl" onClick={() => props.SetDisplayCart(false)}>X</button>
<h2 className="font-black mt-8 text-3xl">Your Bag</h2>
<p className="text-2xl mt-2 mb-12 font-medium">Total : £{total}</p>

{total ? cart.map((items,i)=> 
    
  <div className="mt-5 grid-cols-2">
  <div className="col-span-1">
  <img src={items.image} width={130} className="float-left mr-5"></img>
 </div>
  
 <div className="col-span-1 text-left ">
 <p className=" pt-6 align-middle  inline">{items.title}</p>
 <button className="inline ml-5 bg-transparent" onClick={() => { 
  DeleteItem(cart[i]);        
}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
  <p className=" pt-6 font-bold">£{items.price * items.quantity}</p>
  <div><p className="inline font-bold">Qty:</p> 
<p className="inline font-bold"> {items.quantity}</p>
<button className="ml-5 bg-transparent" onClick={() => { 
  removeQuantity(cart[i]);        
}} >-</button><button className="bg-transparent"  onClick={() => { 
  addQuantities(cart[i]);        
}} >+</button>
</div>
</div>
       </div>
        ):<p className="mt-6">Your Cart is Empty..</p>}


</div>
</div>
);

}

export default DisplayCart;