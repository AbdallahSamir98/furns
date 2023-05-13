import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/ShoppingCartContext";
// import AllProducts from "../HomeProducts/AllProducts";
import AllProducts from "../../Data/allProducts.json";


export default function Collection() {
  const { scrollToTop } = useContext(CartContext);
 
  return (
    <>
      <div className="container  mt-5   ">
        <div className="row   p-3">
          
          <div  className="col-md-3  d-flex justify-content-center  collectionContent text-center  mb-2">
        
           <Link onClick={scrollToTop} to='/products'>
          <div className="collectionImage   d-flex justify-content-center align-items-center flex-column">
              <img className="imgcol " src="images/image8.jpg" alt="collectionImage" />
              <h6 className="my-3">Bedroom</h6>
            </div>
          </Link>
       

            
          </div>
          <div className="col-md-3 collectionContent d-flex justify-content-center    text-center mb-2">
          <Link onClick={scrollToTop} to='/products'>
          <div className="collectionImage d-flex justify-content-center align-items-center flex-column  ">
              <img className="imgcol" src="images/image10.jpg" alt="collectionImage" />
              <h6 className="my-3">Office Chairs</h6>

              
            </div>
          </Link>

            
          </div>
          <div className="col-md-3 collectionContent d-flex justify-content-center    text-center mb-2">
          <Link onClick={scrollToTop} to='/products'>
          <div className="collectionImage d-flex justify-content-center align-items-center flex-column ">
              <img className="imgcol" src="images/image9.jpg" alt="collectionImage" />
              <h6 className="my-3">Dininng</h6>

            </div>
          </Link>

           
          </div>
          <div className="col-md-3 collectionContent  d-flex justify-content-center   text-center mb-2">
          <Link onClick={scrollToTop} to='/products'>
          <div className="collectionImage d-flex justify-content-center align-items-center flex-column  ">
              <img className="imgcol" src="images/image7.jpg" alt="collectionImage" />
              <h6 className="my-3">Lounge</h6>

            </div>
          </Link>

          
          </div>
        </div>
      </div>
    </>
  );
}
