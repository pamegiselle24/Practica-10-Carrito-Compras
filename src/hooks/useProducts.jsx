import { useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const productsFetch = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data); // ELIMINAR ESTO ANTES DE TERMINAR
      setProducts(data);
    } catch (error) {
      console.error("Se produjo el error: " + error);
    }
  };
  return { products, productsFetch };
};
