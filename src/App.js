import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Home, Login, NotFound, Signup, Cart, Account } from "./pages";
import { Category, Layout, Product } from "./components";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="transition-all duration-300">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user" element={<Account />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
