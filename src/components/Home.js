import React from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from './Menu';


const Home = () => {
    const navigate = useNavigate();



    return (
        <div>
            <Menu />

        </div>
    )
}

export default Home;