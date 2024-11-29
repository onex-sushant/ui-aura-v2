import React, { createContext, useState } from "react";

export const RoleContext = createContext();

const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: [true, true, true, true, true, true] },
    {
      id: 2,
      name: "Manager",
      permissions: [true, true, true, true, true, true],
    },
    {
      id: 3,
      name: "Agent",
      permissions: [true, true, false, true, true, true],
    },
    // Add more roles as needed
  ]);

  return (
    <RoleContext.Provider value={{ roles, setRoles }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
