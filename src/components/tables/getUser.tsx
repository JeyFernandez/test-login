"use client";
import User from "@/interface/user.interface";
import fetchData from "@/server/server";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function GetUser() {
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function getUsers() {
    try {
      const data = await fetchData({
        url: "/api/user",
        method: "GET",
      });

      setUsers(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
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
        <Table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Activo</th>
              <th scope="col">Roles</th>
              <th scope="col">Options</th>
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
                <td>{user.roles?.map((role) => role.rol).join(", ")}</td>
                <td>
                  <button className="btn btn-warning">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
            {isLoading && (
              <tr>
                <td colSpan={4} className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default GetUser;
