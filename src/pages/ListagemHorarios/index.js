import React, { useState } from "react";

import Input from "../../componentes/Input";
import Button from "../../componentes/Button";
import { Container } from "./styles";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import HomePageADM from "../HomePage-ADM";

const ListagemHorarios = () => {
    const navigate = useNavigate();

    return (
        <C.Container>
          <C.Title>Home</C.Title>
          <Button Text="Visualizar" onClick={() => [void(), navigate("/")]}>
            Apagar
          </Button>
          <Button Text="Responder" onClick={() => [void(), navigate("/")]}>
            Gerenciar
          </Button>
          <Button Text="Voltar" onClick={() => [HomePageADM(), navigate("/HomePage")]}>
            Apagar
          </Button>
        </C.Container>
      );
    };

export default LaboratoriosPage;