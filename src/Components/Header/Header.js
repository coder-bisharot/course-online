import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
        <div className="logo"> 
            <h4>Online Course</h4>
        </div>
       
        <div className="menu "> 
            <a href="#">Home</a>
            <a href="#">Course</a>
            <a href="#">Blog</a>
        </div>
        <div className="search-box">
            <input type="text"/>
            <button className="btn btn-success mx-2">Search</button>
        </div>
    </div>
    );
};

export default Header;