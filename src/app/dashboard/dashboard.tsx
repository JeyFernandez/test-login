"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Dashboard({ children }: { children: React.ReactNode }) {
  const menu = [
    { texto: "Home", url: "/" },
    { texto: "User", url: "/page/user" },
    { texto: "Roles", url: "/page/roles" },
  ];
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
