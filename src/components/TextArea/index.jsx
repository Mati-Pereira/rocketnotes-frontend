import { Container } from "./styles";

function TextArea({ value, ...rest }) {
  return <Container {...rest}>{value}</Container>;
}

export default TextArea;
