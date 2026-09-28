"use client";

import { useState } from "react";

export default function Home() {
  const [servicos, setServicos] = useState<any[]>([]);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  async function carregarServicos() {
    const response = await fetch("http://localhost:3001/servicos");
    const dados = await response.json();

    setServicos(dados);
  }

  async function cadastrarServico(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/servicos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        valor: Number(valor),
      }),
    });

    const novoServico = await response.json();

    setServicos([...servicos, novoServico]);

    setNome("");
    setValor("");
  }

  async function excluirServico(id: number) {
    await fetch(`http://localhost:3001/servicos/${id}`, {
      method: "DELETE",
    });

    setServicos(
      servicos.filter((servico) => servico.id !== id)
    );
  }

  return (
    <main>
      <h1>PetCare</h1>

      <button onClick={carregarServicos}>
        Carregar Serviços
      </button>

      <form onSubmit={cadastrarServico}>
        <input
          type="text"
          placeholder="Nome do serviço"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <button type="submit">
          Cadastrar Serviço
        </button>
      </form>

      <div>
        {servicos.map((servico) => (
          <div key={servico.id}>
            <p>Nome: {servico.nome}</p>
            <p>Valor: R$ {servico.valor}</p>

            <button
              type="button"
              onClick={() => excluirServico(servico.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}