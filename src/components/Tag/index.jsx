import { Container } from "./styles";

function Tag({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}

export default Tag;
