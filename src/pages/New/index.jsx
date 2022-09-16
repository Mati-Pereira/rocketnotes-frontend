import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import Header from "../../components/Header";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import NoteItem from "../../components/NoteItem";
import Section from "../../components/Section";
import Button from "../../components/Button";

import { Container, Form } from "./styles";

function New() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((link) => link !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Não foi colocado um título");
    }

    if (!description) {
      return alert("Não foi colocado uma descrição");
    }

    if (newTag) {
      return alert(
        "Você deixou uma ou mais no campo para adicionar, mas não clicou em adicionar"
      );
    }

    if (newLink) {
      return alert(
        "Você deixou uma ou mais no campo para adicionar, mas não clicou em adicionar"
      );
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nova Nota Adicionada");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                placeholder="Nova Marcador"
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}

export default New;
