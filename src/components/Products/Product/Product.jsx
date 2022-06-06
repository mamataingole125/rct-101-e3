import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import styles from "../Product.module.css"
const Product = () => {
  // Note: this id should come from api
  const product = { id: 1 };
  const [data,setdata]=useState([])
  const [count,setCount]=useState(0)

  useEffect(()=>{

   
    axios.get("http://localhost:8080/products")
    .then((res)=>{
      setdata(res.data)
      console.log(res.data)
    })


  },[])

  return (
    <>
    {data.map((item)=>(
    <div data-cy={`product-${product.id}`} className={styles.main} >
       
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
       
      </div>
     
    </div>
     ))}
    </>
  );
};

export default Product;
