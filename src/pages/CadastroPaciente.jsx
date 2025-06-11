
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function CadastroPaciente() {
  const [dados, setDados] = useState({
    nome: "",
    idade: "",
    sexo: "",
    telefone: "",
    endereco: "",
    queixa: "",
    historico: "",
    protocolo: "",
    retorno: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const salvar = async () => {
    try {
      await addDoc(collection(db, "pacientes"), dados);
      alert("Paciente cadastrado com sucesso!");
      navigate("/");
    } catch (err) {
      alert("Erro ao salvar paciente.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      <h2>Cadastro de Paciente</h2>
      {Object.keys(dados).map((campo) => (
        <input key={campo} name={campo} placeholder={campo} value={dados[campo]} onChange={handleChange} style={{ display: "block", marginBottom: "1rem", width: "100%" }} />
      ))}
      <button onClick={salvar}>Salvar Paciente</button>
    </div>
  );
}
