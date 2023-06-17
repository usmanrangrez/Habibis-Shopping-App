import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//no need to import these 2 now
// import Header from "./components/Header";
// import Footer from "./components/Footer";

//instead we import
import MainLayout from "./pages/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
