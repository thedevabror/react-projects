import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { About, Home, Login, NotFound, Signup, Cart, Account } from "./pages";
import { Category, Layout, Product } from "./components";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import RouteLogin from "./routes/RouteLogin";

function App() {
  const logined = sessionStorage.getItem("logined");
  if (logined === "true") {
    <Navigate to={"/dashboard"} />;
  }
  return (
    <div className="transition-all duration-300">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="user"
            element={
              <ProtectedRoute logined={logined}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="products/:id" element={<Product />} />
          <Route path="category/:id" element={<Category />} />
          <Route
            path="/auth/login"
            element={
              <RouteLogin logined={logined}>
                <Login />
              </RouteLogin>
            }
          />
          <Route
            path="/auth/register"
            element={
              <RouteLogin logined={logined}>
                <Signup />
              </RouteLogin>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
