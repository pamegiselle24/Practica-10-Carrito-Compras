import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import "../styleSheets/styleSheet.css";

export const ComprasPage = () => {
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
    <>
      <h1>Compras:</h1>
      <hr />
      <div className="container-products">
        {isLoading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="card" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-price">{product.price}</p>
                <a href="#" className="btn-add">
                  Go somewhere
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
// TO

// HACER EL COMPONENTE CARD Y LA HOJA DE ESTILOS SEPARADA.
// PREGUNTAR LO DEL BOTON AGREGAR Y QUITAR.
