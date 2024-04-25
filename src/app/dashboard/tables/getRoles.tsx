"use client";
import Roles from "@/interface/roles.interface";
import fetchData from "@/server/server";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function GetRoles() {
  const [roles, setRoles] = useState<Roles[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getRoles() {
    try {
      const data = await fetchData({
        url: "/api/roles",
        method: "GET",
      });

      setRoles(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }

  useEffect(() => {
    getRoles();
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
        <h1 className="mt-5">Roles</h1>
        <Table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.rol}</td>
                <td>{role.description}</td>
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
