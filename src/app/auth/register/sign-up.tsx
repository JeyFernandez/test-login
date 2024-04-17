"use client";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Contraseña", password);
    console.log("Confirmar contraseña", passwordConfirmation);
    console.log("Teléfono", phone);
  };

  function validPassword() {
    try {
      if (password === passwordConfirmation) {
        return true;
      } else {
        alert("Las contraseñas no coinciden");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    validPassword();
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
        <h1 className="mt-5">Registrarse</h1>
        <Form
          onSubmit={handleSubmit}
          className="
            d-flex
            flex-column
            justify-content-center
            align-items-center
            mt-5">
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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

          <Form.Group controlId="passwordConfirmation">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ingresa tu número de teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Text className="text-muted">
            Nunca compartiremos tu información con nadie más.
          </Form.Text>
          <div
            className="
            d-flex
            justify-content-center
            align-items-center
            mt-3
          ">
            <Button variant="primary" type="submit" onClick={onClick}>
              Registrarse
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
