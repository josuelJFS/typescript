import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [cont, setCont] = useState<number>(0);
    const [next, setNext] = useState<number>(0);

    function increment() {
        setCont(cont + 1);
    }

    function nextF() {
        setNext(next + 1);
    }

    useEffect(() => {
        // toda vez que cont mudar o useEffect reexeculta

        console.log("pagina api");
        
    }, [cont]);

    useEffect(()=>{
      console.log("next"+next);
    },[next])

    return (
        <>
            <h1 className="App">{cont}</h1>
            <button onClick={increment}>pagina</button>
            <button onClick={nextF}>next</button>
        </>
    );
}

export default App;
