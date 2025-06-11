
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
      <button onClick={() => navigate("/paciente")}>Cadastrar Novo Paciente</button>
      <button onClick={() => alert("Em breve: Tela de receita!")}>Criar Receita</button>
      <br/><br/>
      <button onClick={sair}>Sair</button>
    </div>
  );
}
