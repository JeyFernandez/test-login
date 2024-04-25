// Menu.js
import React from "react";

const Menu = () => {
  return (
    <div className="h-screen w-1/5 bg-gray-300">
      {/* Aquí puedes agregar los enlaces a las diferentes vistas */}
      <ul>
        <li>
          <a href="/page/user">Usuarios</a>
        </li>
        <li>
          <a href="/page/roles">Roles</a>
        </li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </div>
  );
};

export default Menu;
