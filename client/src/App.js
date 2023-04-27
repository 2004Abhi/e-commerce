import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Policy from "./pages/policy";
import Pagenotfound from "./pages/pagenotfound";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import PrivateRoute from "./components/Routes/private";
import Dashboard from "./pages/user/dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
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