import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Landing from "./pages/Landing";
import Search from "./pages/Search"
import Login from "./pages/Login";



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
