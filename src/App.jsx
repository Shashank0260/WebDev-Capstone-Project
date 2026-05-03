import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertiesPage from "./pages/PropertiesPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;