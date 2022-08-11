import { FiPlus, FiSearch } from "react-icons/fi";

import Header from "../../components/Header";
import Input from "../../components/Input";
import ButtonText from "../../components/ButtonText";
import Section from "../../components/Section";
import Note from "../../components/Note";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="Todo" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node.js" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo Título" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}

export default Home;
