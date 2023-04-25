import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Policy from "./pages/policy";
import Pagenotfound from "./pages/pagenotfound";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;