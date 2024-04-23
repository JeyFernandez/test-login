"use client";
import React, { useState } from "react";
import fetchData from "@/server/server";
import UserInterface from "@/interface/user.interface";
import Image from "next/image";

import Logo_facebook from "@/assets/icons/facebook_icon.svg";
import Logo_google from "@/assets/icons/google.png";
import Password from "@/assets/icons/security.svg";
import Mail from "@/assets/icons/mail.svg";
import Phone from "@/assets/icons/phone.svg";
import User from "@/assets/icons/user.svg";
import Doctora from "@/assets/img/doctora.png";
import "../../style/login2.css";
export default function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleLogin = (e: any) => {
    e.preventDefault();

    const user: UserInterface = {
      id: 0,
      name,
      email,
      password,
      telefono,
      isActive,
    };

    fetchData({
      url: "/api/user",
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
              <a href="/auth/sign-in">Sign In</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-form">
        <form onSubmit={handleLogin} className="login-form">
          <h2>LOGIN</h2>
          <p>
            Please enter your email and password to log in. If you don't have
          </p>
          <div className="inputs">
            <div className="form-group">
              <Image src={User} alt="icon" className="user-icon" />
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <Image src={Mail} alt="icon" className="user-icon" width={28} />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <Image src={Phone} alt="icon" className="user-icon" />
              <input
                type="text"
                className="form-control"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login Now</button>

            <div className="other-option">
              <div className="google">
                <Image src={Logo_google} alt="Google" className="google-logo" />
                <a href="https://accounts.google.com/" type="button">
                  Login with Google
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
