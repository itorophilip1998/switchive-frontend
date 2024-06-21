"use client"
import Image from "next/image";
import {  useCart } from '../context/cartContext';
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../sass/components/product.module.scss'; // Adjust the path as necessary

const Header = () => {
  const {cart} = useCart();
 
  return (
    <nav className="navbar bg-white  shadow-sm fixed-top ">
  <div className="container ">
    <a className="navbar-brand" href="#">
      <Image src="/logo.png" alt="Logo" width="45" height="35" class="d-inline-block align-text-center"/>
     <span className="logo1">Swit</span><span className="logo2">chive</span>
    </a>

    <form class="d-flex" role="search"> 
        <button class="btn btn-outline-danger" type="submit">
        <div className={styles.cartIcon}>
            <FaShoppingCart />
            {cart?.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
          </div>
        </button>
      </form>
  </div>
</nav>
  );
};

export default Header;
