import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Home, Login, NotFound, Signup } from "./pages";
import { Layout } from "./components";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="transition-all duration-300">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
