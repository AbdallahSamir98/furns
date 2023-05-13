import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AddCartContext } from "../../../Context/ExampleContext";
import { CartContext } from "../../../Context/ShoppingCartContext";

export default function ProductDetail() {
  const { cart, addCart, scrollToTop } = useContext(AddCartContext);
  const { addToCart, handlRemove, decrementCart } = useContext(CartContext);

  const notify = () =>
    toast.success("successfully add", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <>
      <div className="container ">
        {cart.map((item, idx) => (
          <div key={idx} className="row">
            <div className="col-md-4">
              <div>
                <img src={item.image} className="rounded w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h4 className=" text-danger">{item.name}</h4>

                <p className="text-muted">{item.desc}</p>

                <p>
                  <h6 class=" ">
                    <span className="text-danger Linethrough">
                      {item.sale ? "$" + item.price : ""}{" "}
                    </span>
                    
                    {item.sale
                      ? item.price - (item.price * item.sale) / 100
                      : item.price}
                  </h6>
                </p>
               
               <button
                  onClick={() => {
                    addToCart(item);
                    notify();
                  }}
                  className="btn p-0 w-25">{item.btn}</button>
               
     
              
              </div>
            </div>
            <div>
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


