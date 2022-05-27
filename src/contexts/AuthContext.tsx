import { createContext, useState, useEffect, ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../services/firebase";

export const AuthContext = createContext({} as AuthContextType)

type User = {
    id: string;
    name: string;
    avatar: string | null; 
  }
  
  type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }

type AuthContextProviderProps = {
    children: ReactNode;
}


export function AuthContextProvider(props: AuthContextProviderProps){
    const [user, setUser] = useState<User>()

    useEffect(()=> {
      auth.onAuthStateChanged(user => {
        if(user){
          const {displayName, photoURL, uid} = user
  
          if(!displayName || photoURL){
              throw new Error("Missing info from Google account")
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL 
          })
  
        }
      })
    },[])
  
  
    async function signInWithGoogle(){
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
  
      const result = await signInWithPopup(auth, provider);
  
             if(result.user){
               const {displayName, photoURL, uid} = result.user
  
              if(!displayName || photoURL){
                  throw new Error("Missing info from Google account")
              }
  
              setUser({
                id: uid,
                name: displayName,
                avatar: photoURL 
              })
             }
          }
    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
</AuthContext.Provider>
    )
}





