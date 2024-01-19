import React from 'react';
import { NavLink } from 'react-router-dom';

const ConditionalNavLink = ({ to, condition, children}) => {

    if (!condition) {
        return null;
    }

    return <NavLink to={to}>
        {children}
    </NavLink>;
};

export default ConditionalNavLink;
