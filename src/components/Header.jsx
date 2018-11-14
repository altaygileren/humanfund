import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Header = () => {
    return (
            <div>
                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/humanfund" className="headerLogo">The Human Fund</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/humanfund/bio">
                                Bio
      </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/humanfund/employees">
                                <Glyphicon className="userIcon" glyph="user" />
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export default Header;