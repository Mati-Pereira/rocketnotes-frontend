import { Container } from "./styles";

function ButtonText({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
}

export default ButtonText;
