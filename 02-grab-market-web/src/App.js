import "./App.css";
import MainPageComponent from "./main/index.js";
import { Route, Routes } from "react-router-dom";

import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPageComponent />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/upload" element={<UploadPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
