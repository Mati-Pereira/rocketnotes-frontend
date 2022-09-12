import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/svgs/avatar_placeholder.svg";

function Header() {
  const { logOut, user } = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <img
          src={
            user.avatar
              ? `${api.defaults.baseURL}/files/${user.avatar}`
              : avatarPlaceholder
          }
          alt="profile"
        />
        <div>
          <span>Bem Vindo </span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={logOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

export default Header;
