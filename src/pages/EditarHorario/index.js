import React, { useState } from "react";
import Input from "../../componentes/Input";
import Button from "../../componentes/Button";
// eslint-disable-next-line no-unused-vars
import { Container } from "./styles";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";


const EditarHorario = () => {  
    const [name, setName] = useState("");
    const [horainicial, setHoraInicial] = useState("");
    const [horafinal, setHoraFinal] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { EditarHorario } = useAuth();

    const handleEditarHorario = () => {
        if (!name | !horainicial | !horafinal) {
            setError("Preencha todos os campos");
            return;
        }

        const res = EditarHorario(name, horainicial, horafinal);

        if (res) {
            setError(res);
            return;
        }

        alert("Dados atualizados com sucesso !");
        navigate("/");
    }

    return (
        <C.Container>
        <C.label>Atualize os dados do Horario</C.label>
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
        <Button Text="Atualizar dados!" onClick={handleEditarHorario} />
            <C.labelEditarHorario>
                Não existe um horario assim ?
                <C.Strong>
                    <Link to="/CriarHorario">&nbsp;Entre</Link>
                </C.Strong>
            </C.labelEditarHorario>
        </C.Content>
     </C.Container>
    );
};

export default EditarHorario;