import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Landing from "./pages/Landing";



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
