"use client";
import User from "@/interface/user.interface";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function GetUser() {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    const response = await fetch("http://localhost:3001/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData);
    setUsers(responseData);

    return responseData;
  }
  getUsers();

  return (
    <Table striped bordered hover>
      {/* Table headers */}
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo electrónico</th>
          <th>Teléfono</th>
          <th>Activo</th>
          <th>Roles</th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.telefono}</td>
            <td>{user.isActive ? "Sí" : "No"}</td>
            <td>{user.roles}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default GetUser;
