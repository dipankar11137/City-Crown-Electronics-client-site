import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import About from "./Components/Pages/About/About";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import ShowAllProducts from "./Components/Pages/Home/ShowAllProducts";
import Header from "./Components/Pages/Share/Header";
import Navbar from "./Components/Pages/Share/Navbar";
import NotFound from "./Components/Pages/Share/NotFound";
import RequireAuth from "./Components/Login/RequireAuth";
import AppleInventory from "./Components/Pages/Home/AppleInventory";
import AppleProductDetails from "./Components/Pages/Home/AppleProductDetails";
import AppleProductsAll from "./Components/Pages/Home/AppleProductsAll";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showAllProducts" element={<ShowAllProducts />} />
        <Route
          path="/blogs"
          element={
            <RequireAuth>
              <Blogs />
            </RequireAuth>
          }
        />
        <Route path="/allAppleProducts" element={<AppleProductsAll />} />
        <Route path="/inventory/:id" element={<AppleInventory />} />
        <Route path="/details/:id" element={<AppleProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
