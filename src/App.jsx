
import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [paciente, setPaciente] = useState({
    nome: "", idade: "", telefone: "", endereco: "",
    objetivo: "", tratamentos: "", insucessos: "", proposta: "", retorno: ""
  });

  const salvar = async () => {
    try {
      await addDoc(collection(db, "pacientes"), {
        ...paciente,
        dataCadastro: new Date().toISOString()
      });
      alert("Paciente salvo!");
    } catch (e) {
      alert("Erro ao salvar.");
      console.error(e);
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "Arial" }}>
      <h1>Cadastro de Paciente - Clínica Vitalité</h1>
      <input placeholder="Nome Completo" value={paciente.nome} onChange={e => setPaciente({ ...paciente, nome: e.target.value })} />
      <input placeholder="Idade" value={paciente.idade} onChange={e => setPaciente({ ...paciente, idade: e.target.value })} />
      <input placeholder="Telefone" value={paciente.telefone} onChange={e => setPaciente({ ...paciente, telefone: e.target.value })} />
      <input placeholder="Endereço" value={paciente.endereco} onChange={e => setPaciente({ ...paciente, endereco: e.target.value })} />
      <textarea placeholder="Objetivo" value={paciente.objetivo} onChange={e => setPaciente({ ...paciente, objetivo: e.target.value })}></textarea>
      <textarea placeholder="Tratamentos já utilizados" value={paciente.tratamentos} onChange={e => setPaciente({ ...paciente, tratamentos: e.target.value })}></textarea>
      <textarea placeholder="Motivos dos insucessos" value={paciente.insucessos} onChange={e => setPaciente({ ...paciente, insucessos: e.target.value })}></textarea>
      <textarea placeholder="Tratamento proposto" value={paciente.proposta} onChange={e => setPaciente({ ...paciente, proposta: e.target.value })}></textarea>
      <input placeholder="Sugestão de data para retorno" value={paciente.retorno} onChange={e => setPaciente({ ...paciente, retorno: e.target.value })} />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={salvar}>Salvar Paciente</button>
      </div>
    </div>
  );
}

export default App;
