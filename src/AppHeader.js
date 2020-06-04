import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';

const AppHeader = () => {
    return (
        <div>
            <Navbar light expand="md" className="header">
                <NavbarBrand href="#/"><div className="header-brand">Erica Chiu</div></NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#/dance"><div className="header-section">Dance</div></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default AppHeader;