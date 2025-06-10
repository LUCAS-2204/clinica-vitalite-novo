
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const sair = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Bem-vindo à Clínica Vitalité</h1>
      <button onClick={sair}>Sair</button>
      <p>Aqui aparecerá a tela de cadastro, receitas, etc.</p>
    </div>
  );
}
