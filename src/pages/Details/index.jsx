import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Tag from "../../components/Tag";
import { Container, Content, Links } from "./styles";

import { api } from "../../services/api";

function App() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja Realmente Remover a Nota?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="excluir nota" onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links && (
              <Section title="Links Úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a target="_blank" href={link.url}>
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}

export default App;
