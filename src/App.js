import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Home, Login, NotFound, Cart, Account, OrderDetails } from "./pages";
import { Category, Layout, Product } from "./components";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import SignUp from "./pages/SignUp";
import AllProducts from "./components/AllProducts";

function App() {
  return (
    <div className="transition-all duration-300">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="user"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
          <Route
            path="order-details"
            element={
              <PrivateRoute>
                <OrderDetails />
              </PrivateRoute>
            }
          />
          <Route path="products/:id" element={<Product />} />
          <Route path="category/:id" element={<Category />} />
          <Route
            path="/auth/login"
            element={<PublicRoute component={<Login />} />}
          />
          <Route
            path="/auth/register"
            element={<PublicRoute component={<SignUp />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
