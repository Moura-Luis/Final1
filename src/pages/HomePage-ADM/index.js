import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../componentes/Button";
import useAuth from "../../hooks/userAuth";
import ListaLaboratorios from "../ListaLaboratorios-ADM";
import * as C from "./styles";

const HomePageADM = () => {  
    const { signout } = useAuth();
    const navigate = useNavigate();
    const ListaLaboratorios = ListaLaboratorios();

    return (
        <C.Container>
          <C.Title>Home</C.Title>
          <Button Text="Laboratorios" onClick={() => [ListaLaboratorios(), navigate("/ListaLaboratorios")]}>
            Laboratorios
          </Button>
          <Button Text="Usuarios" onClick={() => [signout(), navigate("/")]}>
            Usuarios
          </Button>
          <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
            Sair
          </Button>
        </C.Container>
      );
    };

export default HomePageADM;
