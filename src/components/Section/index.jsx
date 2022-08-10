import { Container } from "./styles";

function Section({ title, children }) {
  return (
    <Container type="button">
      <h2>{title}</h2>
      {children}
    </Container>
  );
}

export default Section;
