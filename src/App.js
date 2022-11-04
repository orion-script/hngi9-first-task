import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Footer from "./components/routes/Footer.jsx";
import Contact from "./components/routes/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Footer />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
