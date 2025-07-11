import "../styleSheets/card.css";

export const ListProduct = ({ products, cartActions, addedProducts }) => {
  const { addProduct, removeProduct } = cartActions;
  console.log(addedProducts);
  return (
    <>
      <div className="list-container-card">
        {products.map((product) => {
          const isAdded = addedProducts.some((item) => item.id === product.id);
          const handleClick = isAdded ? removeProduct : addProduct;
          const buttonText = isAdded ? "Eliminar" : "Agregar";
          return (
            <div key={product.id} className="card" style={{ width: "18rem" }}>
              <img
                src={product.image}
                className="card-img"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-price">$ {product.price}</p>
              </div>
              <button
                type="button"
                className={isAdded ? "btn btn-quit" : "btn btn-add"}
                onClick={() => handleClick(product)}
              >
                {buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
