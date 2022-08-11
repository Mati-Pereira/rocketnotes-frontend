import { Container } from "./styles";

function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20}/>}
      <input {...rest} />
    </Container>
  );
}

export default Input;
