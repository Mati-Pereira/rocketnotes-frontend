import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Mati-Pereira.png" alt="profile" />
        <div>
          <span>Bem Vindo </span>
          <strong>Matheus Rodrigues</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

export default Header;
