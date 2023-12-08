'use client'; //esto es necesario para que funcionen los hooks y algunas cosas en next.js
import { useState } from "react";

export default  function Nosotros(){
    const [numero, setNumero]= useState(0);
    function sumar (){
        setNumero(numero+1);
    }
    function restar (){
        if(numero===0){
            setNumero(0);
        }
        else{
            setNumero(numero-1)
        }
    }
    return(
        <>
            <h1>ola nosotros</h1>
            <p>contador</p>
            <button onClick={sumar}>+</button>
            <p>{numero}</p>
            <button onClick={restar}>-</button>
        </>

    )
}