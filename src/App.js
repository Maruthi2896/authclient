import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Navbar from "./components/navbar";
import Login from "./Pages/login";
import SignUp from "./Pages/signUp";
import Account from "./Pages/account";
function App() {
  const isUserloggedIn = !!localStorage.getItem("token");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {isUserloggedIn && <Route path="/account" element={<Account />} />}
      </Routes>
    </div>
  );
}

export default App;
