import React from "react";

function WelcomePage() {
  return (
    <div className="container">
      <h1 className="mt-5">Bienvenido a SICEM</h1>
      <p className="lead">El sistema de citas médicas</p>
      <p>¡Agenda tus citas de manera rápida y sencilla!</p>
      {/* btn go to login */}
      <div
        className="
          d-flex
          justify-content-center
          align-items-center
          mt-3
        ">
        <a href="/auth/login" className="btn btn-primary">
          Iniciar sesión
        </a>
      </div>
    </div>
  );
}

export default WelcomePage;
