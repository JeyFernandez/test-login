"use client";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  const menu = [
    { texto: "Users", url: "/page/user" },
    { texto: "Roles", url: "/page/roles" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const token = localStorage.getItem("token");

  useEffect(() => {}, [isClient]);

  return (
    <div className="flex">
      <nav className="w-64 bg-gray-800 text-white p-6">
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.texto}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}
