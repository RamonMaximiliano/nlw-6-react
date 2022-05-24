type ButtonProps = {
    text:string;
}

export function Button(props: ButtonProps){
    return(
        <button>Clique aqui {props.text}</button>
    )
}