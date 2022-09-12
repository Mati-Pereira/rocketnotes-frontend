import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

function Header() {
  const { logOut } = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Mati-Pereira.png" alt="profile" />
        <div>
          <span>Bem Vindo </span>
          <strong>Matheus Rodrigues</strong>
        </div>
      </Profile>
      <Logout onClick={logOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

export default Header;
