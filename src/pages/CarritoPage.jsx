import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { addedProducts, cartActions, increaseQuantity } =
    useContext(CarritoContext);
  const { removeProduct } = cartActions;
  let quantity = 1;
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {addedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => increaseQuantity(product)}
                >
                  {quantity}
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeProduct(product)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary">
          Comprar
        </button>
      </div>
    </>
  );
};
