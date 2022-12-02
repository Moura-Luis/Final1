import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../componentes/Button";
import useAuth from "../../hooks/userAuth";
import * as C from "./styles";

const HomePage = () => {  
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
          <C.Title>Home</C.Title>
          <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
            Sair
          </Button>
        </C.Container>
      );
    };

export default HomePage;
