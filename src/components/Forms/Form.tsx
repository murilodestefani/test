import { useState } from "react";
import { Filme } from "@pages/Home";

export const Form = () => {
  const [filme, setFilme] = useState<Filme>({ nome: "", anoDeLancamento: "" });

  const podeAdicionar = filme.nome && filme.anoDeLancamento;
  
  return (
    <form>
      <input
        type="text"
        required
        placeholder="Insira o nome do filme"
        value={filme.nome}
        onChange={(e) => setFilme({...filme, nome: e.target.value})}
      />
      <input
        type="text"
        required
        placeholder="Digite o ano de lançamento"
        value={filme.anoDeLancamento}
        onChange={(e) => setFilme({...filme, anoDeLancamento: e.target.value})}
      />
      <button type="submit" disabled={!podeAdicionar}>
        Adicionar
      </button>
    </form>
  )
};
