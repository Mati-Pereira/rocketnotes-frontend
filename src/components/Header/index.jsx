import { Container, Profile } from "./styles";

function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/Mati-Pereira.png" alt="profile" />
        <div>
          <span>Bem Vindo </span>
          <strong>Matheus Rodrigues</strong>
        </div>
      </Profile>
    </Container>
  );
}

export default Header;
