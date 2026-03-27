"use client";
import { useState } from "react";

export default function App() {
  const [eventos, setEventos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    equipamento: "",
    data: "",
    status: "Em execução",
  });

  function adicionarEvento() {
    if (!form.nome || !form.equipamento || !form.data) return;
    setEventos([...eventos, form]);
    setForm({
      nome: "",
      equipamento: "",
      data: "",
      status: "Em execução",
    });
  }

  function removerEvento(index) {
    const novos = eventos.filter((_, i) => i !== index);
    setEventos(novos);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Calendário da Equipe</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <br />

        <input
          placeholder="Equipamento"
          value={form.equipamento}
          onChange={(e) =>
            setForm({ ...form, equipamento: e.target.value })
          }
        />
        <br />

        <input
          type="date"
          value={form.data}
          onChange={(e) => setForm({ ...form, data: e.target.value })}
        />
        <br />

        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Em execução</option>
          <option>Finalizado</option>
          <option>Aguardando</option>
        </select>
        <br />

        <button onClick={adicionarEvento}>Adicionar</button>
      </div>

      {eventos.map((e, i) => (
        <div key={i} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <strong>{e.nome}</strong>
          <p>Equipamento: {e.equipamento}</p>
          <p>Data: {e.data}</p>
          <p>Status: {e.status}</p>

          <button onClick={() => removerEvento(i)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}