import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/ShoppingCartContext";
import allProuducts from "../../Data/allProducts.json";
import ToggleCart from "../ToggleCart/ToggleCart";

import "./navbar.css";

export default function Navbar() {
  const [modal, setModal] = useState(false);

  const { cart, addToCart } = useContext(CartContext);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modall");
  } else {
    document.body.classList.remove("active-modall");
  }


  return (
    
    <>
    <div  >
        <i
            className="fa-solid fa-cart-plus  rounded-start fs-5 p-3 cartposition  "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            
          >
          <p className="itemTitle mt-2 text-white">{cart.length} Items</p>
          

          </i>

          <ToggleCart/>
        
        </div>
     
       
      <div className="container mt-2 ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <img src="images/75.png" alt="logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page">
                    {" "}
                    <i
                      onClick={toggleModal}
                      className="fa-solid fa-magnifying-glass ms-2 fs-4"
                    >
                      {" "}
                    </i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  ">
                    <div class="dropdown">
                      <i
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="fa-solid fa-user ms-2 fs-4 dropdown-toggle  "
                      ></i>

                      <ul class="dropdown-menu  ">
                        <li>
                          <Link className="dropdown-item" to='/Register'>My Account</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to='/cart'>Cart</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">Whitelist</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">Compare</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">Logout</Link>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>

                <li className="nav-item position-relative">
        <Link className="nav-link">
          <i
            className="fa-solid fa-cart-plus ms-2 fs-4 cart "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ></i>

          <ToggleCart/>
        </Link>
        <div className="badge badgeCart rounded">{cart.length}</div>
      </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>






      {/* toggle search */}

      {modal && (
        <>
          <div className="overlay" onClick={toggleModal}></div>
          <div className=" py-5 search  ">
            <div className="input-group w-50 m-auto">
              <input
                type="text"
                className="form-control search no-outline no-border"
                placeholder="Enter Your Search Keyword..."
                aria-describedby="button-addon2"
              />
              <button
                className="btn  btnSearch "
                type="button"
                id="button-addon2"
              >
                <i className="fa-solid fa-magnifying-glass  "> </i>
              </button>
            </div>
            <div className="txtSearch  mt-3 d-flex justify-content-center">
              <h6>Poupler searches : </h6>
              <p>
                <Link className="ms-1  topSearch">Bed</Link>
              </p>
              <p>
                <Link className="ms-1  topSearch">Chairs</Link>
              </p>
            </div>
            <div className="text-center">
              <i onClick={toggleModal} class="fa-solid fa-xmark x"></i>
            </div>
          </div>
        </>
      )}
    </>
  );
}
