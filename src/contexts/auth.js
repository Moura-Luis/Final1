import React, { useState, useEffect, createContext } from "react";




export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState()

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem("users_db");

            if(userToken && usersStorage) {
                const hasUser = JSON.parse(usersStorage)?.
                filter((user) => user.email == JSON.parse(userToken).email);

            if (hasUser) setUser(hasUser[0]);
    }
 }, []);

    const LoginPage = (email, matricula) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length){
            if (hasUser[0].email === email && hasUser[0].matricula === matricula){
                const token = Math.random().toStrinf(36).substrung(2);
                localStorage.setItem("user_token", JSON.stringify({email, token}));
                setUser({ email, matricula });
                return;
            } else {
                return "E-mail ou matricula incorreta";
            }
        } else {
            return "Usuário não cadastrado";
        }
        
    };  


    const CriarConta = (email, matricula) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = usersStorage?.filter((user => user.email === email));


        if (hasUser?.length){
            return "Já existe uma conta com esse e-mail";;
        }

    let newUser;
    
    if (usersStorage){ 
        newUser = [...usersStorage, {email, matricula }];
    } else {
        newUser= [{ email, matricula }];
    }

    localStorage.setItem("user_db", JSON.stringify(newUser));
    
    return;
        
    };  
    const logout = () => {
        localStorage.removeItem("user+token");
        setUser(null);;
    };


    return (
    <AuthContext.Provider
        value={{ user, signed: !!user, LoginPage, CriarConta, logout }}>  
         {children}
    </AuthContext.Provider>
    );
};