import { Container, Links } from "./styles";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Tag from "../../components/Tag";

function App() {
  return (
    <Container>
      <Header />

      <ButtonText title="excluir nota" />
      <Section title="Links Úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br</a>
          </li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title="Express" />
        <Tag title="Node" />
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}

export default App;
