"use client";
import React, { useState } from "react";
import fetchData from "@/server/server";
import UserAuth from "@/interface/authUser.interface";
import Image from "next/image";

import Logo_facebook from "@/assets/icons/facebook_icon.svg";
import Logo_google from "@/assets/icons/google.png";
import Password from "@/assets/icons/security.svg";
import User from "@/assets/icons/user.svg";
import Doctora from "@/assets/img/doctora.png";
import "../../style/login2.css";
export default function SingUp() {
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
            <button type="submit">Login Now</button>

            <div className="other-option">
              <div className="google">
                <Image src={Logo_google} alt="Google" className="google-logo" />
                <a href="https://accounts.google.com/" type="button">
                  Login with Google
                </a>
              </div>
              <div className="facebook">
                <Image
                  src={Logo_facebook}
                  alt="Facebook"
                  className="facebook-logo"
                />
                <a href="#" type="button">
                  Login with Facebook
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="presentation">
        <div className="cards">
          <div>
            <h2>SICEM</h2>
            <p>
              CONSULTORIO
              <br />
              MÉDICO
            </p>
          </div>
          <div className="button-card">
            <a href="/auth/sign-in">Sign In</a>
            <div className="container-img">
              <Image src={Doctora} alt="doctora" className="doc-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
