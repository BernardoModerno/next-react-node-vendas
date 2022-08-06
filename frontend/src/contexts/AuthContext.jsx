import { createContext, ReactNode, useState } from 'react';

export const AuthContext = createContext({})

export function AuthProvider({ children }){
  const [user, setUser] = useState()
  const isAuthenticated = !!user;

  async function signIn({ email, password }){
    console.log("DADOS PARA LOGAR ", email)
    console.log("SENHA ", password)
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
} 