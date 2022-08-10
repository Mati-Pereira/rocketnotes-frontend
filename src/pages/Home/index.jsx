import Header from "../../components/Header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import ButtonText from "../../components/ButtonText";

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

      <Search></Search>
      <Content></Content>
      <NewNote></NewNote>
    </Container>
  );
}

export default Home;
