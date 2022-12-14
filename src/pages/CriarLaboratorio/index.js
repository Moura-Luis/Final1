import React, { useState } from "react";
import Input from "../../componentes/Input";
import Button from "../../componentes/Button";
// eslint-disable-next-line no-unused-vars
import { Container } from "./styles";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";


const CriarLaboratorio = () => {  
    const [name, setName] = useState("");
    const [predio, setPredio] = useState(""); 
    const [sala, setSala] = useState("");
    const [piso, setPiso] = useState("");
    const [capacidade, setCapacidade] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { CriarLaboratorio } = useAuth();

    const handleCriarLab = () => {
        if (!name | !predio | !sala | !piso | !capacidade) {
            setError("Preencha todos os campos");
            return;
        }

        const res = CriarLaboratorio(name, predio, sala, piso, capacidade);

        if (res) {
            setError(res);
            return;
        }

        alert("Laboratorio registrado com sucesso !");
        navigate("/");
    }

    return (
        <C.Container>
        <C.label>Faça o registro do seu Laboratorio</C.label>
        <C.Content>
        <Input
          type="name"
          placeholder="Digite o nome do Laboratorio!"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <Input
          type="predio"
          placeholder="Digite o nome do Edificio de Localização!"
          value={predio}
          onChange={(e) => [setPredio(e.target.value), setError("")]}
        />
        <Input
          type="sala"
          placeholder="Digite a Sala do Laboratorio!"
          value={sala}
          onChange={(e) => [setSala(e.target.value), setError("")]}
        />
        <Input
          type="piso"
          placeholder="Digite o andar do Laboratorio!"
          value={piso}
          onChange={(e) => [setPiso(e.target.value), setError("")]}
        />
        <Input
          type="capacidade"
          placeholder="Digite a capacidade do Laboratorio!"
          value={capacidade}
          onChange={(e) => [setCapacidade(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Criar Laboratorio!" onClick={handleCriarLab} />
            <C.labelCriarLaboratorio>
                Já existe um laboratorio assim ?
                <C.Strong>
                    <Link to="/EditarLaboratorio">&nbsp;Entre</Link>
                </C.Strong>
            </C.labelCriarLaboratorio>
        </C.Content>
     </C.Container>
    );
};

export default CriarLaboratorio;