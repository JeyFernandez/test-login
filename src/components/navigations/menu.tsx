import React from "react";
import Link from "next/link";

export default function Dashboard() {
  const menu = [
    { texto: "Users", url: "/page/user" },
    { texto: "Roles", url: "/page/roles" },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="position-sticky">
            <div className="list-group">
              {menu.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  className="list-group-item list-group-item-action">
                  {item.texto}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
          <h2>Dashboard</h2>
        </main>
      </div>
    </div>
  );
}
