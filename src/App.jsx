import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<ProductPage />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
