import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Home/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/Details/Details";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Shop from "./Components/Shop/Shop";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="mainapp">
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="details/:id" element={<Details />} />
              <Route path="shop" element={<Shop />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
