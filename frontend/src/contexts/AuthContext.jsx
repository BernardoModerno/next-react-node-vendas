import { createContext, ReactNode, useState } from 'react';
import { destroyCookie } from 'nookies'
import Router from 'next/router';

export const AuthContext = createContext({})

export function signOut(){
    try{
      destroyCookie(undefined, '@nextauth.token')
      Router.push('/')
    }catch{
      console.log('erro ao deslogar')
    }
  }

export function AuthProvider({ children }){
  const [user, setUser] = useState()
  const isAuthenticated = !!user;

  async function signIn({ email, password }){
    console.log("DADOS PARA LOGAR ", email)
    console.log("SENHA ", password)
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
} 