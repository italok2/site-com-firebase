import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Signup from './Signup';




const CadastrarVendedores = () => {
    const navigate = useNavigate();



    return (
        <div>
            <Menu />
            <Signup/>

        
        </div>
    )
}

export default CadastrarVendedores;