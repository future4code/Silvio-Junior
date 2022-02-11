import React from 'react'
import { useHistory } from "react-router-dom";
import { goToHome, goToRegistration, goToRequests } from '../route/coordinators'
import logo from '../img/logo.png'
import { Button, Logo, MainHeader } from '../styles/HeaderStyle';

function Header () {
    const history = useHistory()
    return(
        <MainHeader>
            <div>
                <Logo src={logo} alt='logo money money' />
            </div>
            <div>
                <Button onClick={() => goToHome(history)} >Home</Button>
                <Button onClick={() => goToRegistration(history)} >Realizar Cadastro</Button>
                <Button onClick={() => goToRequests(history)} >Visualizar Cadastros</Button>
            </div>
        </MainHeader>
        
    )
}

export default Header