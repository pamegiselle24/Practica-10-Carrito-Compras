import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ListProduct } from "../components/ListProduct";

export const ComprasPage = () => {
  const { products, productsFetch } = useProducts();
  const [isLoading, setIsLoading] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await productsFetch();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const addProduct = (product) => {
    setAddedProducts((prev) => [...prev, product]);
  };

  const removeProduct = (product) => {
    setAddedProducts((prev) => [
      ...prev.filter((item) => item.id === product.id),
    ]);
  };

  return (
    <>
      <h1>Compras:</h1>
      <hr />
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <ListProduct
          products={products}
          cartActions={{ addProduct, removeProduct }}
          addedProducts={addedProducts}
        />
      )}
    </>
  );
};

// PREGUNTAR LO DEL BOTON AGREGAR Y QUITAR.
