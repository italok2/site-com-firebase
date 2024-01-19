import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserStatus from './UserStatus';
import Menu from './Menu';


const Home = () => {
    const navigate = useNavigate();
    
   

    return (
        <div>
            <Menu />
            <UserStatus />
        </div>
    )
}

export default Home;