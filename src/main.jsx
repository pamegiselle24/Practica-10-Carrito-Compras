//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CarritoApp } from "./CarritoApp";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

createRoot(document.getElementById("root")).render(
  <ProductosProvider>
    <CarritoProvider>
      <BrowserRouter>
        {/* <StrictMode> */}
        <CarritoApp />
        {/* </StrictMode> */}
      </BrowserRouter>
    </CarritoProvider>
  </ProductosProvider>
);
