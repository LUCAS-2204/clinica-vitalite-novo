
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CadastroPaciente from "./pages/CadastroPaciente";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCarregando(false);
    });
  }, []);

  if (carregando) return <p>Carregando...</p>;

  return (
    <Routes>
      <Route path="/" element={usuario ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/paciente" element={usuario ? <CadastroPaciente /> : <Navigate to="/login" />} />
    </Routes>
  );
}
