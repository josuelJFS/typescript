import { useRef } from "react";

const RefExemple: React.FC = () => {
    const inputTexto = useRef<HTMLInputElement>(null);

    function capiturar(){
        console.log(inputTexto.current);
    }

    return (
        <>
            <input ref={inputTexto} />
            <button onClick={capiturar}>pegar</button>
        </>
    );
};

export default RefExemple;
