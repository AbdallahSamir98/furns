import React from 'react'
import allProuducts from '../../Data/allProducts.json'
import ProductCard from '../Products/ProductCard'


export default function AllProducts() {
  return (
    <div className='container'>
        <h2 className='text-center m-5' >
            Our Products
        </h2>
<div className="row">
{allProuducts.map((products ,idx) => 
             <ProductCard products={products} key={idx}/>           
            )}
</div>

          </div>
   
  )
}
