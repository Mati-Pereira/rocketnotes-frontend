import { Container } from "./styles";
import Tag from "../Tag";

function Note({ data, ...rest }) {
  console.log(data)
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}

export default Note;
