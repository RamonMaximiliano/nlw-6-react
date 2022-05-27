import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext, useState, useEffect } from 'react'
import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"
import { AuthContextProvider } from "./contexts/AuthContext"
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import './services/firebase'
import { auth } from "./services/firebase";

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
        </AuthContextProvider>

    </BrowserRouter>
  );
}

export default App;


// old - v5 <Route exact path="/" component={Home} />
// new - v6 <Route path="/" element={<Home />} />
// Also now the route needs to be inside <Routes>
/* 
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/rooms/new" element={<NewRoom/>}/>
</Routes> 
*/
