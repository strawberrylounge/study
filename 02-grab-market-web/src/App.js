import "./App.css";
import MainPageComponent from "./main/index.js";
import { Route, Routes, Link } from "react-router-dom";

import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="" />
          </Link>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/upload" eleme nt={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
