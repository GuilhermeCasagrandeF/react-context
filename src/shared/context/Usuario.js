import { useState } from "react";
import { createContext } from "react";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuario'; //Utilizado pelo react dev tools

export const UsuarioProvider = ({children}) => { //prop padrão
    const [nome, setNome] = useState('');
    const [saldo, setSaldo] = useState(0);

    return (
        <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
            {children}
        </UsuarioContext.Provider>
    )
}