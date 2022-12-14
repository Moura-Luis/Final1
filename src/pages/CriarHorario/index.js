import React, { useState } from "react";
import Input from "../../componentes/Input";
import Button from "../../componentes/Button";
// eslint-disable-next-line no-unused-vars
import { Container } from "./styles";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";


const CriarHorario = () => {  
    const [name, setName] = useState("");
    const [horainicial, setHoraInicial] = useState("");
    const [horafinal, setHoraFinal] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { CriarHorario } = useAuth();

    const handleCriarHorario = () => {
        if (!name | !horainicial | !horafinal) {
            setError("Preencha todos os campos");
            return;
        }

        const res = CriarHorario(name, horainicial, horafinal);

        if (res) {
            setError(res);
            return;
        }

        alert("Horario Registrado com sucesso !");
        navigate("/");
    }

    return (
        <C.Container>
        <C.label>Registro de Horario</C.label>
        <C.Content>
        <Input
          type="name"
          placeholder="Nome do Horario"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <Input
          type="horainicial"
          placeholder="Digite o inicio do Horario"
          value={horainicial}
          onChange={(e) => [setHoraInicial(e.target.value), setError("")]}
        />
        <Input
          type="horafinal"
          placeholder="Digite o final do Horario"
          value={horafinal}
          onChange={(e) => [setHoraFinal(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar-se !" onClick={handleCriarConta} />
            <C.labelCriarHorario>
                Já existe um horario assim ?
                <C.Strong>
                    <Link to="/EditHorario">&nbsp;Entre</Link>
                </C.Strong>
            </C.labelCriarHorario>
        </C.Content>
     </C.Container>
    );
};

export default CriarHorario;