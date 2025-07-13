import { CarritoContext } from "../context/CarritoContext";
const initialState = [];

export const CarritoProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState([]);

  const addProduct = (product) => {
    setAddedProducts((prev) => [...prev, product]);
  };

  const removeProduct = (product) => {
    setAddedProducts((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <CarritoContext.Provider
      value={{ addedProducts, cartActions: { addProduct, removeProduct } }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
