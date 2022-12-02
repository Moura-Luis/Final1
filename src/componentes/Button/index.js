import React from "react";
import * as C from "./styles";


const Button = ({ Text, onClick, Type = "submit"}) => {  
    return (
        <C.Button type={Type} onClick={onClick}>
            {Text}
        </C.Button>
    );   
};

export default Button;
