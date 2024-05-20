import { render } from "@testing-library/react";
import { Form } from "@components/Forms/Form";

test("Se os campos estiverem vazios, o botão deve estar desabilitado", () => {
  // ASSERT - aqui organizamos as variáveis do teste

  // importa funções e renderiza o componente Formulário
  const { getByPlaceholderText, getByRole } = render(<Form />);

  // buscar inputs via placeholder
  const inputNome = getByPlaceholderText("Insira o nome do filme");
  const inputAnoDeLancamento = getByPlaceholderText("Digite o ano de lançamento");

  // captura do botão enviar
  const botaoAdicionar = getByRole("button");

  expect(inputNome).toBeInTheDocument();
  expect(inputAnoDeLancamento).toBeInTheDocument();

  expect(botaoAdicionar).toBeDisabled();

  // ACT - simulação das ações de teste

  // ASSERT - testa as execuções e resultados obtidos
});
