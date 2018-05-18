import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from '../Nav/index';
import LeftSideBar from '../SideBars/LeftSideBar';
import RightSideBar from '../SideBars/RightSideBar';
import Home from '../shared/Home';
import About from '../shared/About';
import Contact from '../shared/Contact';
import Options from '../shared/Options';

import styled from 'styled-components';
import '../styles/app.css';
// import './index.css';
const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1;
    overflow: scroll;
    height: 100vh;  
`;

function App() {
    return (
        <Wrapper>
            <Nav />
            <Home/>
            <Options/>
            <About/>
            <Contact/>
        </Wrapper>
    )
}

export default App;
