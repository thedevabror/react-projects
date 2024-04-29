import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { About, Home, Login, NotFound, Signup, Cart, Account } from "./pages";
import { Category, Layout, Product } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/auth/login",
  children,
}) => {
  if (isAllowed == false || isAllowed?.length < 1 || isAllowed == null) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

function App() {
  // const { logined } = useSelector((state) => state.auth);
  const logined = sessionStorage.getItem("logined")
  return (
    <div className="transition-all duration-300">
      {/* <Layout /> */}
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
