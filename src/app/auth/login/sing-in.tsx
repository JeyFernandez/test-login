"use client";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div className="container">
      <div
        className="
          d-flex
          flex-column
          justify-content-center
          align-items-center
          mt-5
      ">
        <h1 className="mt-5">Iniciar sesión</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div
            className="
            d-flex
            justify-content-center
            align-items-center
            mt-3
          ">
            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
