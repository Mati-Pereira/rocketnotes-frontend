import { Container, Links, Content } from "./styles";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Tag from "../../components/Tag";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            corporis accusantium ab. Et accusamus aut excepturi molestiae in
            corporis nisi, ea, neque eius temporibus eligendi, enim accusantium
            repudiandae itaque earum animi perferendis? Voluptates dignissimos
            voluptatem nulla explicabo esse eum omnis reiciendis soluta amet
            maiores, delectus quas optio alias corrupti in a velit voluptatum
            nostrum perferendis aliquam. Expedita commodi doloremque aspernatur
            magni voluptas voluptatum, ipsa nemo omnis perspiciatis dicta quae
            ab numquam provident atque esse culpa! Nulla, odio perspiciatis
            suscipit, laboriosam hic sed dolore culpa consequuntur quasi illo
            soluta! Velit rem iusto nemo sed officia, ipsam voluptate excepturi
            beatae omnis fugit?
          </p>
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
        </Content>
      </main>
    </Container>
  );
}

export default App;
