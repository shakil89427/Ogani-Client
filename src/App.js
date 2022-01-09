import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Home/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="mainapp">
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
