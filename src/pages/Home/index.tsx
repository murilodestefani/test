import { Form } from "../../components/Forms/Form.tsx";

export interface Filme {
  nome: string;
  anoDeLancamento: string;
}

export function Home() {
  return (
    <main>
      <Form />
    </main>
  );
}
