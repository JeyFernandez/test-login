"use client";
import Link from "next/link";
export default function Layout({ children }: { children: React.ReactNode }) {
  const menu = [
    { texto: "Users", url: "/page/user" },
    { texto: "Roles", url: "/page/roles" },
  ];

  return (
    <div>
      <nav>
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.texto}</Link>
          </li>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
}
