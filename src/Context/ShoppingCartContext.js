import {  createContext, useEffect, useState } from "react";



export const CartContext = createContext({})



  
export default function ShoppingCartContext({children}) {
  // get data from localstorage
  function getDataFromLocalStorage(){
    let localCartData = JSON.parse( localStorage.getItem('allProducts'))
    return localCartData ? localCartData : []
  }
    const [cart, setCart] = useState(getDataFromLocalStorage());

  //to add data to localstorage
    useEffect(() => {
    localStorage.setItem('allProducts',JSON.stringify(cart))
    },[cart])

          

        
  // function to add to cart and increment items
 
    const addToCart = (item) => {
        const productExist =cart.find((product) => product.id === item.id )
        if(productExist){
       setCart(cart.map((product) => product.id === item.id ? {...productExist ,quantity:productExist.quantity+1 } : product ))  
        } else {
          setCart([...cart, {...item , quantity: 1}]);
      
        }
    }
 
    //function to remove item from cart 
    const handlRemove = (product) => {
      const newList = cart.filter((products) => products !== product);
      setCart(newList);
      
    } 

    //function to decrement item from cart 

  
    const decrementCart = (product) => {
      const productExist = cart.find((item) => item.id === product.id);
      if(productExist.quantity === 1){
        setCart(cart.filter((item) => item.id !== product.id));
      }else{
        setCart(
          cart.map((item) =>
           item.id === product.id 
           ? {...productExist, quantity: productExist.quantity - 1}
           : item
           )
        )
      }
    };

 


    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  

  return (
      <CartContext.Provider value={{addToCart,cart,handlRemove,decrementCart, scrollToTop}}>
          {children}
      </CartContext.Provider>
  )
}
