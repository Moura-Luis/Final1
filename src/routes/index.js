
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import { Fragment } from "react";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CriarConta from "../pages/CriarConta";
import useAuth from "../hooks/userAuth";
import LaboratoriosPage from "../pages/ListaLaboratorios-ADM";
import HomePageADM from "../pages/HomePage-ADM";

const Private = ( {Item}) => {
    const { signed } = useAuth;

    return signed > 0 ? <Item /> : <LoginPage />;
};

const AppRoutes = () => {
 
     return (
        <BrowserRouter> 
            <Fragment>
                <Routes>
                    <Route
                        exact path="/LoginPage" 
                        element={<LoginPage/>} />
                     <Route
                        exact path="/CriarConta" 
                        element={<CriarConta/>} />
                     <Route
                        exact path="/Home" 
                        element={<HomePage/>} />
                        <Route
                        exact path="/HomeADM" 
                        element={<HomePageADM/>} />
                        <Route
                        exact path="/LaboratoriosPage" 
                        element={<LaboratoriosPage/>} />
                    <Route 
                        exact path="/"
                        element={
                            <Private>
                                <HomePage/>
                                <HomePageADM/>
                            </Private>} />
                    //para fazer mais rotas privadas é só duplicar esta linha acima//
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default AppRoutes;
