import logo from "./logo.svg";
import { Routes } from "react-router-dom"

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />}
        </Routes>
      <Footer />
    </>
  );
}

export default App;
