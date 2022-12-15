import React, { useState } from "react";

import Input from "../../componentes/Input";
import Button from "../../componentes/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";

const Reservas = () => {
    const navigate = useNavigate();

    return
    <C.Container>
          <C.Title>Reservas</C.Title>
          <C.Content>
            <Input
            type="text"
            placeholder="Texto de Justificativa"
            value={justificativa}></Input>
          </C.Content>
          <Button Text="Voltar" onClick={() => [HomePageADM(), navigate("/HomePage")]}>
            Voltar
          </Button>
          <Button Text="Visualizar Justificativa" onClick={() => [Visualiza(), navigate("/")]}>
            Visualizar Justificativa
          </Button>
          <Button Text="Cancelar" onClick={() => [Visualiza(), navigate("/")]}>
            Cancelar
          </Button>
          </C.Container>
};

export default Reservas;