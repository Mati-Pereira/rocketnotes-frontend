import { Container, Form, Background } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";
import { Controller, useForm } from "react-hook-form";
import { LineWobble } from "@uiball/loaders";

function Signup() {
  // name, email, password
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async ({ name, email, password }) => {
    try {
      setIsLoading(true);
      await api.post("/users", { name, email, password });
      alert("Cadastro realizado com sucesso!");
      navigate(-1);
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro no cadastro!");
      }
    }
  };

  return (
    <Container>
      <Background />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Name"
              type="text"
              icon={FiUser}
              onChange={onChange}
              value={value}
              required
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Email"
              type="email"
              icon={FiMail}
              onChange={onChange}
              value={value}
              required
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Password"
              type="password"
              icon={FiLock}
              onChange={onChange}
              value={value}
              required
            />
          )}
          name="password"
        />
        <Button type="submit">
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <LineWobble size={30} lineWeight={5} speed={2} color="black" />
            </div>
          ) : (
            "Cadastrar"
          )}
        </Button>
        <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  );
}

export default Signup;
