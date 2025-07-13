import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductosContext } from "../context/ProductosContext";

export const ProductosProvider = ({ children }) => {
  const { products, productsFetch } = useProducts();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await productsFetch();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ProductosContext.Provider value={{ products, isLoading, productsFetch }}>
      {children}
    </ProductosContext.Provider>
  );
};
