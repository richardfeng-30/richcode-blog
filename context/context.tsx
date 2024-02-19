'use client'
import { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

interface ContextProps{
    children: React.ReactNode;
}

export function UserProvider({ children }: ContextProps) {
  const [state, setState] = useState({
    email: "",
    valid: false
  });
  return (
    <UserContext.Provider value={{ state, setState}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserProvider = () => useContext(UserContext);
