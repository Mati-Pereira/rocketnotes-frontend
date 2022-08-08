import { Container } from "./styles";

function Button({title, ...rest}) {
  return <Container type="button" {...rest}>{title}</Container>;
}

export default Button;
