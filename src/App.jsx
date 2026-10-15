import {Route, Routes } from "react-router";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
