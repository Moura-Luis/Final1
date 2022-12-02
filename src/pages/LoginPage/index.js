import React, { useState } from "react";

import Input from "../../componentes/Input";
import Button from "../../componentes/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";


const LoginPage = () => {  
    const { LoginPage } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [matricula, setMatricula] = useState("");
    const [error, setError] = useState("");

    const handleLoginPage = () => {
        if (!email | !matricula){
            setError("Preencha todos os campos");
            return;
        };

        const res = LoginPage(email, matricula);
          if (res){
            setError(res);
            return;
            };
       
        navigate("/home")
    };
    return (
        <C.Container>
            <C.Label>Sistema de Login</C.Label>
            <C.Content>
                 <Input 
                    type="email" 
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]} 
                    />
                <Input 
                    type="password"
                    placeholder="Digite sua Matricula"
                    value={matricula}
                    onChange={(e) => [setMatricula(e.target.value, setError(""))]}
                    />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Entrar" onClick={handleLoginPage} />
                <C.LabelCriarConta>
                    Não tem uma conta?
                    <C.Strong>{'\n'}
                    <Link to="/CriarConta">&nbsp;Cadastre-se</Link>
                    </C.Strong>
                </C.LabelCriarConta>
            </C.Content>
        </C.Container>
    );
};


export default LoginPage;
