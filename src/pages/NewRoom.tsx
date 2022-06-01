import illustration from '../assets/images/illustration.svg'
import logo from "../assets/images/logo.svg"
import "../styles/auth.scss"
import {Button} from "../components/Button"
import { Link } from "react-router-dom"
import { getDatabase,ref, set} from "firebase/database";
import { useContext, useState, FormEvent } from 'react'
import {AuthContext} from "../contexts/AuthContext"
import  {database} from '../services/firebase'


export function NewRoom() {
     const {user} = useContext(AuthContext)
 
const database = getDatabase();

const [newRoom, setNewRoom] = useState('')

/* async function handleCreateRoom(event: FormEvent){
    event.preventDefault()

if(newRoom.trim() === ''){
    return;
}

const roomRef = database.ref('rooms');

const firebaseRoom = await roomRef.push({
    title: newRoom,
    authorID: user?.id,
})
} */

function handleCreateRoom(event: FormEvent) {
    event.preventDefault()
    const db = getDatabase();
    set(ref(db, 'users/'), {
        title: newRoom,
      });
  }

    return (
        <div id="page-auth">
            <aside >
                <img src={illustration} alt="Ilustração" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>

                    <form onSubmit={handleCreateRoom}>
                        <input type="text" placeholder="Nome da sala" onChange={event => setNewRoom(event.target.value)} value={newRoom}  />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to={"/"}>Clique aqui</Link></p>
                </div>
            </main>
        </div>
    );
}