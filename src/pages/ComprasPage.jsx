import { useContext } from "react";
import { ListProduct } from "../components/ListProduct";
import { ProductosContext } from "../context/ProductosContext";

export const ComprasPage = () => {
  const { isLoading } = useContext(ProductosContext);

  return (
    <>
      <h1>Compras:</h1>
      <hr />
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <ListProduct />
      )}
    </>
  );
};
