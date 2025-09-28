import React from 'react';
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
            <Navbar light expand="md" className="header" style={{padding: "12px"}}>
                <NavbarBrand href="#/"><div className="header-brand">Erica Chiu</div></NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#/projects"><div className="header-section">Projects</div></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#/dance"><div className="header-section">Dance</div></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#/blog"><div className="header-section">Blog</div></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default AppHeader;
