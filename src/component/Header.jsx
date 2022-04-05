import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <div className="topnav">
                <Navbar
                    fixed="top"
                    expand="lg"
                    bg="dark"
                    variant="dark"
                    className="topnav"
                >
                    <Navbar.Brand href="">V-Canteen</Navbar.Brand>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;

