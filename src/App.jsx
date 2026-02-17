import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import View from "./components/View/View";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("token"));

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/register" element={<Register onLogin={handleLogin} />} />
        <Route path="*" element={<Login onLogin={handleLogin} />} />
      </Routes>
    );
  }

  return (
    <>
      <Header onLogout={handleLogout} />
      <Nav />
      <View />
    </>
  );
}
