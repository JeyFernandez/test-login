import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Button } from "react-bootstrap";
function WelcomePage() {
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
        <Image
          src={Logo}
          alt="Logo"
          width={200}
          height={200}
          className="mb-3"
        />
        <h1 className="mt-5">¡Bienvenido a la aplicación!</h1>
      </div>

      <div
        className="
          d-flex
          flex-column
          justify-content-center
          align-items-center
          mt-5
      ">
        <p>
          Esta es una aplicación de ejemplo para mostrar cómo se puede
          implementar un sistema de autenticación con React y TypeScript.
        </p>

        <Button variant="primary" href="/auth/login" className="ml-3">
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
}

export default WelcomePage;
