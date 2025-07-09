import "../styleSheets/card.css";

export const ListProduct = ({ products, cartActions, addedProducts }) => {
  const { addProduct, removeProduct } = cartActions;
  console.log(addedProducts);
  return (
    <>
      <div className="list-container-card">
        {products.map((product) => (
          <div key={product.id} className="card" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-price">{product.price}</p>
            </div>
            <button
              type="button"
              onClick={(product) =>
                product.id ? removeProduct(product) : addProduct(product)
              }
            >
              {addedProducts.find((item) => item.id === product.id)
                ? "Eliminar"
                : "Agregar"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
