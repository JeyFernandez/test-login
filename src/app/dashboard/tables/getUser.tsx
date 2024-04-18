"use client";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  telefono: string;
  isActive: boolean;
  roles: string[];
}

function GetUser() {
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function getUsers() {
    const response = await fetch("/api/user", {
      method: "GET",
    });
    const responseData = await response.json();
    console.log(responseData);
    setUsers(responseData);
    setIsLoading(false);

    return responseData;
  }

  useEffect(() => {
    getUsers();
  }, []);

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
        <h1 className="mt-5">Usuarios</h1>
        <Table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Activo</th>
              <th scope="col">Roles</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.telefono}</td>
                <td>{user.isActive ? "Sí" : "No"}</td>
                <td>{user.roles.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default GetUser;
