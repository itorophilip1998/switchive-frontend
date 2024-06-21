"use client"
import React from 'react';
import { FaShoppingCart, FaMoneyBillWave } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../sass/components/product.module.scss'; // Adjust the path as necessary
import { useCart } from '../context/cartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className={`${styles.product} shadow-sm`}>
      <Image src={product.thumbnail} alt={product.title} width="200" height="190" />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>${product.price}</div>
      <div className={styles.actions}>

        <button className={styles.addToCart+' btn-secondary shadow'} onClick={() =>addToCart(product)}>
          <FaShoppingCart /> Add to Cart
        </button>
        
      </div>
      {/* <div className="d-flex">
      <button className='btn px-4 mx-3 btn-secondary' onClick={() =>removeFromCart()}>
          -
        </button>
        <input type="number" className='form-control shadow-none text-center'  />
        <button  className='btn px-4 mx-3 btn-secondary ' onClick={() => addToCart()}>
           +
        </button>
      </div> */}
    </div>
  );
};

export default ProductCard;
