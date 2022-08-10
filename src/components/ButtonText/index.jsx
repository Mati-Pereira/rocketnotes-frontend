import { Container } from "./styles";

function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}

export default ButtonText;
