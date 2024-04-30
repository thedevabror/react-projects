import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { About, Home, Login, NotFound, Signup, Cart, Account } from "./pages";
import { Category, Layout, Product } from "./components";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const logined = sessionStorage.getItem("logined");
  if (logined === "true") {
    <Navigate to={"/dashboard"} />;
  }
  return (
    <div className="transition-all duration-300">
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="cart" element={<Cart />} />
          <Route path="user" element={<Account />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/auth" element={<Layout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Signup />} />
        </Route>
        <Route path="/home" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute isAllowed={logined}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes> */}
      <Routes>
        <Route exact  path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Signup />} />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute logined={logined}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="products/:id" element={<Product />} />
          <Route path="category/:id" element={<Category />} />
          <Route
            path="user"
            element={
              <ProtectedRoute logined={logined}>
                <Account />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
