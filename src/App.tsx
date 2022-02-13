import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TimeJosuel from "./components/josuelTime";
import RefExemple from "./components/usandoref/exemplo";

function App() {
    

    return (
        <>
           <TimeJosuel />
           <RefExemple />
        </>
    );
}

export default App;
