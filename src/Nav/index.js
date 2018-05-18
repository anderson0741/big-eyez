import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import images from '../../images/level_up_cars.jpg';
import Home from '../shared/Home';
import { connect } from "react-redux";
import { logout } from "../redux/auth";
import Logo from '../images/Logo1.png';
import styled from 'styled-components';
import instagram from '../images/instagram1.png';

import './Nav.css';
import { HashLink as Link } from 'react-router-hash-link';

const StyledLink = styled(Link) `
    color: white;
    font-size: 30px;
    text-decoration: none;
    justify-self: center;
    align-items: center;
    :hover {
        border-radius: 5px;
        background-color: #555;
        color: white;
    }
`;


class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="outerNavDiv">
                <div className="navBod">
                    {/* <img className='imgs' src={Logo} alt="" /> */}
                    <h1 className="big">Big Eyes Esthetics</h1>
                    <div className="menuOptions">
                        <div className="navBod_nav guest">
                            <button className="dropbtn">Menu</button>
                            <div className="nav_dropdwn">
                                <StyledLink smooth="true" className='links' to="/#home">Home</StyledLink>
                                <StyledLink smooth="true" className='links' to="/#about">About</StyledLink>
                                <StyledLink smooth="true" className='links' to="/#options">Options</StyledLink>
                                <StyledLink smooth="true" className='links' to="/#contact">Contact</StyledLink>
                                <a className="social" href="https://www.instagram.com/marys.esthetics/?hl=en">
                                    <div className="social_icon">
                                        <img src={instagram} />
                                        <h1>Instagram</h1>
                                    </div>
                                </a>
                            </div>
                            {isAuthenticated ? <div className="navBod_nav user">
                                <button className="dropbtn">Username</button>
                                <div className="nav_dropdwn user">
                                    <a><StyledLink className='links' to="/upload">Upload Content</StyledLink></a>
                                    <a className='links' onClick={this.props.logout}>Logout</a>
                                </div>
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className="functionalDiv">
                    {/* <h1 className="smallBig">Big Eyes Esthetics</h1> */}
                    <nav role="navigation">
                        <div className="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>

                            <ul className="menu">
                                <StyledLink smooth="true" className="navLink" to="/#home"><li>Home</li></StyledLink>
                                <StyledLink smooth="true" className="navLink" to="/#options"><li>Options</li></StyledLink>
                                <StyledLink smooth="true" className="navLink" to="/#about"><li>About</li></StyledLink>
                                <StyledLink smooth="true" className="navLink" to="/#contact"><li>Contact Us</li></StyledLink>
                                <a className="social" href="https://www.instagram.com/marys.esthetics/?hl=en">
                                    <div className="social_icon">
                                        <img src={instagram} />
                                        <h1>Instagram</h1>
                                    </div>
                                </a>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Nav;
