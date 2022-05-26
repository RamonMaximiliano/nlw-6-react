import illustration from '../assets/images/illustration.svg'
import googleIcon from "../assets/images/google-icon.svg"
import logo from "../assets/images/logo.svg"
import "../styles/auth.scss"
import {Button} from "../components/Button"
import {useNavigate} from "react-router-dom"
import { auth } from "../services/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export function Home() {
    const history = useNavigate();

    function handleCreateRoom(){

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then(result => {
            console.log(result)
        })
            
            
            
/*             (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          //const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }); */

/*         history("/rooms/new")
 */

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
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIcon} alt="Logo" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}