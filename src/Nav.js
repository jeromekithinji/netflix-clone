import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
        
        window.addEventListener("scroll", scrollHandler);
    
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                className="nav__logo"
            />

            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="User Avatar"
                className="nav__avatar"
            />
        </div>
    );
};

export default Nav;
