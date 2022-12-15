import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../componentes/Button";
import useAuth from "../../hooks/userAuth";
import HomePageADM from "../HomePage-ADM";
import * as C from "./styles";

const LaboratoriosPage = () => {
    const navigate = useNavigate();

    return (
        <C.Container>
          <C.Title>Home</C.Title>
          <Button Text="Voltar" onClick={() => [HomePageADM(), navigate("/HomePage")]}>
            Apagar
          </Button>
          <Button Text="Gerenciar" onClick={() => [signout(), navigate("/")]}>
            Gerenciar
          </Button>
          <Button Text="Apagar" onClick={() => [signout(), navigate("/")]}>
            Apagar
          </Button>
          <Button Text="Editar" onClick={() => [signout(), navigate("/")]}>
            Editar
          </Button>
        </C.Container>
      );
    };

export default LaboratoriosPage;