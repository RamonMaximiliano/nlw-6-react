import illustration from '../assets/images/illustration.svg'
import googleIcon from "../assets/images/google-icon.svg"
import logo from "../assets/images/logo.svg"
import "../styles/auth.scss"

export function Home() {
    return (
        <div id="page-auth">
            <aside >
                <img src={illustration} alt="Ilustração" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logo} alt="Letmeask" />
                    <button>
                        <img src={googleIcon} alt="Logo" />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <button type="submit">Entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    );
}