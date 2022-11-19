import { useState } from "react";

import { Link } from "react-router-dom";

import { FiLock, FiMail } from "react-icons/fi";
import { Background, Container, Form } from "./styles";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { useAuth } from "../../hooks/auth";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({
      email,
      password,
    });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}

export default Signin;
