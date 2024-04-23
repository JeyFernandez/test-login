"use client";
import React, { useState } from "react";
import fetchData from "@/server/server";
import UserAuth from "@/interface/authUser.interface";
import Image from "next/image";

import Logo_google from "@/assets/icons/google.png";
import Password from "@/assets/icons/security.svg";
import User from "@/assets/icons/user.svg";
import Doctora from "@/assets/img/doctora.png";
import "../../style/login.css";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    const user: UserAuth = {
      email,
      password,
    };

    fetchData({
      url: "/api/auth/login",
      method: "POST",
      body: user,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-container">
      <div className="presentation">
        <div className="cards">
          <div>
            <h2>EBEN-EZER</h2>
            <p>Agenda tu cita con nosotros y recibe la mejor atención médica</p>
          </div>
          <div className="button-card">
            <div className="container-img">
              <Image src={Doctora} alt="doctora" className="doc-image" />
            </div>
            <div className="btn-signup">
              <a href="/auth/sign-up">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-form">
        <form onSubmit={handleLogin} className="login-form">
          <h2>INICIAR SESION</h2>
          <p>
            Por favor ingrese su correo electrónico y contraseña para iniciar
            sesión.
          </p>
          <div className="inputs">
            <div className="form-group">
              <Image src={User} alt="icon" className="user-icon" />
              <input
                type="email"
                className="form-control"
                placeholder="correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <Image src={Password} alt="icon" className="user-icon" />
              <input
                type="password"
                className="form-control"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Iniciar Sesión</button>

            <div className="other-option">
              <div className="google">
                <Image src={Logo_google} alt="Google" className="google-logo" />
                <a href="https://accounts.google.com/" type="button">
                  Iniciar sesión con Google
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
