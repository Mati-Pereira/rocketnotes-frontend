import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { Background, Container, Form } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { LineWobble } from "@uiball/loaders";
import React, { useState } from "react";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = ({ email, password }) => {
    setIsLoading(true);
    signIn({
      email,
      password,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  };
  const { signIn } = useAuth();

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Email"
              type="text"
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
            "Entrar"
          )}
        </Button>
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
};

export default Signin;
