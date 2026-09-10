// import React from 'react';
import Logo from '../src/assets/logo-text.png'

const Nav = () => {
    return (
        <div className="flex justify-between">
            <img src={Logo} alt="" />
            <div className="text-red-100 ">
                <ul>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
           <button>Sign in</button> 
           <button>Sign Up</button> 
        </div>
    );
};

export default Nav;