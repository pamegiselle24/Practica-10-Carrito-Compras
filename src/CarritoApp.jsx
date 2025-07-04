import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CarritoPage } from "./pages/CarritoPage";
import { ComprasPage } from "./pages/ComprasPage";

export const CarritoApp = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ComprasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};
