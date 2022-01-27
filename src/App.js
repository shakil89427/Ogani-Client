import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Home/Main";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/Signup";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/Details/Details";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Shop from "./Components/Shop/Shop";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Dashboard from "./Components/Profile/Dashboard";
import NotFound from "./Components/NotFound/NotFound";
import Checkout from "./Components/Checkout/Checkout";
import PrivateRoute from "./Components/AuthProvider/PrivateRoute";
import Reset from "./Components/LoginSignup/Reset";
import ResetInit from "./Components/LoginSignup/ResetInit";
import PendingOrders from "./Components/Profile/PendingOrders";
import CompletedOrders from "./Components/Profile/CompletedOrders";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="mainapp">
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resetinit" element={<ResetInit />} />
              <Route path="/reset/:id" element={<Reset />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              >
                <Route path="pending" element={<PendingOrders />} />
                <Route path="completed" element={<CompletedOrders />} />
              </Route>
              <Route
                path="/checkout"
                element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
