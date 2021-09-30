import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        textDecoration: "none"
    }
    const normalStyle ={
        textDecoration: "none",
        margin: "15px",
        color: "purple",
        fontWeight: "bold"
    }
    return (
        <nav style={{margin: "20px"}}>
            <NavLink
                to="/home"
                activeStyle={activeStyle}
                style={normalStyle}
            >Home</NavLink>
            <NavLink
                to="/restaurant"
                activeStyle={activeStyle}
                style={normalStyle}
            >Restaurant</NavLink>
        </nav>
    );
};

export default Header;