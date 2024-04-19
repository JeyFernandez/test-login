"use client";
import React, { useState } from "react";
import fetchData from "@/server/server";
import UserAuth from "@/interface/authUser.interface";
import Logo from "../../../../public/img/google.png";
import "../../style/login.css";
import Image from "next/image";

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
      <div className="container-form">
        <form onSubmit={handleLogin} className="login-form">
          <h2>LOGIN</h2>
          <p>
            Please enter your email and password to log in. If you don't have
          </p>
          <div className="inputs">
            <div className="form-group">
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
                <Image src={Logo} alt="Google" className="google-logo" />
                <a href="https://accounts.google.com/" type="button">
                  Login with Google
                </a>
              </div>
              <div className="facebook">
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
          <h2>SICEM</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
}
