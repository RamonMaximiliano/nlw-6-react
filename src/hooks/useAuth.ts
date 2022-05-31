import {AuthContext} from "../contexts/AuthContext"
import { createContext, useState, useEffect, useContext } from 'react'

export function useAuth(){
     const value = useContext(AuthContext)

     return value;
}