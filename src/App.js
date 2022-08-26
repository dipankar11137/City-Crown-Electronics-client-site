import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Share/Header";
import Navbar from "./Components/Pages/Share/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <Home /> */}
      {/* <Login /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
