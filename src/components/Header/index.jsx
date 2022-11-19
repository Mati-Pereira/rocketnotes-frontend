import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/svgs/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Container, Logout, Profile } from "./styles";

function Header() {
  const navigate = useNavigate();
  const { logOut, user } = useAuth();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
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
      <Logout onClick={handleLogOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

export default Header;
