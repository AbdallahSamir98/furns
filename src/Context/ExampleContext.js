import {  createContext, useEffect, useState } from "react";



export const AddCartContext = createContext({})



  
export default function ExampleContext({children}) {
  

    // get data from localstorage
  function getDataFromLocalStorage(){
    let localCartData = JSON.parse( localStorage.getItem('allProductsBlog'))
    return localCartData ? localCartData : []
  }
    const [cart, setCart] = useState(getDataFromLocalStorage());

  //to add data to localstorage
    useEffect(() => {
    localStorage.setItem('allProductsBlog',JSON.stringify(cart))
    },[cart])

        
//   function to add to cart and increment items
 
  const addCart = (item) => {
    setCart([cart, {...item , quantity: 1}]);

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
      <AddCartContext.Provider value={{addCart,cart,handlRemove,decrementCart, scrollToTop}}>
          {children}
      </AddCartContext.Provider>
  )
}
