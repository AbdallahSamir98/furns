import React from "react";

import allProuducts from '../../Data/allProducts.json'
import Featured from "./Features";
import OnSale from "./OnSale";
import ProductCard from "./ProductCard";
import "./products.css";
import Trend from "./Trend";

export default function Products() {
  
  
  
   
  
  
    return (
    <>
      <div className="container mt-5">
        <div className="productHeader text-center pt-5">
          <h2 className="my-4">Our Products</h2>
          <p className="fs-5 text-muted">
            This is the most highly requested product to date <br /> We are
            excited and proud to announce the launch of our premier line!.
          </p>
        </div>

        <div className=" col-md-12   ">
        <div className="productList   ">


<ul className="nav nav-tabs d-flex justify-content-center " id="myTab" role="tablist">
<li className="nav-item fs-5 mb-2" role="presentation">
<button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">New Arrival</button>
</li>
<li className="nav-item fs-5 mb-2" role="presentation">
<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Featured</button>
</li>
<li className="nav-item fs-5 mb-2" role="presentation">
<button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">On Sale</button>
</li>
<li className="nav-item fs-5 mb-2" role="presentation">
<button class="nav-link" id="trend-tab" data-bs-toggle="tab" data-bs-target="#trend-tab-pane" type="button" role="tab" aria-controls="trend-tab-pane" aria-selected="false">Trending</button>
</li>

</ul>
<div className="tab-content" id="myTabContent">
<div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <div className="container">
    
    
    <div className="row ">
            {allProuducts.map((products ,idx) => 
             <ProductCard products={products} key={idx}/>           
            ).slice(0,8)}
          </div>

          
    </div>
    </div>
<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
  

<div className="container">
    
    
    <div className="row ">
             
            {allProuducts.map((products ,idx) => 
             <Featured products={products} key={idx}/>           
            )}
          </div>

          
    </div>
</div>
<div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
<div className="container">
    
    
    <div className="row ">
             
            {allProuducts.map((products ,idx) => 
             <OnSale products={products} key={idx}/>           
            )}
          </div>

          
    </div>
</div>
<div class="tab-pane fade" id="trend-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
  
<div className="container">
    
    
    <div className="row ">
             
            {allProuducts.map((products ,idx) => 
             <Trend products={products} key={idx}/>           
            )}
          </div>

          
    </div>
</div>
</div>

</div>



         

                        
        </div>
   
      </div>





                
    </>
  );
}
