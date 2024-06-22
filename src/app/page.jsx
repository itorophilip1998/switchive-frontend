"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import styles from "../sass/components/product.module.scss"; 
import { getDummyJson } from "../utils/api";

const ProductCard = dynamic(() => import("../components/ProductCard"), { ssr: false });

export default function ProductsPage({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getDummyJson(); 
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [initialProducts]);
  
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleFilter = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 300),
    []
  );

  const handleSortChange = useCallback((sortValue) => {
    setSort(sortValue);
  }, []);

  const filteredProductsMemo = useMemo(() => {
    let filtered = products?.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sort === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, searchTerm, sort]);

  useEffect(() => {
    setFilteredProducts(filteredProductsMemo);
  }, [filteredProductsMemo]);

  return (
    <div className={`${styles.products} container`}> 
      <div className={`${styles.filters} row `}>
       <div className="col-9">
       <input
          type="search"
          placeholder="Search Products"
          onChange={(e) => handleFilter(e.target.value)}
          className="form-control shadow-sm"
        />
       </div>
       <div className="col-3">
          
       <select value={sort} onChange={(e) => handleSortChange(e.target.value)}  className="form-select shadow-sm">
          <option value="" selected>Sort By Price</option>
          <option value="asc">Low Price</option>
          <option value="desc">High Price</option>
        </select>
       </div>
      </div>
      <div className={styles.productGrid}>
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
 