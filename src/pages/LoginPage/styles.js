import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100vh;   
`;

export const Content = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #d3d3d3;
    width: 100%;
    max-width: 350px;
    padding: 20px;
    box-shadow: 0 1px 2px #0003;
    border-radius: 1.15rem;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weigth: 600;
    color: #000000;
    
`;

export const LabelCriarConta = styled.label`
    font-size: 16px;
    color: #000000x;
    

`;

export const LabelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
    text-decoretion:none;
    color: #0000CD;
    }
`;

export const Button =styled.button`
color: red;
background-color: purple;

`;