import illustration from '../assets/images/illustration.svg'
import googleIcon from "../assets/images/google-icon.svg"
import logo from "../assets/images/logo.svg"
import "../styles/auth.scss"
import {Button} from "../components/Button"
import {useNavigate} from "react-router-dom"



export function Home() {
    const history = useNavigate();

    function pageChange(){
        history("/rooms/new")
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
                    <button className="create-room" onClick={pageChange}>
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