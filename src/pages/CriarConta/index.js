import React, { useState } from "react";
import Input from "../../componentes/Input";
import Button from "../../componentes/Button";
// eslint-disable-next-line no-unused-vars
import { Container } from "./styles";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";


const CriarConta = () => {  
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState(""); 
    const [matricula, setMatricula] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { CriarConta } = useAuth();

    const handleCriarConta = () => {
        if (!email | !emailConf | !matricula) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os E-mails não são iguais");
            return;
        }

        const res = CriarConta(email, matricula);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso !");
        navigate("/");
    }

    return (
        <C.Container>
        <C.label>Crie sua Conta</C.label>
        <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="matricula"
          placeholder="Digite sua Matricula"
          value={matricula}
          onChange={(e) => [setMatricula(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar-se !" onClick={handleCriarConta} />
            <C.labelCriarConta>
                Já tem uma Conta ?
                <C.Strong>
                    <Link to="/LoginPage">&nbsp;Entre</Link>
                </C.Strong>
            </C.labelCriarConta>
        </C.Content>
     </C.Container>
    );
};

export default CriarConta;
