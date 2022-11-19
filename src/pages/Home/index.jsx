import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { FiPlus, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Note from "../../components/Note";
import Section from "../../components/Section";
import { api } from "../../services/api";
import {
  Brand,
  Container,
  Content,
  Menu,
  NewNote,
  Search,
  Toggler,
} from "./styles";

function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);
  const [showTags, setShowTags] = useState(false);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([]);
    }
    const alreadySelected = tagsSelected.includes(tagName);
    if (alreadySelected) {
      const filteredTag = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTag);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );
      setNotes(response.data);
    }
    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags && showTags
          ? tags.map((tag) => (
              <li key={String(tag.id)}>
                <ButtonText
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  isActive={tagsSelected.includes(tag.name)}
                />
              </li>
            ))
          : null}
        <Toggler
          onClick={() => {
            setShowTags(!showTags);
          }}
        >
          {showTags ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </Toggler>
      </Menu>
      <Search>
        <Input
          placeholder="Pesquisar pelo Título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      <Content>
        <Section title="Minhas Notas">
          {notes.length ? (
            notes.map((note) => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          ) : (
            <h3
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Não Existe Nota Criada :)
            </h3>
          )}
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}

export default Home;
