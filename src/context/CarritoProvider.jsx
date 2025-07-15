import { CarritoContext } from "../context/CarritoContext";
import { useReducer } from "react";
const initialState = [];

const comprasReducer = (state, action) => {
  switch (action.type) {
    case "[CARRITO] Agregar Producto":
      return [...state, action.payload];

    case "[CARRITO] Aumentar Cantidad":
      return state.map((item) => [
        ...state,
        item.quantity === action.payload.quantity,
      ]);

    case "[CARRITO] Disminuir Cantidad":
      return [...state];

    case "[CARRITO] Quitar Producto":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [addedProducts, dispatch] = useReducer(comprasReducer, initialState);

  const addProduct = (product) => {
    dispatch({
      type: "[CARRITO] Agregar Producto",
      payload: { ...product, quantity: 1 },
    });
  };

  const removeProduct = (product) => {
    dispatch({ type: "[CARRITO] Quitar Producto", payload: product });
  };

  const increaseQuantity = (product) => {
    dispatch({ type: "[CARRITO] Aumentar Cantidad", payload: product });
  };

  return (
    <CarritoContext.Provider
      value={{
        addedProducts,
        cartActions: { addProduct, removeProduct },
        increaseQuantity,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
